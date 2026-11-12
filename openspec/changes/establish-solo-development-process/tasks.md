# Tasks P0 — chuẩn hóa workflow và hồ sơ quy trình

Kết quả local: **26/26 task đã hoàn thành**, bằng chứng tại [CHECK-P0-001 và REVIEW-P0-001](../../../Docs/process/records.md). File chỉ bao gồm P0.02–P0.07 của [roadmap](execution-plan.md); P0.01 đã Done theo DEC-SDP-SOLO-001. Năm specs được thực hiện thành hướng dẫn, mẫu và kiểm chứng ở P0; chạy các giai đoạn P1–P8 trên sản phẩm là scope khác.

Chủ dự án là owner; Codex hỗ trợ trong phạm vi được giao. Mỗi bước được chia nhỏ để thường hoàn thành dưới hai giờ; phát hiện bước lớn hơn thì tách tiếp và giữ mapping requirement. Không tự tạo commit, branch, merge hoặc push.

Điều kiện trước apply: planning được kiểm tra, các chi tiết mới được xem xét theo phạm vi, và checkpoint Git của policy hiện hành được đáp ứng. Checkpoint đầu apply đã đáp ứng bằng commit baseline af7c1f6 theo quyền người dùng cấp. Phần triển khai hiện chưa có commit mới; không suy ra quyền tự commit tiếp hoặc push.

## 1. Hiện trạng và phạm vi — P0.02

Nhóm này là đầu vào cho các nhóm còn lại. Kiểm kê không bao gồm đọc credential hay thay đổi cấu hình người dùng ngoài workspace.

- [x] 1.1 Kiểm kê file/schema/templates/16 skills, các commands tham chiếu, active changes và công cụ local; phân biệt có thật, chưa có và không áp dụng. Đầu ra: gap inventory có vị trí trong handbook; bằng chứng từ lệnh/đọc file thực tế.
- [x] 1.2 Ghi hash/version của các file sắp sửa, source của quyết định DEC-SDP-SOLO-001 và mapping năm capabilities với P0. Đầu ra: baseline trước thay đổi và danh sách đường dẫn có thể khôi phục; không ghi nó thành G1–G7 của sản phẩm.
- [x] 1.3 Kiểm tra read-only main/remote/commit và quyền thao tác hiện có. Đầu ra: ghi đúng checkpoint Git thiếu hoặc đã đạt, không tự tạo commit để vượt điều kiện. Bao phủ ARC-04.

## 2. Sổ tay, mẫu hồ sơ và chỉ mục — P0.06

Phụ thuộc nhóm 1. Dùng `Docs/process/handbook.md`, `templates.md`, `records.md` và companion glossary reference; ưu tiên đọc ba file chính.

- [x] 2.1 Soạn phần POL-01, vai trò solo, G1–G7, DoR/DoD, trạng thái, ngoại lệ và thẩm quyền trong handbook. Đầu ra: đủ GOV-01–GOV-05, phân biệt file tồn tại, check đạt và quyết định thật.
- [x] 2.2 Soạn các phần SOP khởi tạo/yêu cầu/thiết kế/kế hoạch/coding/cấu hình; giữ quy tắc bounded context, Clean Architecture và traceability. Đầu ra: đủ REQ-01–REQ-04, ARC-01 và liên kết source/AC/change/task thay vì yêu cầu mới tự suy ra.
- [x] 2.3 Soạn POL-02 và các phần testing/defects/release/deploy/rollback/handover theo rủi ro. Đầu ra: đủ REL-01–REL-04 và ARC-05, phân biệt internal acceptance/UAT, local/Production, code rollback/data recovery.
- [x] 2.4 Soạn SOP incident/risk/audit và nhịp cải tiến, tám KPI với định nghĩa/nguồn/số mẫu/N/A. Đầu ra: đủ OPS-01–OPS-03; không sinh target, deployment hay incident giả.
- [x] 2.5 Soạn mẫu charter/scope/estimate/risk, requirements/traceability/change request, design review, gate và exception. Đầu ra: trường scope/revision/owner/actual result/nguồn quyết định/hạn ngoại lệ hiện rõ; các ví dụ giữ Draft hoặc chưa thực hiện.
- [x] 2.6 Soạn mẫu test/review/defect/UAT, release/deploy/rollback/handover, incident/KPI/audit. Đầu ra: phân biệt kết quả thật và kế hoạch, artifact đã test và artifact triển khai, điều kiện không áp dụng có lý do.
- [x] 2.7 Tạo chỉ mục hồ sơ và chuyển các quyết định đã có bằng liên kết đến nguồn, giữ record chưa phát sinh ở trạng thái mẫu. Đầu ra: tìm được DEC-SDP-SOLO-001, không ký lại thay người dùng; links và companion glossary references đầy đủ.

## 3. Artifact ADR tùy chọn có kết luận trung thực — P0.03

Phụ thuộc 1.2 và thiết kế ADR-0001 được xem xét trước khi sửa contract. Không sửa parser hay package OpenSpec toàn máy.

- [x] 3.1 Tạo template `adr-index.md` với kết luận Not Applicable có lý do hoặc Decisions Recorded kèm ADR thật và status. Đầu ra: template không ngầm Accepted và không ép bịa một quyết định; bao phủ ARC-02.
- [x] 3.2 Kiểm kê active changes và thêm index đúng nội dung trước migration; giữ ADR/history hiện có. Đầu ra: change này liên kết ADR Proposed thật; change không cần ADR có kết luận phù hợp và lý do.
- [x] 3.3 Sửa `generates` của artifact ID `adr` sang `adr-index.md`, đồng bộ template/instruction và rule ADR trong config; giữ dependency `design -> adr -> tasks`. Đầu ra: schema valid, không còn chỉ dẫn mâu thuẫn “để trống là đủ artifact”.
- [x] 3.4 Kiểm tra trạng thái các active changes sau migration và cách khôi phục đúng file trước thay đổi. Đầu ra: không mất kết quả review thật, có báo cáo schema/templates/status; pilot tự động/tiêu cực được thực hiện ở 6.1.

## 4. Skills và hướng dẫn phù hợp Codex — P0.04

Phụ thuộc 1.1; khi chỉnh skills phải dùng skill-creator. Giữ các tùy chỉnh có ích và không regenerate toàn bộ bằng `openspec update`.

- [x] 4.1 Lập ma trận supported/needs adaptation/unavailable cho skills và yêu cầu tool/path/runtime thực tế. Đầu ra: mỗi tham chiếu AskUserQuestion/TodoWrite/Task tool/Skill tool/.claude/OpenCode có cách xử lý, không bị bỏ qua; bao phủ ARC-03.
- [x] 4.2 Điều chỉnh các workflow core để dùng khả năng hiện có, suy ra change đã được chỉ rõ và tiếp tục planning được giao mà không hỏi lại từng artifact. Đầu ra: hướng dẫn có thể thực hiện trong Codex, vẫn hỏi khi thiếu quyết định thiết yếu hoặc phạm vi thực sự mơ hồ.
- [x] 4.3 Đánh dấu giới hạn của workflow optional cần named agents/delegation/worktree runtime chưa sẵn sàng; không tự chạy hoặc cấu hình agent chỉ bằng đổi path. Đầu ra: luồng solo mặc định không phụ thuộc runtime chưa có.
- [x] 4.4 Đối chiếu commands tham chiếu và hướng dẫn liên quan để tránh hai cách gọi mâu thuẫn. Đầu ra: không coi `.agents/commands` là command đã tự đăng ký; các điểm tool cũ còn giữ có lý do rõ trong inventory.

## 5. Git policy và hướng dẫn có hiệu lực — P0.05

Phụ thuộc nhóm 2 và 4; nhóm 3 cần hoàn thành trước khi trỏ hướng dẫn chính sang schema mới.

- [x] 5.1 Đồng bộ skill Git với thiết kế D5: planning không bắt checkpoint từng file, trước apply kiểm tra proposal/planning commit trên main, archive theo policy, mọi thao tác Git thay đổi lịch sử cần chỉ dẫn. Đầu ra: tình huống ARC-04 có cách xử lý rõ; origin liên kết không đồng nghĩa cho phép push.
- [x] 5.2 Cập nhật AGENTS/config bằng liên kết ngắn đến handbook và ghi phạm vi quy trình đã đưa vào sử dụng; giữ baseline stack/kiến trúc. Đầu ra: một nguồn quy tắc, không báo G1–G7 hay P1–P8 đã hoàn thành; GOV-05.
- [x] 5.3 Soạn `.gitignore` phù hợp môi trường local, secrets, cache, build và fixture tạm; giữ tài liệu/skills/specs cần quản lý. Đầu ra: `git status` thể hiện đúng file dự kiến quản lý; không stage hoặc commit tự động.

## 6. Pilot, kiểm chứng và bàn giao kết quả P0 — P0.07

Phụ thuộc nhóm 2–5. Fixtures chỉ ở root tạm đã xác định trong workspace; mọi kết quả ghi actual, không phát hành app hoặc archive change này trong nhóm này.

- [x] 6.1 Tạo/chạy pilot cho có ADR thật, không cần ADR, chỉ có companion/README, thiếu index và index sai nội dung; phân biệt CLI nhận diện file với kiểm tra nội dung. Đầu ra: bằng chứng tích cực/tiêu cực cho ARC-02; fixture không sửa hoặc xóa dữ liệu người dùng/.git.
- [x] 6.2 Review các mẫu bằng các tình huống thiếu phê duyệt, lệch revision, ngoại lệ hết hạn, check Not Run, chưa UAT, artifact đổi, thiếu data recovery và KPI chưa có mẫu. Đầu ra: actual results đối chiếu GOV/REQ/REL/OPS; kết luận chưa được kiểm chứng giữ đúng trạng thái.
- [x] 6.3 Chạy schema validation, change validation strict, doctor, kiểm tra links/mã/companion references và mapping từng requirement. Đầu ra: lệnh/output/exit code đúng phiên bản, findings được xử lý hoặc ghi rõ; không coi validate pass là gate đã duyệt.
- [x] 6.4 Thực hiện **Self-review** ở lượt riêng đối chiếu diff với specs và baseline trước thay đổi. Đầu ra: findings và kết quả xử lý; kiểm tra khôi phục tooling và giới hạn độc lập được ghi đúng.
- [x] 6.5 Tổng hợp báo cáo P0, cập nhật roadmap theo công việc thực sự xong và liệt kê điều kiện còn thiếu trước discovery P1–P3. Đầu ra: record/links đủ để chủ dự án xem xét; không tự tạo quyết định phê duyệt, commit/push hoặc tiến hành scope sản phẩm mới.

## Mapping requirement đến task và cách kiểm chứng

| Requirement | Tasks | Bằng chứng dự kiến khi apply |
| --- | --- | --- |
| GOV-01 | 2.1, 2.5, 2.7, 6.2 | Mẫu/thông điệp nguồn; tình huống không có quyết định vẫn chưa Approved |
| GOV-02 | 2.5, 2.7, 6.2 | Scope/revision/hash/timezone trong record; kiểm tra mismatch |
| GOV-03 | 2.1, 2.5, 6.2 | Ngoại lệ đủ trường, hết hạn/khác release không dùng lại |
| GOV-04 | 2.1, 2.5, 6.2 | DoR/DoD theo loại; task thiếu input và tài liệu không có deployment giả |
| GOV-05 | 2.7, 4.2, 5.2 | Chỉ mục, liên kết nguồn chính và tái dùng quyết định đúng scope |
| REQ-01 | 2.2, 2.5, 6.2 | Source location/Unknown/mâu thuẫn trong mẫu |
| REQ-02 | 2.2, 2.5, 6.2 | Baseline/MVP và ước lượng tách giả định/cam kết |
| REQ-03 | 2.2, 2.5, 6.2 | Change request/impact và quyết định trước baseline mới |
| REQ-04 | 2.2, 2.5, 2.7, 6.3 | Traceability đầy đủ, Pending/N/A đúng lý do |
| ARC-01 | 2.2, 5.2, 6.4 | Quy tắc module/layer và review finding sai boundary; chưa có architecture test app để tuyên bố đã chạy |
| ARC-02 | 3.1–3.4, 6.1 | Index/template/schema, pilot các đường tích cực/tiêu cực |
| ARC-03 | 4.1–4.4, 6.4 | Inventory tool/runtime và diff skills tương ứng |
| ARC-04 | 1.3, 5.1, 6.2 | Git preflight, điều kiện thiếu và không tự commit |
| ARC-05 | 2.3, 2.6, 6.2, 6.4 | Review/check record thật, Not Run/Failed và secret handling |
| REL-01 | 2.3, 2.6, 6.2 | Defect/test/retest mẫu có trạng thái đúng |
| REL-02 | 2.3, 2.6, 6.2 | Internal acceptance/UAT và G6 chưa đạt khi thiếu điều kiện |
| REL-03 | 2.3, 2.6, 6.2 | Artifact/version/env gắn record, mismatch được chỉ ra |
| REL-04 | 2.3, 2.6, 6.2 | Recovery dữ liệu và bàn giao tách khỏi archive |
| OPS-01 | 2.4, 2.6, 6.2 | Incident/corrective task và actual state |
| OPS-02 | 2.4, 2.6, 6.2 | Tám KPI có định nghĩa; thiếu mẫu là N/A |
| OPS-03 | 2.4, 2.6, 6.5 | Audit findings, owner, corrective task và lịch sử thay đổi |

Bằng chứng thực tế của P0 nằm trong Docs/process/records.md và các reports được liên kết. Việc kiểm tra hướng dẫn/mẫu không được gọi là tests ứng dụng hay gate khách hàng đã đạt; bảng mapping không tự là một quyết định phê duyệt.
