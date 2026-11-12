import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { spawnSync } from 'node:child_process';
import { parseArgs } from 'node:util';

// Read-only checks plus an explicitly requested, isolated OpenSpec pilot.
// This tool reports evidence; it never grants approval or edits Git history.
const repo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { values } = parseArgs({ options: {
  root: { type: 'string', default: repo },
  pilot: { type: 'boolean', default: false },
  report: { type: 'string' },
} });
const root = path.resolve(values.root);
const cliCandidates = [process.env.OPENSPEC_CLI,
  process.env.APPDATA && path.join(process.env.APPDATA, 'npm/node_modules/@fission-ai/openspec/bin/openspec.js'),
  path.join(repo, 'node_modules/@fission-ai/openspec/bin/openspec.js')].filter(Boolean);
const cli = cliCandidates.find(candidate => fs.existsSync(candidate));
if (!cli) throw new Error('OpenSpec CLI not found. Set OPENSPEC_CLI to its bin/openspec.js.');
const YAML = createRequire(cli)('yaml');
const report = { recordedAt: new Date().toISOString(), timezone: 'Asia/Saigon',
  scope: 'P0 tooling and planning; not application tests or gate approval',
  checks: [], pilot: [], issues: [] };

function within(base, target) {
  const relative = path.relative(path.resolve(base), path.resolve(target));
  if (relative === '..' || relative.startsWith(`..${path.sep}`) || path.isAbsolute(relative)) {
    throw new Error(`Path outside intended root: ${target}`);
  }
  return path.resolve(target);
}
function walk(directory) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const target = path.join(directory, entry.name);
    if (entry.isSymbolicLink()) throw new Error(`Unexpected link in document tree: ${target}`);
    return entry.isDirectory() ? walk(target) : [target];
  });
}
function runCli(args, cwd = root) {
  const result = spawnSync(process.execPath, [cli, ...args], { cwd, encoding: 'utf8',
    env: { ...process.env, OPENSPEC_TELEMETRY: '0' }, timeout: 30000, windowsHide: true });
  let data;
  try { data = JSON.parse(result.stdout); } catch { data = null; }
  return { command: ['openspec', ...args].join(' '), exitCode: result.status,
    data, error: result.error?.message || (result.status !== 0 ? result.stderr.trim() : undefined) };
}
function check(name, action) {
  try { const details = action(); report.checks.push({ name, result: 'Passed', details }); }
  catch (error) { report.checks.push({ name, result: 'Failed', message: error.message }); report.issues.push(`${name}: ${error.message}`); }
}
function requireThat(condition, message) { if (!condition) throw new Error(message); }

function adrIssues(changeDir) {
  const file = path.join(changeDir, 'adr-index.md');
  if (!fs.existsSync(file)) return ['Missing adr-index.md'];
  const text = fs.readFileSync(file, 'utf8');
  const rows = text.split(/\r?\n/).filter(line => line.startsWith('|')).map(line => line.split('|').slice(1, -1).map(cell => cell.trim()));
  const field = key => rows.find(row => row[0] === key)?.[1] || '';
  const outcome = field('Review result');
  const reason = field('Reason');
  const findings = [];
  if (!['Not Applicable', 'Decisions Recorded'].includes(outcome)) findings.push('Invalid Review result');
  if (!reason || /<!--|TODO|\{.+\}/i.test(reason)) findings.push('Missing concrete Reason');
  const links = [...text.matchAll(/\[[^\]]+\]\((adr\/[^)]+\.md)\)/g)].map(match => match[1]);
  if (outcome === 'Not Applicable' && links.length) findings.push('Not Applicable index links ADR decisions');
  const decisionFiles = walk(path.join(changeDir, 'adr')).filter(target => /^\d{4}-.+\.md$/.test(path.basename(target)) && !target.endsWith('-glossary-reference.md'));
  if (outcome === 'Not Applicable' && decisionFiles.length) findings.push('Not Applicable contradicts real ADR files');
  if (outcome === 'Decisions Recorded' && !links.length) findings.push('No real ADR linked');
  for (const link of links) {
    const target = within(changeDir, path.resolve(changeDir, link));
    if (!/^\d{4}-.+\.md$/.test(path.basename(target)) || target.endsWith('-glossary-reference.md')) findings.push(`Not a decision ADR: ${link}`);
    else if (!fs.existsSync(target)) findings.push(`Missing linked ADR: ${link}`);
    else if (!/## Status\s+(Proposed|Accepted|Deprecated|Superseded)\b/.test(fs.readFileSync(target, 'utf8'))) findings.push(`Missing actual ADR status: ${link}`);
  }
  return findings;
}

check('Schema contract', () => {
  const schema = YAML.parse(fs.readFileSync(path.join(root, 'openspec/schemas/intent-driven/schema.yaml'), 'utf8'));
  requireThat(schema.artifacts.find(item => item.id === 'adr')?.generates === 'adr-index.md', 'ADR output is not exact index');
  requireThat(schema.artifacts.find(item => item.id === 'specs')?.generates === 'specs/**/spec.md', 'Specs output still matches companion files');
  requireThat(schema.artifacts.find(item => item.id === 'tasks')?.requires.includes('adr'), 'ADR review dependency missing');
  return { adr: 'adr-index.md', specs: 'specs/**/spec.md' };
});

check('Markdown links, companions and traceability', () => {
  const active = path.join(root, 'openspec/changes/establish-solo-development-process');
  const files = [...walk(active), ...walk(path.join(root, 'Docs/process'))].filter(file => file.endsWith('.md'));
  for (const file of files) {
    const text = fs.readFileSync(file, 'utf8');
    requireThat(!text.includes('\uFFFD'), `Encoding error: ${file}`);
    requireThat((text.match(/^```/gm) || []).length % 2 === 0, `Unclosed fence: ${file}`);
    if (!file.endsWith('-glossary-reference.md')) requireThat(fs.existsSync(file.slice(0, -3) + '-glossary-reference.md'), `Missing glossary companion: ${file}`);
    for (const match of text.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
      const target = match[1].split('#')[0];
      if (target && !target.includes('://')) requireThat(fs.existsSync(path.resolve(path.dirname(file), target)), `Broken link ${file}: ${target}`);
    }
  }
  const specs = files.filter(file => path.basename(file) === 'spec.md');
  const ids = specs.flatMap(file => [...fs.readFileSync(file, 'utf8').matchAll(/^### Requirement: ([A-Z]+-\d+)/gm)].map(match => match[1]));
  const taskText = fs.readFileSync(path.join(active, 'tasks.md'), 'utf8');
  const taskIds = [...taskText.matchAll(/^- \[[ x]\] (\d+\.\d+) /gm)].map(match => match[1]);
  requireThat(new Set(ids).size === ids.length && ids.length > 0, 'Missing or duplicate requirement IDs');
  requireThat(new Set(taskIds).size === taskIds.length && taskIds.length > 0, 'Missing or duplicate task IDs');
  for (const id of ids) requireThat(taskText.includes(`| ${id} |`), `Unmapped requirement ${id}`);
  return { markdownFiles: files.length, capabilities: specs.length, requirements: ids.length, tasks: taskIds.length };
});

check('Active ADR review content', () => {
  const changeDir = path.join(root, 'openspec/changes/establish-solo-development-process');
  const findings = adrIssues(changeDir);
  requireThat(!findings.length, findings.join('; '));
  return { index: 'adr-index.md', approvalInferred: false };
});

check('Skill metadata and retained authorization boundaries', () => {
  const skillRoot = path.join(root, '.agents/skills');
  const skills = fs.readdirSync(skillRoot, { withFileTypes: true }).filter(entry => entry.isDirectory());
  for (const entry of skills) {
    const text = fs.readFileSync(path.join(skillRoot, entry.name, 'SKILL.md'), 'utf8');
    const front = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    requireThat(front, `Missing frontmatter: ${entry.name}`);
    const meta = YAML.parse(front[1]);
    requireThat(meta.name === entry.name && typeof meta.description === 'string' && meta.description.length > 0, `Invalid skill metadata: ${entry.name}`);
    if (entry.name.startsWith('openspec-') && entry.name !== 'openspec-bulk-apply-change') {
      requireThat(!/\*\*(AskUserQuestion|TodoWrite) tool\*\*|use Task tool|use the Skill tool/i.test(text), `Legacy tool call: ${entry.name}`);
    }
  }
  const gitPolicy = fs.readFileSync(path.join(skillRoot, 'openspec-git-discipline/SKILL.md'), 'utf8');
  requireThat(gitPolicy.includes('Never create commits, branches, or merges unless the user explicitly asks.'), 'Git authorization guard missing');
  return { skillCount: skills.length, optionalDelegationIsNotDefault: true };
});

for (const [name, args] of [
  ['OpenSpec schema validation', ['schema', 'validate', 'intent-driven', '--json']],
  ['OpenSpec strict change validation', ['validate', 'establish-solo-development-process', '--type', 'change', '--strict', '--json', '--no-interactive']],
  ['OpenSpec doctor', ['doctor', '--json']],
]) check(name, () => {
  const result = runCli(args);
  requireThat(result.exitCode === 0 && result.data, JSON.stringify(result));
  if (name.includes('strict')) requireThat(result.data.summary.totals.failed === 0, 'Strict change validation failed');
  return result;
});

if (values.pilot) {
  const parent = path.join(repo, '.process-fixtures');
  if (fs.existsSync(parent)) within(repo, fs.realpathSync(parent));
  fs.mkdirSync(parent, { recursive: true });
  const realParent = fs.realpathSync(parent);
  const fixture = path.join(realParent, `p0-${crypto.randomUUID()}`);
  fs.mkdirSync(fixture);
  const fixtureChange = path.join(fixture, 'openspec/changes/sample');
  function put(relative, content) {
    const target = within(fixture, path.join(fixture, relative));
    fs.mkdirSync(path.dirname(target), { recursive: true }); fs.writeFileSync(target, content);
  }
  function status() {
    const result = runCli(['status', '--change', 'sample', '--json'], fixture);
    requireThat(result.exitCode === 0 && result.data, JSON.stringify(result));
    requireThat(path.resolve(result.data.changeRoot) === path.resolve(fixtureChange), 'CLI used another root');
    return Object.fromEntries(result.data.artifacts.map(item => [item.id, item.status]));
  }
  function pilot(name, action) {
    try { const actual = action(); report.pilot.push({ name, result: 'Passed', actual }); }
    catch (error) { report.pilot.push({ name, result: 'Failed', message: error.message }); report.issues.push(`Pilot ${name}: ${error.message}`); }
  }
  const noneIndex = '# ADR Review Index\n\n| Field | Value |\n| --- | --- |\n| Review result | Not Applicable |\n| Reason | Fixture changes wording only; no architectural decision. |\n';
  try {
    fs.cpSync(path.join(root, 'openspec/schemas/intent-driven'), path.join(fixture, 'openspec/schemas/intent-driven'), { recursive: true });
    put('openspec/config.yaml', 'schema: intent-driven\n');
    put('openspec/changes/sample/.openspec.yaml', 'schema: intent-driven\ncreated: 2026-11-12\n');
    put('openspec/changes/sample/proposal.md', 'Fixture proposal, not a project decision.\n');
    put('openspec/changes/sample/design.md', 'Fixture design, not project implementation.\n');
    put('openspec/changes/sample/specs/demo/spec.md', '## ADDED Requirements\n\n### Requirement: Fixture behavior\nThe fixture SHALL demonstrate exact output detection.\n\n#### Scenario: File exists\n- **WHEN** the main spec is present\n- **THEN** it is detected\n');
    put('openspec/changes/sample/adr/README.md', 'Auxiliary fixture file, not an ADR review index.\n');
    put('openspec/changes/sample/adr/0001-example-glossary-reference.md', 'Auxiliary glossary reference only.\n');
    pilot('Auxiliary ADR files cannot replace missing index', () => {
      const actual = status(); requireThat(actual.adr !== 'done' && actual.tasks === 'blocked', JSON.stringify(actual)); return actual;
    });
    put('openspec/changes/sample/adr-index.md', noneIndex);
    pilot('No significant decision completes review without fake ADR', () => {
      const actual = status(); requireThat(actual.adr === 'done' && actual.tasks === 'ready' && !adrIssues(fixtureChange).length, JSON.stringify(actual)); return actual;
    });
    put('openspec/changes/sample/adr/0001-real-fixture.md', '# Fixture ADR — synthetic pilot only\n\n## Status\n\nProposed\n\n## Context\n\nTests a link, not a user approval.\n');
    put('openspec/changes/sample/adr-index.md', '# ADR Review Index\n\n| Field | Value |\n| --- | --- |\n| Review result | Decisions Recorded |\n| Reason | Synthetic significant-decision path. |\n\n[ADR-0001](adr/0001-real-fixture.md)\n');
    pilot('Real decision link retains Proposed status', () => {
      const actual = status(); requireThat(actual.adr === 'done' && !adrIssues(fixtureChange).length, JSON.stringify(actual)); return { ...actual, approvalInferred: false };
    });
    put('openspec/changes/sample/adr-index.md', noneIndex);
    pilot('Not Applicable cannot hide an existing decision ADR', () => {
      const findings = adrIssues(fixtureChange); requireThat(findings.includes('Not Applicable contradicts real ADR files'), JSON.stringify(findings)); return { contentFindings: findings };
    });
    fs.unlinkSync(within(fixture, path.join(fixtureChange, 'adr/0001-real-fixture.md')));
    put('openspec/changes/sample/adr-index.md', noneIndex.replace('Fixture changes wording only; no architectural decision.', ''));
    pilot('Malformed index is rejected by content check even when CLI sees a file', () => {
      const actual = status(); const findings = adrIssues(fixtureChange); requireThat(actual.adr === 'done' && findings.includes('Missing concrete Reason'), JSON.stringify({ actual, findings })); return { cli: actual.adr, contentFindings: findings };
    });
    put('openspec/changes/sample/adr-index.md', noneIndex);
    put('openspec/changes/sample/specs/demo/spec-glossary-reference.md', 'Auxiliary fixture only.\n');
    fs.unlinkSync(within(fixture, path.join(fixtureChange, 'specs/demo/spec.md')));
    pilot('Spec companion cannot complete missing main spec', () => {
      const actual = status(); requireThat(actual.specs !== 'done' && actual.tasks === 'blocked', JSON.stringify(actual)); return actual;
    });
  } finally {
    // Verify the resolved absolute recursive-delete target immediately before cleanup.
    const actual = fs.realpathSync(fixture);
    within(repo, actual); within(realParent, actual);
    requireThat(actual === fixture && /^p0-[0-9a-f-]+$/.test(path.basename(actual)), 'Refusing unexpected fixture cleanup target');
    fs.rmSync(actual, { recursive: true });
  }
}

report.passed = report.issues.length === 0;
if (values.report) {
  const target = within(repo, path.resolve(repo, values.report));
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, JSON.stringify(report, null, 2) + '\n');
}
console.log(JSON.stringify({ passed: report.passed, checks: report.checks.length,
  pilotCases: report.pilot.length, issues: report.issues }, null, 2));
if (!report.passed) process.exitCode = 1;
