# Sổ tay quy trình solo

| Thuộc tính | Giá trị |
| --- | --- |
| ID / phiên bản | SDP-SOLO / 1.0 pilot local |
| Owner | Chủ dự án |
| Cơ sở | [Proposal và DEC-SDP-SOLO-001](../../openspec/changes/establish-solo-development-process/proposal.md), chỉ dẫn tiếp tục triển khai trong cuộc trao đổi |
| Phạm vi | Công cụ và cách làm việc; không tự phê duyệt G1–G7 của sản phẩm |
| Thay đổi | 12/11/2026: áp dụng P0; xem [records](records.md) để biết công việc và quyết định thực tế |

Đọc trang này để làm việc; mở [mẫu hồ sơ](templates.md) khi cần ghi thông tin và [records](records.md) khi cần xem bằng chứng. Các file glossary reference phục vụ tra cứu. Quy trình tham chiếu SDP do người dùng cung cấp, không tuyên bố chứng nhận ISO/CMMI hoặc bảo đảm không còn lỗi.

## Quyền quyết định

Chủ dự án kiêm nhiệm phân tích, thiết kế, phát triển, kiểm thử và vận hành. Codex thực hiện các bước local được giao, tập hợp bằng chứng và tiếp tục sang bước kế tiếp trong phạm vi đã cho phép. Quyết định quan trọng thiếu dữ kiện, thay đổi scope đáng kể và hành động ngoài phạm vi cần được hỏi riêng.

Không gán quyết định cho người dùng hoặc khách hàng nếu chưa có nguồn xác nhận. Thời điểm ghi hồ sơ khác thời điểm người dùng gửi quyết định. **Self-review** là lượt xem xét riêng của người thực hiện; AI review hỗ trợ không phải reviewer độc lập. Yêu cầu độc lập từ hợp đồng được xử lý riêng, không mặc nhiên đạt trong mô hình solo.

## POL-01 — Chất lượng và kỷ luật thực hiện

| Quy tắc | Cách áp dụng |
| --- | --- |
| R01–R02 | Mỗi việc có ID, mục đích/nguồn, scope, AC; phân biệt sự thật, giả định, Unknown và quyết định |
| R03–R04 | **Baseline** có phiên bản/phạm vi; thay đổi có impact; **Traceability** nối source -> REQ/BR/NFR -> AC -> change/task -> revision -> tests -> release nếu áp dụng |
| R05–R06 | Một backend modular monolith; module theo **Bounded Context** có căn cứ nghiệp vụ; Domain/Application độc lập framework và Infrastructure; context không truy cập internals/bảng/DbContext của nhau |
| R07–R09 | Kiểm thử theo AC/rủi ro; use case có unit tests, persistence đặc thù thử với PostgreSQL; giữ Failed/Not Run đúng trạng thái; self-review có findings và retest |
| R11–R13 | Quyết định gắn đúng phiên bản; lỗi có severity và priority riêng; **Exception** có thẩm quyền, scope, rủi ro, biện pháp bù, owner và hạn |
| R14–R16 | Phát hành đúng **Release Candidate**; **Rollback** xét cả dữ liệu; archive không chứng minh đã deploy hoặc bàn giao |
| R17–R18 | Dùng lại chỉ dẫn còn hiệu lực, không hỏi lại từng file; không tự mở rộng quyền Git/publish/deploy; giữ một nguồn chính và hồ sơ gọn |

## POL-02 — Bảo mật theo rủi ro

R10: không lưu secrets trong source, log hoặc evidence; dùng environment/user-secrets cho local, mẫu cấu hình không có mật khẩu thật. Phân quyền tối thiểu, rà dependency và nguy cơ truy cập dữ liệu theo tác động của change. Không dùng dữ liệu khách hàng thật ngoài quyền được giao. Phát hiện lộ secrets thì ngừng lan truyền, báo owner và xử lý theo phạm vi; không chép giá trị secrets vào hồ sơ.

Scope rủi ro cao gồm thay đổi quyền, dữ liệu nhạy cảm, invariant nghiệp vụ, migration tác động dữ liệu và Production. Tăng review, kiểm tra thất bại/biên/đồng thời phù hợp, backup/recovery và định danh artifact. Nếu chưa đủ khả năng kiểm chứng, giảm scope hoặc làm spike; không tự hạ severity để vượt gate.

## Điều kiện sẵn sàng và hoàn thành

**Definition of Ready**: task có ID/loại/owner, mục đích, scope, nguồn yêu cầu/change, AC, dependency, cách kiểm tra, rủi ro liên quan và đầu vào đủ rõ. Task mơ hồ ở Backlog hoặc thành discovery/spike có đầu ra rõ. Task độc lập đủ điều kiện vẫn tiếp tục.

**Definition of Done** theo loại:

- Tài liệu: nguồn/version rõ, nội dung được review, unknown có owner, links và tác động cập nhật.
- Code: đạt AC, self-review, build/tests/checks phù hợp đạt hoặc có ngoại lệ hợp lệ; specs/tài liệu và findings được cập nhật.
- Release: đúng artifact đã được xét ở G6, có deploy/smoke/recovery evidence.
- Bàn giao: có G7, phạm vi/giới hạn/support và xác nhận khách hàng nếu được yêu cầu.

Workflow: Backlog -> Ready for Dev -> In Progress -> Code Review -> Ready for QA -> In Testing -> Ready for Release -> Done. Với tài liệu/code không thuộc task phát hành, bước release có thể N/A có lý do. Blocked/Reopened/Cancelled có lý do và hành động tiếp theo. Done local không đồng nghĩa Production.

## Quality Gates G1–G7

Mỗi **Quality Gate** ghi scope, phiên bản/hash, tiêu chí và actual result, evidence, người quyết định, nguồn quyết định và thời điểm/múi giờ. Trạng thái: Not Started, In Review, Approved, Rejected, On Hold, Approved with Exception, Superseded. Chỉ quyết định còn hiệu lực cho đúng phạm vi mới cho chuyển bước; N/A áp dụng cho tiêu chí có lý do, không dùng để bỏ cả gate.

| Gate | Điều kiện / bằng chứng | Người quyết định |
| --- | --- | --- |
| G1 | Charter, scope, nguồn lực/ước lượng có giả định, risk register; chưa đủ căn cứ thì chưa ghi cam kết chính thức | Chủ dự án; khách hàng khi là cam kết cần họ xác nhận |
| G2 | Baseline yêu cầu, AC, NFR, backlog/MVP, glossary và câu hỏi đã xử lý cho scope sắp làm | Chủ dự án và đúng đại diện khách hàng khi cần |
| G3 | Review context ownership, boundary, dữ liệu/API/UI và rủi ro; ADR chỉ khi đáng kể | Chủ dự án trong lượt thiết kế |
| G4 | Tasks đạt DoR, môi trường/dependency/checks/test plan và năng lực solo sẵn sàng | Chủ dự án |
| G5 | Diff/revision, self-review, build/tests/lint/scan liên quan và findings đã xử lý | Chủ dự án, dựa trên output thật |
| G6 | AC/tests, QA/UAT phù hợp, lỗi/rủi ro còn lại, release candidate, deploy/backup/rollback/monitoring; blocker/critical chưa xử lý hoặc chưa được chấp thuận rủi ro hợp lệ thì chưa đủ điều kiện | Chủ dự án là release authority nội bộ; khách hàng theo phạm vi/hợp đồng |
| G7 | Deployment/smoke đúng version, handover/support, vấn đề còn lại và bằng chứng tiếp nhận | Chủ dự án; khách hàng khi cần |

File có mặt, CLI báo done hoặc tests xanh không tự là Approved. Baseline/AC/artifact đổi hoặc ngoại lệ hết hạn thì xem lại phần quyết định bị ảnh hưởng, giữ lịch sử cũ. Ngoại lệ không biến Failed/Not Run thành Passed, không cấp quyền ký thay khách hàng và không tự áp dụng cho release khác.

## SOP-01–12 — Các bước làm việc

| SOP | Đầu vào và cách làm | Đầu ra / điểm chuyển |
| --- | --- | --- |
| SOP-01 Khởi tạo | Kiểm kê nguồn, mục tiêu, trong/ngoài scope; đánh giá khả thi, năng lực solo, khoảng ước lượng và rủi ro | Charter/scope/risk; G1 |
| SOP-02 Yêu cầu | Trích source có vị trí, actor/luồng/ngoại lệ, BR/AC/NFR; xử lý mâu thuẫn; chọn MVP; chốt baseline | Requirements/backlog/glossary/traceability; G2; sau đó thay đổi có impact |
| SOP-03 Thiết kế | Xác định context bằng ngôn ngữ/invariant/ownership; review layer, aggregate/transaction, data/API/UI, security; ghi alternatives và ADR đáng kể | Design/context map, ADR index, API/ERD/threat model khi cần; G3 |
| SOP-04 Kế hoạch | Chia change/lát cắt nhỏ, dependency, capacity/milestone/test/release; chuẩn bị môi trường | Tasks và DoR; G4; không ép thiết kế cả hệ thống trước phần đủ rõ |
| SOP-05 Coding/review | Thực hiện từng task, update checkbox theo kết quả, unit tests và integration liên quan; self-review lượt riêng, checks và xử lý findings | Diff/revision/review/check evidence; G5 |
| SOP-06 Test/defects | Functional/integration/regression và NFR theo rủi ro; defect có reproduction, severity/priority/owner; retest bản sửa | Test/defect/QA records; làm đầu vào G6; không tự tạo UAT khách hàng |
| SOP-07 Change/release | Ghi before/after và impact scope/chi phí/lịch trình/kiến trúc/data/tests; định danh artifact, rủi ro và release notes | Change request, baseline mới khi được chốt, release checklist; G6 |
| SOP-08 Deploy/rollback | Được cho phép đúng môi trường; preflight version/config/migration/backup; deploy, smoke/monitor; rollback khi trigger | Deployment/recovery log và handover; G7 |
| SOP-09 Incident/problem | Nhận alert/support, phân loại tác động, owner/timeline; ưu tiên phục hồi; review nguyên nhân sau ổn định | Incident, corrective tasks và retest; không đóng corrective task chỉ vì incident đã đóng |
| SOP-10 Cấu hình/quyền | Pin version/lockfile, tách env, secrets ngoài Git; kiểm kê access và quyền; backup/restore theo rủi ro | Inventory/config/access evidence; không tự sửa máy hoặc remote ngoài scope |
| SOP-11 Risk/exception | Ghi risk/trigger/owner/biện pháp; ngoại lệ có scope/version/authority/hạn/corrective task | Quyết định và follow-up; hết hạn xem lại gate; giữ actual result gốc |
| SOP-12 Audit/cải tiến | Sau change/release xem DoR/DoD; hằng tháng khi hoạt động xem KPI/risk/exception; hằng quý hoặc thay đổi lớn audit mẫu | Findings/owner/tasks, version và changelog quy trình; dự án ngắn gộp theo mốc giao |

## Git và OpenSpec

Planning local đã được giao được tiếp tục mà không bắt commit sau mỗi file. Trước apply kiểm tra planning hiện hành có trên `main`; dùng chỉ dẫn người dùng hiện có cho đúng thao tác và scope. Origin không đồng nghĩa quyền push. Commit baseline đã được cho phép một lần, không tự suy ra quyền commit về sau. Archive theo Git policy từ main sau tích hợp; commit/push/merge cần chỉ dẫn phù hợp.

Luồng planning: proposal -> specs/design -> ADR review index -> tasks. Artifact ADR có tên xác định `adr-index.md`; kết luận Not Applicable phải có lý do, Decisions Recorded phải trỏ ADR thật với status. Index/ADR Proposed không tự thành Accepted. Chỉ có glossary/README trong `adr/` không thay output chính. Dùng `scripts/check-process.mjs` cùng CLI để kiểm tra nội dung và pilot; check không thay chủ dự án ra quyết định.

Sau apply: verify đối chiếu specs/code/checks, xử lý findings, sync/archive theo scope được giao. Change giao local ghi local, không tự ghi Production. Khi xong, tiếp tục bước độc lập đã được cho phép; hỏi riêng khi thiếu dữ kiện thiết yếu hoặc cần hành động ngoài scope.

## Tám chỉ số dùng để cải tiến

Chưa có dữ liệu nền thì chưa đặt target; không dùng chỉ số riêng lẻ đánh giá năng suất cá nhân. Hiển thị số mẫu, định nghĩa và cửa sổ đo; thiếu dữ liệu hoặc mẫu số 0 ghi N/A, không thay bằng 0 để làm đẹp báo cáo.

| KPI | Định nghĩa / nguồn | Nhịp xem |
| --- | --- | --- |
| Lead Time for Changes | Từ code change định danh đến Production thành công, từ revision/deploy records; cycle time local là chỉ số khác | Release / tháng |
| Deployment Frequency | Số deployment Production thành công trong kỳ | Tháng |
| Change Failure Rate | Deployment gây sự cố cần khắc phục / tổng deployment Production trong kỳ | Tháng |
| Failed Deployment Recovery Time | Từ phát hiện deployment thất bại đến xác nhận dịch vụ phục hồi; giữ số mẫu/timeline | Mỗi sự cố |
| Escaped Defect Rate | Lỗi sau giao / tổng lỗi phát hiện của cùng release và kỳ quan sát; công bố cách phân loại | Release / tháng |
| Sprint Goal Success | Mục tiêu đạt / mục tiêu đã chốt; không dùng Sprint thì gọi chỉ số iteration riêng | Iteration |
| Rework Rate | Công sức sửa do lỗi/hiểu sai / tổng công sức kỳ, tách yêu cầu mới | Tháng |
| Quality Gate Compliance | Gate đạt đúng kiểm soát / gate áp dụng đã đi đến quyết định; báo riêng ngoại lệ/quá hạn/thiếu bằng chứng | Release / tháng |

## Inventory P0

Baseline trước sửa: 71 file, commit `af7c1f6927486fbeaa68e809357906740247d8bc`; [hash và kích thước](evidence/p0-baseline.json). Công cụ đã quan sát: OpenSpec 2.0.0, Node 24.13.0, SDK .NET 10.0.102/10.0.301; SDK 11 chưa có. Git main/origin đã có, baseline commit local đã được người dùng cho phép; chưa push. Không có source app/CI/môi trường Production để tuyên bố đã build hoặc nghiệm thu.

Nguồn nghiệp vụ hiện hành, cần discovery ở bước sau:

- [Phân tích và thiết kế ClinicFlow v2](../ClinicFlow_Phan_tich_nghiep_vu_va_Thiet_ke_he_thong_v2.docx).
- [Bản PDF phân tích ClinicFlow v2](../ClinicFlow_Phan_tich_nghiep_vu_v2.pdf).
- [EPICS ClinicFlow mở rộng v2](../ClinicFlow_EPICS_Phase123_MoRong_v2.xlsx).

Các tên khảo sát/EPICS cũ không còn trong thư mục. Không mặc định PDF/DOCX đồng nhất; đối chiếu nội dung khi discovery. Các yêu cầu nghiệp vụ, MVP, context và NFR chưa được proposal quy trình tự chốt.

| Skill | Khả năng trong luồng solo sau chuẩn hóa |
| --- | --- |
| openspec-propose, openspec-new-change, openspec-continue-change | Soạn planning theo phạm vi người dùng; suy ra change rõ ngữ cảnh, không bịa tool hoặc hỏi lại từng file |
| openspec-apply-change, openspec-verify-change | Thực hiện/kiểm tra với context CLI và bằng chứng, giữ Git preflight |
| openspec-sync-specs, openspec-archive-change | Sync/archive local đúng scope, không tự commit/push hoặc giả deployment |
| openspec-explore, openspec-git-discipline | Discovery không code; planning/Git guard rõ |
| grill-me, glossary, gherkin-authoring | Phỏng vấn điểm chưa rõ, thuật ngữ, scenarios; giữ lựa chọn đã có |
| c4-diagrams, architectural-decision-records | Mermaid mức nhẹ đã chọn; MADR minimal đã chọn; không hỏi lại cùng lựa chọn |
| openspec-bulk-apply-change | Conditional, ngoài mặc định solo; cần yêu cầu delegation/worktree và runtime phù hợp |
| adversarial-authoring | Conditional, ngoài mặc định solo; named-agent file không tự cấu hình runtime; không giả review độc lập |

## Kiểm chứng và khôi phục

Xem [records](records.md) để phân biệt output đã chạy với bằng chứng dự kiến. Kiểm tra schema/strict/doctor, exact artifact, links và pilot trước khi ghi P0 hoàn thành. CLI có thể nhận file index sai nội dung là done; checker/checklist phải phát hiện và không công bố đủ điều kiện dựa riêng CLI.

Khôi phục tooling bằng cách đối chiếu đúng đường dẫn với baseline commit và hash; giữ quyết định/history mới. Không dùng reset hard, xóa `.git` hoặc tài liệu người dùng để làm checks xanh. Mọi thao tác khôi phục có thể ghi đè thay đổi người dùng phải được xác định scope trước khi thực hiện.
