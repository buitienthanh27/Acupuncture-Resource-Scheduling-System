# Project guidance

- This project is the Acupuncture Scheduling System. Business discovery inputs
  are in `Docs/`; consult the relevant documents when clarifying requirements
  and bounded contexts.
- The technology and architecture baseline is in `openspec/config.yaml`.
  Follow it when proposing changes or scaffolding application projects.
- Use `Docs/process/handbook.md` as the operating guide, `templates.md` there
  for record fields, and `records.md` for actual decisions and evidence.
  The user asked to continue to subsequent steps after authorized work is
  completed. Reuse settled decisions; ask only for essential missing input or
  authorization outside the current scope. Git/push/deployment rights do not
  expand automatically; the initial local baseline commit was authorized once.
- The user approved the solo process proposal and execution roadmap on
  2026-11-12. See decision DEC-SDP-SOLO-001 in
  `openspec/changes/establish-solo-development-process/proposal.md`.
  Reuse those decisions for detailed planning; roadmap approval is distinct
  from completed implementation tasks or G1-G7 approvals.
- Backend: ASP.NET Core 11 on .NET 11, EF Core with its compatible stable
  Npgsql provider, and PostgreSQL. Frontend: React + Vite + strict TypeScript.
- The backend is a modular monolith using Clean Architecture + DDD. Organize
  internal modules by validated bounded contexts; keep one deployable backend.
  Do not split it into microservices.
- Keep Domain and Application independent of ASP.NET Core, EF Core and
  Infrastructure. Keep persistence implementations and migrations in
  Infrastructure, and dependency registration in the API composition root.
- Contexts own their models and data; communication goes through explicit
  in-process contracts. Validate boundaries from business workflows before
  creating modules. Do not create a module per table or screen.
- This repository currently contains planning and workflow configuration.
  Paths under `src/` and `tests/` in the baseline are planned conventions,
  not existing runnable application projects.
- OpenSpec skills are under `.agents/skills/`; the custom schema and templates
  are under `openspec/schemas/intent-driven/`. Use the workflow relevant to the
  task; a configuration edit does not itself require an implementation change.
- Verify configuration edits with `openspec schema validate intent-driven --json`
  and `openspec doctor --json`. Once source projects exist, run the checks
  appropriate to the affected backend or frontend code.
- Keep work local. Do not create commits or push unless explicitly requested.
