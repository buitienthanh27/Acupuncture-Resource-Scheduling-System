# Hồ sơ quyết định và bằng chứng

ID `SDP-RECORDS`, phiên bản 1.0 pilot local. Owner: chủ dự án. Các hồ sơ bên dưới phân biệt quyết định thật, kết quả kiểm tra và việc dự kiến. Mẫu chưa thực hiện ở [templates](templates.md), quy tắc ở [handbook](handbook.md).

## Chỉ mục

| ID | Loại | Trạng thái và nguồn |
| --- | --- | --- |
| DEC-SDP-SOLO-001 | Chốt phương án quy trình và roadmap | Quyết định của người dùng, [hồ sơ gốc](../../openspec/changes/establish-solo-development-process/proposal.md) |
| DEC-SDP-SOLO-002 | Tiếp tục công việc và commit baseline local | Chỉ dẫn người dùng được ghi ở phần dưới |
| BASE-P0-001 | Baseline trước thay đổi | [71 file và SHA-256](evidence/p0-baseline.json), Git commit af7c1f6 |
| CHECK-P0-001 | Kiểm chứng tooling P0 | Passed cho scope tooling local; 7 checks, 6 pilot cases, 16 skills hợp lệ; không là G1–G7 sản phẩm |
| REVIEW-P0-001 | Self-review P0 | Hoàn thành lượt tự rà soát, findings đã xử lý; không phải review độc lập |
| DEC-PRODUCT-001 | Phạm vi MVP | Manual scheduling có kiểm tra; optimizer Phase 2, theo câu trả lời người dùng; xem discovery |
| DEC-PRODUCT-002 | Định nghĩa nhân viên cũ D01 | Primary của lượt điều trị COMPLETED gần nhất, theo câu trả lời người dùng |
| DEC-PRODUCT-003 | Kênh tiếp nhận MVP D07 | Nhập tay hoặc import Excel; chưa phụ thuộc API HIS; nguồn/mapping mã còn mở |
| DEC-PRODUCT-004 | Cách làm việc khi máy chạy D02 | Có thể nhận ca tiếp/làm việc khác và quay lại theo dõi; giới hạn đồng thời đưa vào cấu hình, trị số/nhịp kiểm tra còn mở |
| DEC-PRODUCT-005 | Cấu hình công đoạn D03 | Chưa có SOP; chuẩn bị/kết thúc/vệ sinh cấu hình linh hoạt, giá trị thực tế chờ cơ sở xác nhận |
| DEC-PRODUCT-006 | Cấu hình thời gian đệm D05 | Cho vào cấu hình ứng dụng để phòng khám thiết lập linh hoạt; thời lượng/phạm vi thực tế chưa cung cấp |
| DEC-PRODUCT-007 | Tách quyền và kiêm nhiệm D06/D08 | Tách xác nhận cấu hình chuyên môn khỏi lập/duyệt lịch; một người có thể được giao cả hai vai trò |
| DEC-PRODUCT-008 | Ưu tiên người cũ so với chờ D09 | MVP chỉ gợi ý; Lead quyết định có chờ hay chọn người khác, không tự giữ lượt |
| DEC-PRODUCT-009 | Khung triển khai solo D12 | Chủ dự án dự kiến tập trung triển khai liên tục một tháng; chưa có số giờ/tuần/ngày bắt đầu/budget |
| DEC-PRODUCT-010 | Kết quả mục tiêu tháng đầu | Bản MVP chạy được và nghiệm thu nội bộ, theo câu trả lời người dùng |
| CHECK-DISC-001 | Rà soát discovery v0.4 sau D01/D02/D07 | Đạt kiểm tra cấu trúc tài liệu, liên kết và hash nguồn; ví dụ nghiệm thu chưa là tests ứng dụng |
| CHECK-DISC-002 | Rà soát discovery v0.5 sau D03/D05 | Đạt kiểm tra cấu trúc tài liệu/liên kết/hash nguồn; 8 ví dụ mới về công đoạn và đệm vẫn Draft |
| PLAN-FND-001 | Planning foundation local | Đủ 5 artifacts; 8 requirements/15 scenarios, 0/21 tasks implementation hoàn thành; chưa là phê duyệt/apply |
| CHECK-PLAN-001 | Rà soát discovery v0.7 và foundation planning | Strict/schema/doctor đạt; 15 Markdown có cấu trúc/liên kết hợp lệ; môi trường còn thiếu prerequisite, chưa chạy build/tests ứng dụng |
| GIT-FND-PLAN-001 | Checkpoint local đề xuất trước foundation apply | Chỉ chuẩn bị danh sách/hash để review; chưa có quyền commit mới, không gồm HTML demo local |
| REVIEW-FND-001 | Chủ dự án giữ planning để review thêm | Chờ review theo phản hồi người dùng; chưa chốt foundation, chưa cho phép commit/apply |

## DEC-SDP-SOLO-002 — Chỉ dẫn tiếp tục và checkpoint Git

| Thuộc tính | Nội dung |
| --- | --- |
| Người quyết định | Chủ dự án — người dùng trong cuộc trao đổi |
| Nguồn 1 | “Sau khi triển khai xong thì cứ đến bước kế tiếp nhé” |
| Phạm vi nguồn 1 | Tiếp tục công việc và bước kế tiếp đã có đủ dữ kiện/phạm vi; không tự vượt thẩm quyền khách hàng hoặc mở quyền push/deploy |
| Nguồn 2 | Câu trả lời cho đề nghị commit baseline: “Cho phép commit local rồi tiếp tục (đề xuất)” |
| Phạm vi nguồn 2 | Một commit baseline local trên main với 71 file đã kiểm kê; tiếp tục P0 |
| Kết quả Git quan sát | Commit `af7c1f6927486fbeaa68e809357906740247d8bc`, message `docs: establish solo development process baseline`; working tree sạch ngay sau commit |
| Ngày ghi hồ sơ | 12/11/2026, Asia/Saigon; không suy đoán timestamp gửi tin nhắn |
| Giới hạn | Không có push, publish, deploy hay chấp thuận G1–G7 của sản phẩm; không suy ra quyền tạo mọi commit tương lai |

Chi tiết P0 được thực hiện theo thiết kế đã chuẩn bị trong scope người dùng giao. ADR phản ánh quyết định tooling được áp dụng; không tạo một biên bản review độc lập hoặc một lời phê duyệt khách hàng mới.

## BASE-P0-001 — Hiện trạng trước triển khai

71 file, khoảng 1,58 MB theo byte làm việc: 35 file `.agents`, 3 file Docs ClinicFlow v2, 1 glossary, 31 OpenSpec và AGENTS. Không có file credential theo tên phổ biến hoặc recognizable credential patterns trong kiểm tra sơ bộ; đây không phải chứng nhận không có secrets.

Snapshot hash và baseline commit cho phép đối chiếu đúng file khi review/khôi phục. Không tự chạy restore/reset hoặc xóa tài liệu người dùng. Tên nguồn khảo sát/EPICS cũ đã được thay bằng bộ ClinicFlow v2 hiện có; discovery sẽ đối chiếu cả DOCX, PDF và workbook.

## CHECK-P0-001 — Kiểm chứng triển khai

Ngày thực hiện: 12/11/2026, Asia/Saigon. Lệnh `node scripts/check-process.mjs --pilot --report Docs/process/evidence/p0-checks.json` trả exit code 0: 7 checks và 6 pilot cases Passed, không có issues. [Output có thời điểm, CLI command/exit code và từng case](evidence/p0-checks.json).

Các checks gồm contract schema, links/companion/traceability, nội dung ADR index, skill metadata/guard, schema validation, strict change validation và doctor. Pilot chạy CLI thật trong fixture riêng, không dùng dữ liệu ứng dụng:

1. Chỉ có README/glossary trong ADR: thiếu index nên ADR chưa done, tasks blocked.
2. Không có quyết định đáng kể: index Not Applicable có lý do mở dependency mà không tạo ADR giả.
3. Có ADR thật của fixture: index liên kết đúng, status Proposed giữ nguyên, không suy ra phê duyệt.
4. Index ghi Not Applicable nhưng còn ADR thật: content checker phát hiện mâu thuẫn.
5. Index thiếu lý do: CLI thấy file nhưng content checker phát hiện thiếu; tách hai lớp kết luận.
6. Chỉ có spec glossary: main spec thiếu nên specs không done, tasks blocked.

Fixture là dữ liệu tổng hợp có nhãn riêng, không phải ADR/gate của dự án. Đã cleanup đúng root tạm sau khi xác minh đường dẫn tuyệt đối; `.git` và tài liệu người dùng không bị xóa.

Validator `skill-creator/scripts/quick_validate.py` đã chạy cho cả 16 skills, exit code 0 cho từng skill; [kết quả](evidence/skill-validation.json). Lần đầu validator Not Run vì thiếu PyYAML; đã tải PyYAML 6.0.3 vào `tmp/p0-python` được ignore, rồi chạy lại thật. Không cài dependency ứng dụng. Metadata compatibility được giữ dưới `metadata.compatibility` để phù hợp các trường validator chấp nhận, không xóa thông tin giới hạn runtime.

### Review mẫu hồ sơ theo tình huống

Đây là tabletop review nội dung/mẫu, không phải kết quả thực thi một approval engine hoặc tests ứng dụng:

| Tình huống | Quan sát và kết luận trong phạm vi tài liệu |
| --- | --- |
| Thiếu người quyết định/nguồn hoặc lệch revision | T06 yêu cầu đúng người, scope, version/hash và nguồn; handbook không cho file/check tự thành Approved |
| Ngoại lệ hết hạn hoặc khác release | T07 và handbook giữ actual result, yêu cầu xem lại phần quyết định liên quan; không dùng lại ngầm |
| Check chưa chạy | T08 ghi Not Run, lý do và tác động; output không có thì không ghi Passed |
| Chưa có UAT khách hàng | T10 phân biệt internal acceptance và đúng người khách hàng xác nhận; không ký thay |
| Artifact đổi sau G6 | T11 liên kết artifact/test/G6 và yêu cầu impact/recheck; không dùng quyết định của A cho B |
| Migration tác động dữ liệu | T11 xét backup/restore/forward recovery, trigger/owner/xác minh; không chỉ hạ version code |
| Chưa có mẫu KPI | T13 và đủ tám KPI ở handbook quy định N/A/số mẫu/định nghĩa; không sinh dữ liệu Production |
| Yêu cầu mâu thuẫn hoặc chưa chốt | T02/T04 giữ Unknown, source và change impact trước baseline mới |

Không có source app, PostgreSQL runtime, UAT khách hàng hay deployment Production để tuyên bố đã kiểm thử. Các scenarios nghiệp vụ sản phẩm phải được kiểm chứng trong change sản phẩm sau này.

## REVIEW-P0-001 — Self-review

Ngày 12/11/2026, Codex thực hiện lượt rà soát diff và đối chiếu 21 requirements với handbook/templates/records, schema, skills và pilot. Đây là self-review hỗ trợ mô hình solo, không phải reviewer độc lập hoặc quyết định G3/G5 sản phẩm.

| Finding | Xử lý / bằng chứng |
| --- | --- |
| Glob ADR có thể bắt nhầm tài liệu phụ | Output chính xác `adr-index.md`; pilot thiếu index vẫn blocked |
| Glob specs cũng có thể bắt nhầm companion | Thu hẹp `specs/**/spec.md`; pilot chỉ có glossary vẫn blocked; context apply chỉ chứa main specs |
| Not Applicable có thể che ADR thật | Checker đối chiếu các file quyết định thật; pilot tiêu cực mới phát hiện mâu thuẫn |
| Tool/path cũ và hỏi lại change đã rõ | Sửa cách gọi tool và resolution cho core skills; optional delegation ngoài mặc định solo |
| Commands sao chép có thể lệch skills | Chuyển chín command files thành reference tới skill được duy trì; nội dung cũ còn trong baseline commit |
| Validator thiếu dependency và không nhận top-level compatibility | Bổ sung PyYAML tạm, giữ compatibility dưới metadata; chạy lại đủ 16 skills đạt |
| Nguồn khảo sát/EPICS cũ không còn | Cập nhật config và handbook sang bộ ClinicFlow v2; chưa giả định ba nguồn đồng nhất |
| Chưa có quyền commit/push tiếp theo | Chỉ commit baseline được phép đã thực hiện; phần triển khai để ở working tree, chưa push hoặc archive |

`git diff --check` đạt; Git chỉ có baseline commit đã được phép. Không sử dụng reset hard, regenerate skills hàng loạt, chỉnh package OpenSpec toàn máy hoặc tạo microservices.

## Kết quả P0 và bước kế tiếp

26/26 tasks P0 của change đã có artifact/bằng chứng tương ứng. P0.01–P0.07 trong roadmap hoàn thành; 53 nhiệm vụ P1–P8 vẫn chưa được ghi Done ở thời điểm kết thúc P0. Sổ tay và công cụ đã dùng được cho pilot local.

Phần triển khai chưa có commit mới hoặc archive; commit baseline ban đầu không cấp quyền cho các commit về sau. Điều này không ngăn discovery/soạn planning độc lập đã được người dùng cho tiếp tục. Bước kế tiếp là kiểm kê và đối chiếu ba nguồn ClinicFlow v2, lập yêu cầu/context/MVP ở trạng thái Draft và chỉ hỏi các quyết định thiết yếu chưa có căn cứ.

## Discovery đã bắt đầu sau P0

Đã đọc-only ba nguồn ClinicFlow v2, ghi inventory/hash, đối chiếu văn bản DOCX/PDF và các phần EPICS cũ/v2; nguồn gốc không sửa. [Một file đọc chính](../discovery/overview.md) giữ registry yêu cầu, context ứng viên, D01–D12, charter/risk Draft và quyết định scope.

DEC-PRODUCT-001 ghi đúng câu trả lời người dùng: “MVP: Lead xếp lịch có kiểm tra; engine tối ưu ở Phase 2 (đề xuất)”. Quyết định này giải quyết mâu thuẫn scope giữa tổng quan cũ và backlog mới; không được dùng thay clinical approval, G1–G3, UAT hoặc các quyết định nghiệp vụ khác. Ngày ghi: 12/11/2026, Asia/Saigon; chưa biết timestamp chính xác gửi thông điệp.

## DEC-PRODUCT-002 — D01 nhân viên cũ

- Người quyết định: chủ dự án — người dùng trong cuộc trao đổi.
- Nguồn: câu trả lời “Người phụ trách chính của lượt điều trị COMPLETED gần nhất (đề xuất)” cho câu hỏi D01.
- Scope: chốt phương án A cho MVP; lịch sử cùng người bệnh lấy primary của phiên hoàn tất gần nhất, không lấy người khám, người chạm máy cuối hoặc người làm từng thủ thuật thay thế.
- Ngày ghi: 12/11/2026, Asia/Saigon; không suy đoán timestamp gửi thông điệp.
- Tác động: cập nhật glossary, discovery, DISC-R05, rủi ro RISK-02 và AC continuity; giữ nguyên DOCX/PDF/XLSX nguồn. Chi tiết query/contract và AC mới vẫn được ghi Draft khi chưa có implementation/kiểm chứng.
- Giới hạn: không xác nhận nhân viên cũ đang khả dụng hoặc đủ quyền chuyên môn; không đóng D02–D12, G1–G3, UAT hoặc cấp thêm quyền commit/push/deploy.

## DEC-PRODUCT-003 — D07 nhập tay hoặc Excel trong MVP

- Người quyết định: chủ dự án — người dùng trong cuộc trao đổi.
- Nguồn: câu trả lời “trường hợp ban đầu tôi chưa hề được xem trước nên chúng ta có thể nhập tay hoặc import bằng excel nhé” cho câu hỏi kênh nhận bệnh nhân/lượt/y lệnh.
- Scope: MVP hỗ trợ nhập tay và import Excel; khảo sát API HIS/đồng bộ để sau khi có thông tin phần mềm hiện hữu. Không bắt buộc API để thực hiện intake MVP.
- Ngày ghi: 12/11/2026, Asia/Saigon; không suy đoán timestamp gửi thông điệp.
- Tác động: cập nhật discovery v0.3, EP04/DISC-R01, D07, context map, RISK-03 và glossary. Mục 14 discovery có dữ liệu tối thiểu, preview/validation, xử lý trùng/xung đột và 8 ví dụ nghiệm thu Draft.
- Giới hạn: chưa đóng nguồn/mapping mã của D07, quyền D06 hoặc xác minh trạng thái y lệnh. Chưa có mẫu Excel chốt, API thực tế hoặc importer đã viết/chạy; không tạo hồ sơ bệnh án hay cấp quyền chỉ định cho người nhập.

## DEC-PRODUCT-004 — D02 cho phép công việc khác khi máy chạy

- Người cung cấp mô tả: chủ dự án — người dùng trong cuộc trao đổi.
- Nguồn 1: “Nhân viên có thể nhận được bệnh nhân tiếp theo và liên tục theo dõi máy chạy nhé, có thể qua xem một chút rồi thực hiện tiếp công việc được giao”.
- Nguồn 2, trả lời câu hỏi giới hạn bệnh nhân theo dõi đồng thời: “Giới hạn này sẽ được thêm vào config của ứng dụng cho linh hoạt nhé”.
- Scope đã rõ: nhân viên có thể nhận bệnh nhân tiếp/làm việc khác trong giai đoạn máy chạy, vẫn chịu trách nhiệm theo dõi và quay lại kiểm tra; giới hạn đồng thời là cấu hình ứng dụng, không hard-code một trị số.
- Ngày ghi: 12/11/2026, Asia/Saigon; không suy đoán timestamp gửi thông điệp.
- Tác động: cập nhật discovery v0.4 D02/DISC-R10/RISK-01, glossary và mục 15; phân biệt thao tác trực tiếp, chiếm dụng máy/giường và nghĩa vụ theo dõi; bổ sung cấu hình/revision/recheck và 6 ví dụ nghiệm thu Draft. Mục 16 tiếp tục workflow xuyên module theo các quyết định hiện có.
- Phần còn mở: trị số/phạm vi áp dụng của cấu hình, nhịp/thời gian kiểm tra, bàn giao, phản ứng sự cố và điều kiện ngừng nhận thêm ca. Không cần hỏi lại một con số để hard-code; chưa tự đặt capacity hoặc thời lượng kiểm tra.
- Giới hạn: mô tả nội bộ không thay SOP được người có thẩm quyền phía cơ sở xác nhận, không đóng D02 toàn bộ hoặc D03–D05, không đủ để tuyên bố lịch mẫu đã hợp lệ.

## CHECK-DISC-001 — Rà soát discovery v0.4

Ngày 12/11/2026, Codex kiểm tra bốn file đang cập nhật: discovery overview, companion của overview, business glossary và records. Không phát hiện liên kết local bị thiếu, ký tự thay thế do lỗi encoding, fence chưa đóng hoặc whitespace cuối dòng. Đối chiếu đủ DEC-PRODUCT-003/004 và nguyên văn câu trả lời về giới hạn cấu hình trong discovery/records.

Rà cấu trúc ba khối Gherkin: 8 ví dụ continuity, 8 intake và 6 giới hạn giám sát; mỗi ví dụ có Given/When/Then. Đây là kiểm tra cấu trúc và self-review tài liệu, không là parse bằng runner Gherkin hoặc kết quả thực thi 22 tests ứng dụng. Workflow sáu bước trong mục 16 giữ các điều kiện chưa đủ ở trạng thái mở; P2.02 tiếp tục được phân tích, không tự ghi toàn bộ P2 hoặc G2/G3 đã hoàn thành.

SHA-256 của cả DOCX/PDF/XLSX vẫn khớp [inventory](../discovery/source-inventory.json). `git diff --check` đã đạt; Git HEAD vẫn là baseline `af7c1f6`, chưa có commit mới. Các file discovery/records chưa được Git theo dõi đã được kiểm tra whitespace trực tiếp, không chỉ dựa vào `git diff`.

Tại lần rà soát v0.4 đã gửi câu hỏi D03 về quy trình chuẩn bị/kết thúc/vệ sinh, chưa có câu trả lời khi ghi CHECK-DISC-001. Câu trả lời sau đó được ghi riêng ở DEC-PRODUCT-005, không dùng để sửa lại kết quả lịch sử của lần rà soát này.

## DEC-PRODUCT-005 — D03 cấu hình công đoạn, chờ xác nhận SOP

- Người quyết định: chủ dự án — người dùng trong cuộc trao đổi.
- Nguồn: câu trả lời “Chưa có; cấu hình linh hoạt, chờ xác nhận (đề xuất)” cho câu hỏi quy trình chuẩn bị/kết thúc/vệ sinh, người thực hiện và thời lượng.
- Scope: các bước này cấu hình được; chưa có SOP thực tế, người/thời lượng/tài nguyên do cơ sở xác nhận trước áp dụng. Không hỏi lại trị số để hard-code hoặc tự dùng duration 0 khi thiếu dữ liệu.
- Ngày ghi: 12/11/2026, Asia/Saigon; không suy đoán timestamp gửi thông điệp.
- Tác động: discovery v0.5 cập nhật D03, EP01, DISC-R02/R06/R10, RISK-01, workflow mục 16, chi tiết cấu hình mục 17 và glossary; DOCX/PDF/XLSX gốc giữ nguyên.
- Giới hạn: xác nhận khả năng cấu hình không là xác nhận SOP chuyên môn, quyền D06/D08, định mức hoặc G2/G3. Chưa có code cấu hình hay thực thi công đoạn để nghiệm thu.

## DEC-PRODUCT-006 — D05 cấu hình thời gian đệm trong ứng dụng

- Người quyết định: chủ dự án — người dùng trong cuộc trao đổi.
- Nguồn: “Cho phép vào config của ứng dụng để có thể linh hoạt triển khai cho phòng khám áp dụng luôn nhé”, trả lời đề xuất cấu hình riêng thời lượng và tài nguyên áp dụng nhân viên/giường/máy.
- Scope: đưa khả năng thiết lập đệm giữa thủ thuật/giữa bệnh nhân vào cấu hình ứng dụng để triển khai linh hoạt cho phòng khám; không hard-code một phạm vi tài nguyên chung hoặc định mức ví dụ.
- Ngày ghi: 12/11/2026, Asia/Saigon; không suy đoán timestamp gửi thông điệp.
- Tác động: discovery v0.5 cập nhật D05, DISC-R06/R10, RISK-01, workflow, mục 17 và glossary. Đề xuất lưu loại chuyển tiếp, thời lượng, tài nguyên, quan hệ với vệ sinh, phiên bản và hiệu lực; 8 ví dụ nghiệm thu chung cho D03/D05 vẫn Draft.
- Giới hạn: người dùng chưa cung cấp trị số/phạm vi áp dụng thực tế hoặc xác nhận 1/2 phút; quyền chỉnh/áp dụng, quan hệ đệm-vệ sinh và xử lý lịch bị ảnh hưởng cần đặc tả. Không suy ra quyền cài đặt, deploy hay mở cấu hình trên hệ thống phòng khám đang vận hành.

## CHECK-DISC-002 — Rà soát discovery v0.5

Ngày 12/11/2026, Codex đối chiếu DEC-PRODUCT-005/006 với câu trả lời thật, DOCX T024/T025/T033/P0234 và Excel DecisionLog_12 dòng 6/8. Bốn file cập nhật (overview, companion, business glossary và records) không có liên kết local thiếu, fence chưa đóng, ký tự thay thế do encoding hoặc whitespace cuối dòng trong kiểm tra trực tiếp.

Rà cấu trúc 30 ví dụ trong bốn khối Gherkin: 8 continuity, 8 intake, 6 giới hạn giám sát và 8 công đoạn/đệm mới; mỗi ví dụ có Given/When/Then. Lượt self-review kiểm tra giá trị chưa biết không tự thành 0, hoàn tất thủ thuật khác giải phóng tài nguyên, đệm áp đúng phạm vi và thay đổi version không ghi đè lịch sử. Đây là review thiết kế/ví dụ Draft, chưa parse bằng runner Gherkin hoặc chạy tests ứng dụng.

Cả ba hash DOCX/PDF/XLSX vẫn khớp [source inventory](../discovery/source-inventory.json); `git diff --check` đạt, HEAD vẫn là `af7c1f6`. Không có code ứng dụng, commit hoặc triển khai mới trong scope cập nhật này. Tại lần rà soát v0.5 đã gửi câu hỏi tách quyền xác nhận cấu hình và lập/duyệt lịch (D06/D08), chưa có câu trả lời khi ghi CHECK-DISC-002; câu trả lời tiếp theo được ghi riêng tại DEC-PRODUCT-007.

## DEC-PRODUCT-007 — D06/D08 tách quyền, cho phép kiêm nhiệm

- Người quyết định: chủ dự án — người dùng trong cuộc trao đổi.
- Nguồn: “Tách quyền, cho phép kiêm nhiệm (đề xuất)”, trả lời câu hỏi tách quyền xác nhận cấu hình chuyên môn của **Medical Lead** khỏi quyền lập/duyệt lịch của **Team Lead**, với khả năng cùng người được giao cả hai vai trò.
- Scope: tách hai nhóm quyền trong MVP; một người có thể kiêm nhiệm, không tự bắt buộc hai người khác nhau. Mỗi thao tác vẫn phải đáp ứng đúng quyền và điều kiện dữ liệu/nghiệp vụ.
- Ngày ghi: 12/11/2026, Asia/Saigon; không suy đoán timestamp gửi thông điệp.
- Tác động: discovery v0.6 cập nhật D06/D08, DISC-R08/R09, RISK-09, glossary và mục 18; ma trận và 7 ví dụ nghiệm thu mới cụ thể hóa kiểm tra quyền/kiêm nhiệm ở trạng thái Draft.
- Giới hạn: chưa đóng quyền intake/dữ liệu, cấp/thu hồi vai trò thực tế, quyền soạn thảo/áp dụng cấu hình hoặc override mềm. Không tự chọn identity provider, cấp quyền chuyên môn cho người cụ thể hoặc ghi G2/G3 đã đạt.

## DEC-PRODUCT-008 — D09 chỉ gợi ý, Lead quyết định chờ

- Người quyết định: chủ dự án — người dùng trong cuộc trao đổi.
- Nguồn: “Chỉ gợi ý; Lead quyết định có chờ hay không (đề xuất)”, trả lời lựa chọn giữa gợi ý để Lead quyết định và tự giữ lượt chờ theo thời gian cấu hình.
- Scope: MVP không tự giữ lượt, trì hoãn hoặc giữ chỗ do ưu tiên người cũ; Lead có thể chọn người khác đủ điều kiện hoặc chủ động chọn chờ. Chọn chờ vẫn cần kiểm tra và duyệt lịch như phương án khác.
- Ngày ghi: 12/11/2026, Asia/Saigon; không suy đoán timestamp gửi thông điệp.
- Tác động: discovery v0.6 cập nhật D09, EP06/DISC-R05/RISK-02, glossary và mục 13; thêm 2 ví dụ nghiệm thu vào 8 ví dụ continuity đã có. Hàm điểm/weights của optimizer vẫn thuộc Phase 2.
- Giới hạn: không chốt quy tắc chuyên môn/khả dụng còn thiếu, không tự đưa timer giữ lượt vào MVP, không thay xác nhận khách hàng hoặc kết quả tests ứng dụng.

## DEC-PRODUCT-009 — D12 tập trung triển khai một tháng

- Người cung cấp kế hoạch: chủ dự án — người dùng trong cuộc trao đổi.
- Nguồn: “Tôi sẽ triển khai liên tục trong 1 tháng, cố gắng tận dụng thời gian làm việc tập trung hết vào dự án này”, trả lời câu hỏi năng lực giờ/tuần và hạn MVP.
- Scope: dùng một tháng tập trung làm khung planning solo; chưa có số giờ cụ thể, ngày bắt đầu/kết thúc hoặc budget, không tự quy đổi thành 160 giờ hoặc cam kết hoàn thành đủ mọi scope.
- Ngày ghi: 12/11/2026, Asia/Saigon; không suy đoán timestamp gửi thông điệp.
- Tác động: discovery v0.7 cập nhật D12/charter/RISK-08 và mục 19; khung tuần tương đối có checkpoint/re-estimate thay vì coi bản 15 tuần trong nguồn là cam kết.
- Giới hạn: chưa là estimate đã được kiểm chứng, G1/G4 hoặc cho phép thêm commit/push/deploy. Phụ thuộc bên phòng khám và môi trường chưa được giả định đã sẵn sàng.

## DEC-PRODUCT-010 — Mục tiêu tháng đầu là MVP nghiệm thu nội bộ

- Người quyết định: chủ dự án — người dùng trong cuộc trao đổi.
- Nguồn: “MVP chạy được, nghiệm thu nội bộ (đề xuất)”, trả lời câu hỏi chọn kết quả sau tháng đầu giữa nghiệm thu nội bộ và dùng thử thực tế tại phòng khám.
- Scope: mục tiêu một bản MVP chạy được, kiểm thử và nghiệm thu nội bộ; giữ các quyết định scope đã chốt. Dữ liệu/SOP còn thiếu được dùng giả lập có nhãn rõ trong môi trường nội bộ, chưa coi là cấu hình chuyên môn thực tế.
- Ngày ghi: 12/11/2026, Asia/Saigon; không suy đoán timestamp gửi thông điệp.
- Tác động: discovery v0.7 mục 1/11/19, D12 và RISK-08; bổ sung mục tiêu, checkpoint và tiêu chí bản nội bộ làm đầu vào chuẩn bị change foundation.
- Giới hạn: lựa chọn mục tiêu không tự là nghiệm thu đã đạt hoặc quyết định gate; chưa có MVP/actual tests để xác nhận hoàn thành. Không bao gồm pilot khách hàng, vận hành dữ liệu thật, UAT khách hàng hoặc triển khai phòng khám.

## PLAN-FND-001 — Change foundation local đã được soạn

Ngày 12/11/2026, Codex tiếp tục scope planning đã giao theo khung một tháng/nghiệm thu nội bộ và tạo [establish-clinicflow-local-foundation](../../openspec/changes/establish-clinicflow-local-foundation/proposal.md). Năm artifacts proposal/specs/design/adr-index/tasks đã có, kèm companion; 8 requirements, 15 scenarios và 21 tasks implementation chưa thực hiện. ADR review kết luận Not Applicable có lý do cụ thể, zero ADR; không tự tạo quyết định Accepted.

Change tập trung host/SPA local, health/OpenAPI, cấu hình an toàn và provider check bằng PostgreSQL thật trong test project. Chưa tạo module/context nghiệp vụ, auth users, importer, bảng bệnh nhân/y lệnh hoặc migration production. HTML demo local mới của người dùng giữ nguyên, không nằm trong checkpoint đề xuất và không tự thành baseline UI/roles.

CLI báo artifacts complete/apply state ready là kết quả dependency của planning, không chứng minh runtime/Git/gate đã sẵn sàng. Hiện chỉ baseline commit `af7c1f6` đã có quyền; cần planning checkpoint mới trên main trước apply theo Git discipline. Chưa commit, tạo branch, push, archive hoặc áp dụng source foundation.

## CHECK-PLAN-001 — Kiểm chứng planning và kiểm kê môi trường

- Scope: discovery v0.7 với DEC-PRODUCT-007–010 và foundation planning; ngày ghi 12/11/2026, Asia/Saigon.
- Kết quả: 15 Markdown (10 của change và 5 discovery/glossary/records) không thiếu liên kết local, companion bắt buộc, đóng fence, encoding hoặc whitespace; đủ 39 ví dụ discovery và 15 scenarios foundation, mapping FND-01–08 tới tasks; 0/21 tasks được đánh dấu Done.
- `openspec validate establish-clinicflow-local-foundation --strict --json` đạt sau sửa warning phần mô tả Draft phía trên section không được sync; schema `intent-driven` valid và doctor healthy. Warning ban đầu và lần kiểm tra lại được ghi trong [evidence](evidence/foundation-planning-checks.json), không gọi lần đầu là Passed.
- Đã đọc lại nguồn primary .NET 11/Npgsql ở design; metadata provider stable và dependency được ghi đúng. Chưa chạy restore/build/provider integration để xác nhận runtime.
- Kiểm kê read-only qua CLI hiện hành: SDK 10.0.102/10.0.301, Node 24.13.0, npm 11.6.2; chưa thấy SDK 11 trong danh sách active dotnet. Docker CLI 29.3.1 có nhưng Linux engine named pipe chưa sẵn sàng; psql/pg_ctl không nằm trên PATH, chưa suy ra mọi PostgreSQL ngoài PATH đều không tồn tại. Không khởi động service/cài SDK hoặc database ở bước planning.
- Ba SHA-256 DOCX/PDF/XLSX vẫn khớp source inventory. Chưa có source app hay actual application tests để ghi Passed; chưa phê duyệt G1–G7, nghiệm thu nội bộ hoặc khách hàng chỉ từ các file/CLI này.

## GIT-FND-PLAN-001 — Checkpoint cần quyết định riêng

Đã chuẩn bị [manifest checkpoint](evidence/foundation-planning-checkpoint.json) cho phần P0 đã triển khai local, discovery/quyết định và planning foundation hiện hành. Manifest liệt kê file/byte/hash cụ thể; nguồn DOCX/PDF/XLSX không thay đổi, HTML demo local mới không thuộc danh sách. Dự kiến một commit local trên main với message `chore: checkpoint process and ClinicFlow foundation planning`; chưa staging hoặc commit.

Căn cứ: [OpenSpec Git Discipline](../../.agents/skills/openspec-git-discipline/SKILL.md) yêu cầu planning được commit trên main trước apply và cấm tự commit khi chưa có chỉ dẫn. Quyền baseline commit ban đầu chỉ áp dụng một lần; cần chủ dự án xem proposal/phạm vi checkpoint này và quyết định trước khi bắt đầu implementation foundation. Checkpoint không bao gồm push/deploy và không biến các task ứng dụng chưa chạy thành Done.

## REVIEW-FND-001 — Chờ chủ dự án review thêm

- Người quyết định: chủ dự án — người dùng trong cuộc trao đổi.
- Nguồn: “Giữ planning để tôi review thêm”, trả lời đề nghị chốt phạm vi foundation và cho phép commit local checkpoint 57 file rồi triển khai.
- Ngày ghi: 12/11/2026, Asia/Saigon; không suy đoán timestamp gửi thông điệp.
- Trạng thái hiện hành: Awaiting User Review; chưa ghi Approved hoặc Rejected cho planning foundation, chưa có quyền commit mới hoặc apply.
- Hành động: giữ nguyên proposal/specs/design/adr-index/tasks hiện có để người dùng đọc; chỉ ghi phản hồi trong hồ sơ này. Dừng tự tiếp tục triển khai foundation và chờ góp ý/chỉ dẫn mới, không lặp lại câu hỏi commit trong lúc người dùng review.
- Checkpoint: manifest GIT-FND-PLAN-001 giữ nguyên snapshot trước phản hồi; việc bổ sung record này làm thay đổi hash của records.md so với snapshot. Khi có yêu cầu tiếp tục/commit sau review, phải đối chiếu và cập nhật lại danh sách/hash hiện hành trước thao tác, không dùng snapshot cũ như quyền đã được cấp.
- Giới hạn: không staging, commit, tạo source ứng dụng, cài SDK/database hoặc push/deploy trong bước ghi nhận này. Các quyết định sản phẩm đã ghi trước đó vẫn được giữ, chưa có MVP hoặc nghiệm thu thực tế mới.

## Việc chưa có hồ sơ thật

G1–G7 sản phẩm, baseline MVP đã được khách hàng xác nhận, UAT khách hàng, deployment/rollback Production, incident và KPI vận hành chưa được ghi là đã hoàn thành. Không tạo record mẫu với trạng thái Approved/Passed để lấp các mục này.
