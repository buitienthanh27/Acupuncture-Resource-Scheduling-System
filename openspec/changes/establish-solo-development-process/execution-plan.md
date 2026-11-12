# Kế hoạch nhiệm vụ và quy tắc triển khai cho một người

| Thuộc tính | Giá trị |
| --- | --- |
| Mã / phiên bản | PLAN-SDP-SOLO-001 / 0.2 |
| Trạng thái | Approved as roadmap, phụ lục của [proposal](proposal.md) |
| Chủ sở hữu | Chủ dự án — người dùng trực tiếp triển khai |
| Hiệu lực | Phương án và roadmap đã được chốt theo DEC-SDP-SOLO-001; P0.01/M0 Done, các nhiệm vụ khác vẫn Planned |
| Nguồn | [SDP v1.0](references/sdp-v1.0-source.txt), các quyết định của người dùng và cấu hình hiện tại |

## 1. Mục tiêu và ranh giới áp dụng

Áp dụng **Software Development Process (SDP)** cho một người thực hiện toàn bộ vòng đời dự án châm cứu. Một người có thể thay phiên thực hiện các vai trò phân tích, thiết kế, phát triển, kiểm thử và vận hành; việc chuyển vai trò phải đi kèm lượt kiểm tra và bằng chứng thích hợp.

Tám giai đoạn được áp dụng theo phạm vi: khởi tạo ở cấp dự án, yêu cầu/thiết kế ở cấp năng lực hoặc change, triển khai/bàn giao ở cấp release. Một thay đổi nhỏ chỉ cần các hồ sơ liên quan; không yêu cầu hoàn tất toàn bộ phân tích và thiết kế của cả hệ thống trước khi phát triển phần đã đủ rõ.

Quy trình có thể giảm xác suất và tác động của sai sót, không bảo đảm phần mềm không còn lỗi. Việc làm theo bản đề xuất không phải chứng nhận ISO hoặc đánh giá cấp độ CMMI.

### Quyết định đã biết

- Dự án do một người triển khai; không giả lập tổ chức nhiều người hoặc tự tạo reviewer độc lập.
- Backend là modular monolith + Clean Architecture + DDD, chia module theo **Bounded Context**; một backend triển khai chung.
- Stack theo `openspec/config.yaml`; không chuyển sang microservices.
- Git local đã được khởi tạo trên `main` và `origin` đã liên kết với repository GitHub theo yêu cầu người dùng; chưa có commit, push, publish hoặc deploy Production.
- Người dùng đã rà soát và chốt phương án tại hồ sơ DEC-SDP-SOLO-001 trong proposal. Codex ghi nhận quyết định; các nhiệm vụ triển khai quy trình và sản phẩm khác vẫn chưa được thực hiện.

### Nội dung phải xác định sau

Tên người xác nhận phía khách hàng nếu có; phạm vi MVP; bounded context thực tế; loại dữ liệu; mục tiêu hiệu năng, khả dụng và khôi phục; môi trường phát hành; cơ chế đăng nhập/phân quyền; nơi lưu bằng chứng dài hạn. Ghi nhận là Unknown và giải quyết ở nhiệm vụ tương ứng, không tự xem là đã thống nhất.

## 2. Vai trò và quyền quyết định

| Vai trò công việc | Người thực hiện trong mô hình solo | Quyền và giới hạn |
| --- | --- | --- |
| Chủ dự án / quản lý quy trình | Người dùng | Chọn phạm vi, ưu tiên, ngân sách, chốt gate nội bộ, quản lý phiên bản quy trình và rủi ro |
| Phân tích / thiết kế / phát triển / QA / vận hành | Người dùng, có Codex hỗ trợ | Thực hiện theo từng lượt, lưu kết quả và phân biệt việc tự kiểm tra với xác nhận bên ngoài |
| Người xác nhận nghiệp vụ phía khách hàng | Chỉ khi được chỉ định thực tế | Xác nhận phạm vi, tiêu chí và nghiệm thu thuộc thẩm quyền; chủ dự án không ký thay khách hàng |
| Codex | Trợ lý, không là người phê duyệt | Phân tích, soạn thảo, viết code, chạy kiểm tra trong phạm vi giao; chỉ báo kết quả đã thực sự quan sát |

**Self-review** tách khỏi lượt viết: đọc diff, đối chiếu yêu cầu, xem đường đi lỗi và rà bằng chứng kiểm thử. Codex có thể hỗ trợ lượt review khác, nhưng đây vẫn không phải reviewer độc lập theo chính sách công ty gốc. Ghi nhận giới hạn này trong bản tailoring solo; nếu hợp đồng yêu cầu review độc lập, không tự tuyên bố mô hình solo đã đáp ứng.

Không yêu cầu xin lại phép cho từng thao tác local có thể đảo ngược đã nằm trong phạm vi được giao. Việc phê duyệt gate được gom theo change hoặc release và dùng lại khi phạm vi, phiên bản, điều kiện còn đúng; thay đổi ảnh hưởng thì phải đánh giá lại.

## 3. Bảy cổng kiểm soát

Mỗi **Quality Gate** phải ghi phạm vi, phiên bản được xem xét, tiêu chí, liên kết bằng chứng, người quyết định và thời điểm. Người chuẩn bị có thể là chủ dự án hoặc Codex; quyết định nội bộ thuộc chủ dự án. Bằng chứng theo hợp đồng cần đúng người phía khách hàng xác nhận.

| Gate | Phạm vi và điều kiện đạt | Bằng chứng tối thiểu | Quyết định cuối | Khi chưa đạt |
| --- | --- | --- | --- | --- |
| G1 — Khởi tạo | Mục tiêu, phạm vi sơ bộ, nguồn lực solo, giới hạn chi phí và rủi ro ban đầu rõ | Charter ngắn, scope, ước lượng có giả định, risk register | Chủ dự án; xác nhận khách hàng nếu là cam kết với khách hàng | Giữ phạm vi ở mức dự kiến; không ghi cam kết chính thức chưa có căn cứ |
| G2 — Baseline yêu cầu | Phần việc sắp làm có nguồn, quy tắc, acceptance criteria, NFR liên quan và xử lý điểm chưa rõ | Requirements baseline, backlog/MVP, glossary, câu hỏi và xác nhận nghiệp vụ | Chủ dự án; khách hàng xác nhận phần thuộc thẩm quyền của họ | Yêu cầu còn mơ hồ để ở Backlog hoặc tách task discovery |
| G3 — Thiết kế | Context ownership, dependency, dữ liệu, API/UI và rủi ro liên quan đủ để triển khai phạm vi đã chọn | Design review, context map; API/ERD/threat model/ADR khi có lý do | Chủ dự án trong lượt kiểm tra thiết kế | Chỉnh thiết kế hoặc làm spike; không tự tạo quyết định kiến trúc thiếu căn cứ |
| G4 — Sẵn sàng phát triển | Task đạt DoR; môi trường, phụ thuộc, kế hoạch kiểm thử và phương án kiểm tra có thể chạy | Tasks, DoR checklist, tool/version report, kết quả chạy khung local | Chủ dự án | Blocked các task thiếu đầu vào; task độc lập đủ rõ vẫn có thể tiếp tục |
| G5 — Sẵn sàng kiểm thử | Thay đổi có liên kết yêu cầu, self-review đã thực hiện, kiểm tra tự động bắt buộc đạt | Diff/revision, review record, build/test/lint/scan phù hợp, defect record | Chủ dự án; checks cung cấp kết quả kỹ thuật | Sửa lỗi và chạy lại phần kiểm tra bị ảnh hưởng, không đánh dấu pass giả |
| G6 — Sẵn sàng phát hành | AC và tests bắt buộc đạt; lỗi/rủi ro còn lại được xử lý; phiên bản, deployment, backup/rollback và monitoring rõ | QA sign-off, UAT/chấp thuận phù hợp, release candidate, risk/exception records, release checklist | Chủ dự án là release authority nội bộ; khách hàng khi phạm vi/hợp đồng yêu cầu | On Hold/Rejected hoặc quyết định ngoại lệ hợp lệ có giới hạn; chưa đủ bằng chứng thì chưa phát hành |
| G7 — Bàn giao | Đã triển khai đúng phiên bản, smoke test đạt, tài liệu vận hành và người chịu trách nhiệm rõ | Deployment log, smoke result, release notes, handover record, danh sách vấn đề còn lại | Chủ dự án; khách hàng xác nhận nhận bàn giao khi có | Khắc phục, khôi phục nếu cần hoặc ghi phạm vi chưa bàn giao; không ghi khách hàng đã nhận khi chưa có bằng chứng |

Trạng thái gate: `Not Started`, `In Review`, `Approved`, `Rejected`, `On Hold`, `Approved with Exception`, `Superseded`. Chỉ `Approved` hoặc `Approved with Exception` còn hiệu lực mới cho chuyển đúng phạm vi đã duyệt. `Not Applicable` là kết luận có lý do ở từng tiêu chí, không phải cách mặc định bỏ cả gate.

Một file được tạo, lệnh `openspec status` báo done, test xanh hoặc AI nói đã review không tự trở thành phê duyệt gate. Khi nội dung làm cơ sở phê duyệt thay đổi, đánh dấu quyết định cũ không còn áp dụng cho phần bị ảnh hưởng và ghi lần xem xét mới.

## 4. DoR, DoD và trạng thái công việc

### Điều kiện Ready for Dev

Một task đạt **Definition of Ready** khi có mã, loại công việc, mục đích, phạm vi, nguồn yêu cầu/change, người thực hiện, tiêu chí nghiệm thu và cách kiểm tra. Phụ thuộc đã giải quyết hoặc được ghi rõ; giả định có chủ sở hữu; rủi ro, tác động dữ liệu/phân quyền và môi trường liên quan đã được xem xét.

Thiết kế phải đủ cho phần việc đó; không áp dụng checklist thiết kế database cho task không ảnh hưởng database. Spike có mục tiêu và đầu ra là kết luận nghiên cứu, không được dùng để ngầm đưa code thử nghiệm thành code Production.

### Điều kiện Done theo loại công việc

| Loại | **Definition of Done** tối thiểu |
| --- | --- |
| Phân tích / tài liệu | Nguồn và phiên bản rõ; câu hỏi quan trọng được trả lời hoặc giữ Unknown có chủ sở hữu; review nội dung đạt; các liên kết và tác động cập nhật |
| Feature / bug / refactor | Đạt AC trong phạm vi; review diff; build, tests và checks liên quan đạt; cập nhật specs/tài liệu; lỗi và rủi ro còn lại được ghi nhận |
| Nhiệm vụ phát hành | Đúng artifact đã được kiểm tra; đạt G6; triển khai và smoke test có bằng chứng; rollback/khôi phục sẵn sàng theo rủi ro |
| Bàn giao release | Đạt G7, phiên bản và phạm vi giao rõ; tài liệu/support đủ; xác nhận khách hàng khi được yêu cầu |

Luồng công việc: `Backlog -> Ready for Dev -> In Progress -> Code Review -> Ready for QA -> In Testing -> Ready for Release -> Done`. `Code Review` trong mô hình này là lượt self-review. Task tài liệu hoặc code không thuộc nhiệm vụ phát hành có thể đến Done sau khi đạt DoD tương ứng; ghi lý do các bước release không áp dụng. `Blocked`, `Reopened`, `Cancelled` cần lý do và hành động tiếp theo.

Mỗi task có ít nhất: ID, loại, mô tả, ưu tiên, phạm vi, AC, owner, dependency, link yêu cầu/change, trạng thái, bằng chứng checks; thêm revision/diff, lỗi và release nếu áp dụng. Mặc định owner là chủ dự án; tên người quyết định thực tế được điền khi ghi hồ sơ.

## 5. Danh mục nhiệm vụ tổng thể

P0.01 đã **Done** theo DEC-SDP-SOLO-001; 59 nhiệm vụ khác vẫn **Planned**. Các mã là roadmap quản lý; khi đưa vào `tasks.md` cần tách thành bước nhỏ, thường dưới hai giờ, đúng scope change và có kiểm tra tương ứng. Không tự gán hạn hoàn thành hoặc coi bảng này là ước lượng đã cam kết.

### P0 — Làm cho quy trình và công cụ nhất quán

| ID | Nhiệm vụ | Đầu ra / điều kiện hoàn thành |
| --- | --- | --- |
| P0.01 | Rà soát tailoring solo của bản đề xuất | **Done** — chủ dự án đã chốt; bằng chứng DEC-SDP-SOLO-001 trong [proposal](proposal.md) |
| P0.02 | Lập danh sách thiếu hụt hiện tại | Phân biệt cấu hình có thật với Git, CI, source app, môi trường và hồ sơ chưa có |
| P0.03 | Sửa semantics artifact tùy chọn trong schema | Trường hợp không cần ADR vẫn có bản ghi quyết định không áp dụng được CLI nhận diện; không viết ADR giả để mở khóa tasks |
| P0.04 | Rà soát khả năng chạy skills trên Codex | Tham chiếu Claude/OpenCode/tool không có được thay đúng hoặc đánh dấu không hỗ trợ; không chạy workflow hỏng |
| P0.05 | Thống nhất Git workflow local | Có quy tắc main/branch/checkpoint/review phù hợp solo; hành vi commit/branch/merge chỉ trong phạm vi được người dùng cho phép |
| P0.06 | Thiết kế bộ hồ sơ gọn và chỉ mục | Tìm được policy, SOP, record theo ID; không sao chép cùng thông tin ở nhiều nơi |
| P0.07 | Thử workflow quy trình bằng change mẫu | Nhận diện đúng trạng thái artifact; file glossary/README không được dùng làm bằng chứng hoàn thành nhầm artifact nghiệp vụ |

Điều kiện chuyển: công cụ không ép tạo bằng chứng giả hoặc chặn vô cớ ở artifact tùy chọn; các sửa đổi có tác động chỉ được áp dụng sau khi chốt và đặc tả phần liên quan.

### P1 — Tiếp nhận và khởi tạo

| ID | Nhiệm vụ | Đầu ra / điều kiện hoàn thành |
| --- | --- | --- |
| P1.01 | Kiểm kê nguồn đầu vào và người yêu cầu | Danh mục tài liệu, ngày/phiên bản, nguồn và cách xử lý tài liệu mâu thuẫn |
| P1.02 | Viết charter và scope sơ bộ | Mục tiêu, thành công đo được, phạm vi trong/ngoài, stakeholder và owner rõ |
| P1.03 | Đánh giá khả thi và nguồn lực solo | Năng lực, thời gian thực có, phụ thuộc và hạn chế công cụ được ghi rõ |
| P1.04 | Ước lượng theo giả định và độ bất định | Khoảng ước lượng, căn cứ, phụ thuộc và nội dung chưa đủ dữ kiện; chưa ghi thành cam kết |
| P1.05 | Lập risk register ban đầu | Mỗi rủi ro có tác động, xác suất định tính, owner, biện pháp và trigger |
| P1.06 | Ghi quyết định G1 | Phạm vi, revision tài liệu, quyết định và bằng chứng được lưu |

### P2 — Phân tích, xác nhận và kiểm soát yêu cầu

| ID | Nhiệm vụ | Đầu ra / điều kiện hoàn thành |
| --- | --- | --- |
| P2.01 | Đọc khảo sát và EPICS của dự án châm cứu | Mọi yêu cầu trích xuất có vị trí tài liệu/sheet/dòng hoặc mục nguồn; không bịa nội dung thiếu |
| P2.02 | Mô hình hóa actor, workflow và ngoại lệ | Có luồng chính, điều kiện trước/sau, quyền thực hiện và các trường hợp thất bại |
| P2.03 | Chuẩn hóa glossary, business rules và AC | Thuật ngữ nhất quán; mỗi rule có ví dụ kiểm chứng; unknown và mâu thuẫn có câu hỏi |
| P2.04 | Xác định NFR phù hợp rủi ro | Hiệu năng, phân quyền, dữ liệu nhạy cảm, khả dụng, phục hồi và quan sát có tiêu chí; chưa biết thì ghi cần xác nhận |
| P2.05 | Chọn MVP và ưu tiên backlog | Phạm vi đầu tiên có giá trị, dependency và lý do ưu tiên; backlog sau MVP tách rõ |
| P2.06 | Tạo baseline và traceability ban đầu | Mỗi yêu cầu có ID, nguồn, AC, ưu tiên, trạng thái xác nhận và liên kết change dự kiến |
| P2.07 | Xử lý câu hỏi và ghi G2 | Chủ dự án xác nhận nội bộ; phía khách hàng xác nhận phần thuộc thẩm quyền, hoặc ghi rõ còn chờ |
| P2.08 | Áp dụng change request sau baseline | Thay đổi có before/after, lý do, tác động scope/thời gian/chi phí/kiến trúc/tests và quyết định |

### P3 — Thiết kế giải pháp và ranh giới nghiệp vụ

| ID | Nhiệm vụ | Đầu ra / điều kiện hoàn thành |
| --- | --- | --- |
| P3.01 | Xác định bounded context từ nghiệp vụ | Có trách nhiệm, ngôn ngữ, dữ liệu sở hữu và lý do ranh giới; không lấy tên bảng/epic làm module mặc định |
| P3.02 | Xây context map cho modular monolith | Hợp đồng và hướng phụ thuộc giữa context rõ; trao đổi nội bộ; một backend triển khai chung |
| P3.03 | Thiết kế domain và application của lát cắt đầu tiên | Aggregate/invariant/transaction và use case được giải thích bằng nghiệp vụ; không ép DDD cho CRUD đơn giản |
| P3.04 | Thiết kế dữ liệu và migrations | Ownership schema/DbContext, constraints, chỉ mục và tác động dữ liệu rõ; xử lý thay đổi schema có kế hoạch |
| P3.05 | Thiết kế HTTP API, quyền và UI | Contract, mã lỗi, validation và hành vi UI truy được đến AC; không đưa EF entity thành hợp đồng công khai |
| P3.06 | Review kiến trúc và rủi ro bảo mật | Kiểm tra project reference, boundary, data flow và threat model phù hợp; quyết định quan trọng có ADR |
| P3.07 | Ghi G3 cho phạm vi sắp phát triển | Review record gắn đúng revision; quyết định chưa rõ giữ mở hoặc tách spike |

### P4 — Lập kế hoạch và chuẩn bị phát triển

| ID | Nhiệm vụ | Đầu ra / điều kiện hoàn thành |
| --- | --- | --- |
| P4.01 | Chia change theo kết quả giao nhỏ | Roadmap gồm discovery, foundation và các lát cắt nghiệp vụ; dependency rõ |
| P4.02 | Chuẩn bị SDK và dependency tương thích | Xác minh .NET SDK, EF Core/Npgsql, PostgreSQL, Node/Vite/React; pin version/lockfile trong bước dựng source |
| P4.03 | Khởi tạo Git local và bảo vệ thông tin nhạy cảm | Chỉ thực hiện khi được cho phép; có ignore, review diff, secret handling và quy tắc checkpoint |
| P4.04 | Dựng solution/backend/frontend và môi trường local | Build/chạy khung được; tách project theo layer, frontend strict TypeScript; có hướng dẫn tái tạo |
| P4.05 | Lập test plan và bộ lệnh kiểm tra | Xác định unit/integration/UI/architecture/security/performance áp dụng; phân biệt checks local với CI |
| P4.06 | Chuẩn bị cấu hình, dữ liệu thử và quyền truy cập | Env được phân biệt; không dùng dữ liệu khách hàng thật không được phép; restore/dev setup có hướng dẫn |
| P4.07 | Lập kế hoạch iteration/release và ghi G4 | Task đạt DoR, năng lực solo phù hợp, phụ thuộc sẵn sàng và rủi ro có phương án |

### P5 — Phát triển, self-review và tích hợp

| ID | Nhiệm vụ | Đầu ra / điều kiện hoàn thành |
| --- | --- | --- |
| P5.01 | Hoàn thành planning artifacts cho từng change | Proposal/specs/design/ADR record/tasks theo schema; tiêu chí cần áp dụng có quyết định phù hợp |
| P5.02 | Thực hiện use case và unit tests theo bounded context | Domain/Application độc lập framework; tests thể hiện quy tắc nghiệp vụ và nhánh lỗi liên quan |
| P5.03 | Thực hiện persistence, migration và adapter | EF ở Infrastructure; kiểm tra constraints/truy vấn/transactions liên quan trên PostgreSQL |
| P5.04 | Hoàn thành API và frontend cho cùng luồng nghiệp vụ | HTTP contract và UI đáp ứng AC, bao gồm lỗi/loading/empty/permission khi có |
| P5.05 | Rà soát kiến trúc và diff ở lượt riêng | Review record có findings, cách xử lý và revision cuối; nêu rõ đây là self-review |
| P5.06 | Chạy checks phù hợp và khắc phục findings | Build/test/typecheck/lint/scan theo scope đạt, lưu lệnh và kết quả; checks không chạy được có lý do và tác động |
| P5.07 | Tích hợp và ghi G5 | Tích hợp đúng Git policy được chốt; liên kết yêu cầu-task-diff-tests đầy đủ; không tự tạo PR approval |

### P6 — Kiểm thử, nghiệm thu và sẵn sàng phát hành

| ID | Nhiệm vụ | Đầu ra / điều kiện hoàn thành |
| --- | --- | --- |
| P6.01 | Kiểm thử chức năng và tích hợp theo AC | Có case thành công/thất bại/biên quan trọng, actual result và revision được kiểm thử |
| P6.02 | Chạy regression và NFR theo rủi ro | Phạm vi tests, môi trường và kết quả rõ; không tạo ngưỡng hiệu năng thiếu yêu cầu |
| P6.03 | Quản lý defects và retest | Lỗi có steps reproduce, expected/actual, severity, priority, owner, fix/retest; lỗi mở truy được |
| P6.04 | Tổ chức UAT theo thẩm quyền thực tế | Khách hàng xác nhận khi cần; tự kiểm tra nội bộ được ghi đúng tên, không giả UAT khách hàng |
| P6.05 | Định danh release candidate và hoàn thành checklist | Artifact/version, notes, config, migration/backup/rollback/monitoring và rủi ro cùng một phạm vi |
| P6.06 | Ghi quyết định G6 | Không còn blocker/critical chưa xử lý hoặc chưa có quyết định rủi ro hợp lệ; quyết định gắn đúng artifact đã test |

### P7 — Triển khai và bàn giao

| ID | Nhiệm vụ | Đầu ra / điều kiện hoàn thành |
| --- | --- | --- |
| P7.01 | Chuẩn bị cửa sổ triển khai và kiểm tra trước deploy | Owner, môi trường, version, backup cần thiết và điểm rollback rõ; được cho phép triển khai môi trường đó |
| P7.02 | Triển khai đúng artifact đã được chốt | Có thời điểm, người thực hiện, config/migration version và log; không âm thầm đổi artifact |
| P7.03 | Chạy smoke test và theo dõi sau deploy | Kết quả chức năng trọng yếu/health/log/alert phù hợp; lỗi có owner và hành động |
| P7.04 | Khôi phục khi đạt trigger rollback | Thực hiện phương án ứng dụng và dữ liệu đã chuẩn bị; xác minh hệ thống sau khôi phục |
| P7.05 | Bàn giao hướng dẫn, support và ghi G7 | Version, phạm vi, giới hạn, cấu hình vận hành và xác nhận tiếp nhận theo thẩm quyền rõ |
| P7.06 | Đồng bộ specs và archive change đủ điều kiện | OpenSpec phản ánh hành vi đã hoàn thành; còn tồn đọng được chuyển backlog có ID, không giấu task chưa xong |

### P8 — Vận hành và cải tiến

| ID | Nhiệm vụ | Đầu ra / điều kiện hoàn thành |
| --- | --- | --- |
| P8.01 | Thiết lập theo dõi và lịch kiểm tra vận hành | Health, logs, alerts và người nhận rõ; có cách xác minh cảnh báo hoạt động |
| P8.02 | Vận hành support và xử lý incident | Có mức ảnh hưởng, incident owner, timeline, khôi phục và thông báo phù hợp |
| P8.03 | Xem xét nguyên nhân và tạo hành động phòng ngừa | Sự cố nghiêm trọng/lặp lại có post-incident review, corrective tasks và theo dõi hoàn thành |
| P8.04 | Bảo trì dependency, quyền và khả năng restore | Rà soát phiên bản/lỗ hổng, tài khoản/quyền, backup và lần thử phục hồi theo rủi ro |
| P8.05 | Thu thập KPI với định nghĩa nhất quán | Có nguồn dữ liệu, mẫu số, cửa sổ đo; chưa có deployment/incident thì ghi N/A |
| P8.06 | Audit mẫu và cập nhật quy trình | Kiểm tra một change từ yêu cầu đến kết quả giao; findings thành backlog cải tiến và version mới |

## 6. Các quy tắc tuân thủ xuyên suốt

| Mã | Quy tắc | Cách kiểm soát |
| --- | --- | --- |
| R01 | Mỗi việc có yêu cầu hoặc mục đích rõ | Task liên kết source/REQ/change/bug; việc nghiên cứu được nhận diện là spike |
| R02 | Tách sự thật, giả định và quyết định | Trạng thái Unknown/Proposed/Confirmed rõ; không nâng giả định thành yêu cầu đã chốt |
| R03 | Kiểm soát thay đổi sau **Baseline** | Ghi delta và impact; xem lại gate, thiết kế, tests và kế hoạch bị ảnh hưởng |
| R04 | Duy trì **Traceability** | Source -> REQ/BR/NFR -> AC -> change/task -> revision/diff -> test -> release/handover nếu áp dụng |
| R05 | Một backend, các bounded context có ownership | Không tham chiếu internals hoặc truy cập trực tiếp bảng/DbContext context khác; hợp đồng nội bộ rõ |
| R06 | Dependency Clean Architecture đi vào trong | Domain không phụ thuộc framework; Application không tham chiếu Infrastructure/API/EF; project references kiểm chứng được |
| R07 | Kiểm thử theo nghiệp vụ và rủi ro | Use case có unit tests; hành vi persistence đặc thù được thử với PostgreSQL; không chỉ kiểm tra implementation tự lặp lại |
| R08 | Không nhận kết quả kiểm tra chưa chạy | Record chứa lệnh, môi trường, revision, actual result và log; pending/not-run không phải passed |
| R09 | **Self-review** có lượt riêng và findings | Kiểm tra diff + hành vi + lỗi/biên; AI review hỗ trợ, không được gọi là phê duyệt độc lập |
| R10 | Thông tin nhạy cảm và quyền được kiểm soát | Không đưa secrets vào Git/log/record; dùng cấu hình local phù hợp, least privilege và scan theo scope |
| R11 | Các gate gắn đúng phiên bản | Approval không tự dùng lại sau thay đổi có ảnh hưởng; không ký duyệt thay chủ dự án/khách hàng |
| R12 | Lỗi được quản lý trước khi đóng | Có severity và priority riêng; sửa xong phải retest; trường hợp mở cần quyết định và owner |
| R13 | Ngoại lệ có phạm vi và hạn xử lý | Có **Exception** hợp lệ; không biến check thất bại thành Passed; quá hạn phải xem lại gate |
| R14 | Phát hành đúng **Release Candidate** | Artifact đã kiểm thử được định danh bằng version/hash/revision; thay artifact phải đánh giá và kiểm tra lại |
| R15 | **Rollback** bao gồm cả dữ liệu | Migration phá hủy dữ liệu cần backup/restore hoặc phương án forward recovery được kiểm chứng; rollback code không đủ |
| R16 | Archive và deploy là các trạng thái riêng | `archive` không chứng minh Production đã chạy; ghi môi trường thực tế, kết quả test và việc còn tồn đọng |
| R17 | Codex làm trong phạm vi đã giao | Tiếp tục các bước local đã được cho phép; hỏi khi thiếu quyết định thiết yếu hoặc cần hành động ngoài phạm vi; không tự commit/push/deploy/ký gate |
| R18 | Hồ sơ gọn nhưng đủ kiểm chứng | Một nguồn chính, ID và link; không bắt tạo bản sao SRS/HLD/LLD/PR cho thay đổi không cần chúng |

Severity thể hiện tác động lỗi; priority thể hiện thứ tự xử lý. Phải định nghĩa thang trước khi dùng, ví dụ blocker là chặn luồng giao bắt buộc, critical là tác động nghiêm trọng đến dữ liệu/quyền/vận hành. Ví dụ không thay thế đánh giá tác động thực tế. Không tự hạ severity để vượt gate.

## 7. Bộ tài liệu Policy, SOP và hồ sơ

Mỗi policy/SOP có ID, version, owner, người quyết định, trạng thái/ngày hiệu lực và changelog. Record dùng ID, nguồn/revision, người tạo, thời điểm và kết quả; phần không áp dụng có lý do. Tài liệu Draft không được ghi là đã ban hành.

### Hai chính sách nền

| Mã | Nội dung tối thiểu | Liên kết nhiệm vụ |
| --- | --- | --- |
| POL-01 — Software Quality Policy | DoR/DoD, yêu cầu, chất lượng, self-review, tests, gates và bằng chứng | P0.01, P0.06, P2.06, P4.05, P5.05, P6.06 |
| POL-02 — Secure Development Policy | Phân loại dữ liệu, secrets, quyền, dependency, threat review, release và incident theo rủi ro | P2.04, P3.06, P4.03, P5.06, P6.02, P8.02, P8.04 |

### Mười hai SOP

| Mã | Quy trình | Đầu vào -> đầu ra / hồ sơ | Nhiệm vụ áp dụng |
| --- | --- | --- | --- |
| SOP-01 | Khởi tạo dự án | Đề nghị -> charter, scope, estimate, risk register, G1 | P1.01–P1.06 |
| SOP-02 | Quản lý yêu cầu | Nguồn -> backlog/specs, AC, baseline, G2, change request | P2.01–P2.08 |
| SOP-03 | Thiết kế và review | Baseline -> context map, design, API/ERD/ADR phù hợp, G3 | P3.01–P3.07 |
| SOP-04 | Kế hoạch và iteration | Backlog -> milestone/capacity, dependency, DoR, G4 | P4.01, P4.05, P4.07 |
| SOP-05 | Coding và review | Task Ready -> diff, self-review, checks, G5 | P5.01–P5.07 |
| SOP-06 | Testing và defects | Bản build/AC -> test results, defect/retest, QA sign-off | P6.01–P6.04 |
| SOP-07 | Change và release | Delta/release scope -> impact, quyết định, release notes, G6 | P2.08, P6.05–P6.06 |
| SOP-08 | Deployment và rollback | Release candidate -> deploy/smoke/restore logs, G7 | P7.01–P7.05 |
| SOP-09 | Incident và problem | Alert/support -> timeline, restore, nguyên nhân, corrective tasks | P8.01–P8.03 |
| SOP-10 | Cấu hình và quyền | Yêu cầu môi trường -> version/config/access inventory, rà soát quyền | P4.02–P4.06, P8.04 |
| SOP-11 | Rủi ro và ngoại lệ | Risk/failure -> đánh giá, quyết định, owner, hạn, bằng chứng đóng | P1.05, P2.08, P6.06, P8.06 |
| SOP-12 | Audit và cải tiến | Records/KPI -> findings, backlog cải tiến, version quy trình mới | P0.07, P8.05–P8.06 |

### Tổ chức hồ sơ đề xuất khi triển khai quy trình

`Docs/process/` là vị trí đề xuất cho policy/SOP, templates, records và index. `glossary/` giữ thuật ngữ; `openspec/changes/<change>/` giữ planning artifacts theo change; `openspec/specs/` giữ specs hiện hành sau đồng bộ. Vị trí này chưa được tạo hoặc áp dụng ngoài các file của proposal.

Có thể gộp charter/scope/estimate/risk cho giai đoạn khởi tạo vào một record; có thể gộp QA/release checklist ở một release record. Vẫn phải truy được phần nào trả lời tiêu chí nào và ai chốt nó.

## 8. Mẫu thông tin bắt buộc

### Gate record

`Record ID; Gate ID; Scope/Change/Release; Artifact version/revision/hash; Criteria and actual results; Evidence links; Preparer; Decision maker; Decision; Decision timestamp and timezone; Exception IDs; Impact review/expiry if applicable.`

Trước khi có Git có thể dùng version tài liệu + hash. Không tự điền tên người quyết định hoặc thời điểm phê duyệt. Phê duyệt trong cuộc trao đổi có thể được lưu thành record nếu chỉ ra đúng thông điệp, người quyết định, scope và revision đã chốt.

### Test và review record

`Task/AC ID; Revision/artifact; Command or test steps; Environment/tool versions; Expected result; Actual result; Exit code/status; Evidence path; Findings; Fix/retest link; Reviewer role; Timestamp.`

Không lưu credential hoặc dữ liệu nhạy cảm trong bằng chứng. Bản tóm tắt của Codex liên kết đến output thật; không tự sinh log để chứng minh kiểm tra đã chạy.

### Change request và traceability

Change request có ID, requester, lý do, before/after, REQ/BR/NFR liên quan, tác động scope/chi phí/lịch trình/kiến trúc/dữ liệu/tests/release, phương án, quyết định và baseline mới nếu được chọn.

Một dòng traceability có `Source reference; Requirement ID; AC ID; Owning context; Change/Task; Code revision/diff; Test/evidence; Defect if any; Release/handover or justified N/A`. Không cần link release đối với requirement chưa được triển khai; giữ trạng thái Pending.

### Risk và exception record

Risk có ID, mô tả, khả năng/tác động, trigger, owner, phương án, trạng thái và lịch xem lại. **Exception** thêm quy tắc bị lệch, phạm vi/phiên bản, lý do, lựa chọn thay thế, bù kiểm soát, người chấp nhận, hạn khắc phục/xem lại, corrective task và tiêu chí đóng.

Chủ dự án có thể chấp nhận rủi ro nội bộ trong thẩm quyền của mình; không ký thay khách hàng hoặc bỏ nghĩa vụ bên ngoài bằng hồ sơ nội bộ. Ngoại lệ không thay đổi actual test result và không tự cho phép một release khác. Ngoại lệ hết hạn làm phần quyết định gate phụ thuộc nó cần được xem lại.

### Release, deployment và handover record

`Release ID/version; Included/excluded changes; Release candidate identifier; G6 decision; Test/UAT evidence; Known defects/risks; Environment; Config and migration versions; Backup/restore plan and evidence; Deployment steps/owner/time; Smoke result; Monitoring; Rollback triggers/result; G7 acceptance; Support contact and documentation.`

**UAT** chỉ được gọi là nghiệm thu khách hàng khi có đúng người phía khách hàng xác nhận. Kiểm tra nội bộ trước demo vẫn có ích nhưng được ghi là internal acceptance.

## 9. Cách kết hợp Git, OpenSpec và gates

1. Dùng nguồn yêu cầu và discovery để làm rõ phạm vi; tạo change nhỏ với owner, AC và dependency.
2. Chuẩn bị proposal, specs, design, ADR khi có quyết định đáng kể và tasks theo schema. `openspec status` kiểm tra sự hiện diện/phụ thuộc, không kiểm tra đủ chất lượng hay phê duyệt.
3. Giải quyết G2–G4 tương ứng trước apply; giữ bằng chứng phê duyệt riêng với nội dung có thể chỉnh sửa của tài liệu.
4. Thực hiện các task đủ sẵn sàng, cập nhật tiến độ theo kết quả thực tế; blocker của task này không mặc nhiên chặn task độc lập khác.
5. Review diff, chạy checks, xử lý findings và ghi G5. Không commit trực tiếp vào nhánh đã được bảo vệ; nếu chưa có remote/branch protection thì không tuyên bố đã cấu hình bảo vệ.
6. Verify đối chiếu specs/code/tests; kiểm thử, UAT và release decision là các hoạt động riêng có bằng chứng.
7. Chỉ deploy khi có quyết định cho đúng môi trường và phiên bản. Đồng bộ specs/archive theo DoD của change; ghi rõ change chỉ giao local/staging hay đã giao Production.

Hiện skill Git yêu cầu proposal có trên `main` trước apply và archive từ `main`. P0.05 phải thống nhất chính sách đó với cách review solo và phạm vi cho phép commit/branch/merge. Proposal này chưa thay đổi quy tắc hiện hành, chưa tạo Git repo và chưa cho phép Codex tự thực hiện các hành động Git.

Với ADR không áp dụng, hướng xử lý đề xuất là có artifact tổng kết quyết định kiến trúc với kết luận `No significant decision` hoặc index đến ADR thật; CLI kiểm tra artifact tổng kết thay vì buộc tồn tại ADR giả. Thiết kế chi tiết, template và kiểm chứng nhận diện artifact được làm ở P0.03, chưa sửa schema trong lần soạn này.

## 10. Mức rủi ro và biện pháp theo phạm vi

| Mức | Ví dụ phân loại ban đầu | Kiểm soát tăng thêm |
| --- | --- | --- |
| Thấp | Sửa nội dung tài liệu, giao diện không đổi nghiệp vụ/quyền/dữ liệu | Review nội dung/diff, checks liên quan, record gọn |
| Vừa | Use case, truy vấn, API hoặc integration trong phạm vi đã rõ | Specs/AC, review thiết kế cần thiết, unit/integration/regression theo tác động |
| Cao | Phân quyền, dữ liệu nhạy cảm, invariant lịch hẹn, migration ảnh hưởng dữ liệu, Production | Review rủi ro riêng, tests thất bại/đồng thời nếu phù hợp, định danh artifact, backup/restore/rollback được kiểm tra và quyết định chủ dự án |

Đây là cách phân loại đề xuất; đánh giá từng thay đổi theo tác động thật, không theo số dòng code. Không mặc định có reviewer bên ngoài trong mô hình solo; nếu thiếu năng lực kiểm chứng rủi ro cao, giảm scope, thực hiện spike hoặc ghi rõ nhu cầu hỗ trợ trước quyết định giao phần đó.

## 11. Rủi ro khi áp dụng quy trình

| Rủi ro | Cách xử lý đề xuất |
| --- | --- |
| Tự review bỏ sót lỗi | Tách lượt review, đối chiếu AC, tests biên/lỗi, rà diff và theo dõi escaped defects; thừa nhận giới hạn độc lập |
| Checklist trở thành thủ tục | Chỉ dùng tiêu chí áp dụng, gộp record, lưu một nguồn chính và audit mẫu kết quả |
| Tài liệu và code lệch nhau | Traceability, impact review, verify trước đóng change và đồng bộ specs |
| Gate được duyệt cho phiên bản cũ | Record gắn revision/hash; thay đổi có ảnh hưởng làm quyết định liên quan cần xem lại |
| Bằng chứng local bị mất hoặc chứa secrets | Chọn nơi lưu có backup, redaction và quyền phù hợp; không đưa dữ liệu nhạy cảm lên remote ngoài phạm vi |
| Di chuyển .claude thành .agents nhưng còn tool cũ | Kiểm kê và thử workflow ở P0.04/P0.07 trước dùng thực tế |
| Workflow ép ADR hoặc bị nhận hoàn thành sai | Sửa output/điều kiện và kiểm tra artifact không áp dụng ở P0.03/P0.07 |
| Phát hành sai artifact hoặc migration không phục hồi được | Release candidate cố định, migration review, backup/restore/smoke và trigger rollback rõ |
| Năng lực solo bị quá tải | Giới hạn phần đang làm, chia lát cắt nhỏ, ước lượng có độ bất định và ưu tiên lại khi phát sinh |
| AI biến giả định thành kết quả | Giữ Unknown, lưu output thật, chủ dự án chốt phạm vi/rủi ro và không ký gate thay người dùng |

## 12. Lộ trình áp dụng theo mốc

| Mốc | Phạm vi | Điều kiện sang mốc kế tiếp |
| --- | --- | --- |
| M0 — Chốt cách làm | Proposal, tailoring solo và các quyết định quản trị | **Done** — DEC-SDP-SOLO-001; quyết định này không xác nhận G1–G7 hoặc các task triển khai đã hoàn thành |
| M1 — Chuẩn bị tối thiểu | P0, P1, mẫu hồ sơ, danh mục nguồn và Git policy | Workflow chạy được; có record mẫu; G1 cho phạm vi dự án |
| M2 — Chốt lát cắt đầu tiên | P2, P3 và các điều kiện P4 liên quan | MVP/context map đầu tiên đủ rõ; G2–G4 cho phần sắp triển khai |
| M3 — Pilot một change nhỏ | P5, P6; P7 nếu phạm vi pilot có release | Truy được yêu cầu -> kết quả; blockers được xử lý; ghi các điểm quy trình gây vướng |
| M4 — Điều chỉnh và vận hành | P8, audit mẫu, cập nhật quy trình | Findings có owner/task; quy trình được sửa theo bằng chứng pilot |

Không coi lộ trình 90 ngày cấp công ty trong bản nguồn là thời hạn dự án solo. Mốc phụ thuộc kết quả và năng lực thực tế. Pilot trên local/staging phải ghi đúng môi trường; các gates Production/bàn giao chưa áp dụng vẫn ở trạng thái chờ phù hợp, không tự đánh dấu đã đạt.

Nhịp quản trị đề xuất: sau mỗi change kiểm tra DoR/DoD và lỗi; sau mỗi release review bằng chứng và recovery; hằng tháng nếu dự án đang hoạt động xem KPI/risk/exception; hằng quý hoặc khi có thay đổi lớn audit mẫu và cập nhật version quy trình. Dự án ngắn có thể gộp kỳ rà soát với mốc giao.

## 13. Chỉ số và nguồn đo

| Chỉ số từ SDP | Cách đo cho mô hình solo | Cửa sổ xem xét |
| --- | --- | --- |
| Lead Time for Changes | Từ code change có định danh đến deployment Production thành công; chưa có Production thì N/A, có thể theo dõi cycle time local bằng tên riêng | Sau release / hằng tháng |
| Deployment Frequency | Số lần triển khai Production thành công trong kỳ, từ deployment record | Hằng tháng |
| Change Failure Rate | Số deployment Production gây sự cố cần khắc phục / tổng deployment Production trong kỳ; mẫu số 0 thì N/A | Hằng tháng |
| Failed Deployment Recovery Time | Khoảng từ phát hiện deployment thất bại đến khi dịch vụ được xác nhận phục hồi; lưu từng sự cố và số mẫu | Theo sự cố |
| Escaped Defect Rate | Lỗi phát hiện sau giao / tổng lỗi đã phát hiện của cùng phạm vi release và kỳ quan sát; công bố cách phân loại | Sau release / hằng tháng |
| Sprint Goal Success | Nếu dùng iteration có mục tiêu thì số mục tiêu đạt / mục tiêu đã chốt; không dùng Sprint thì ghi chỉ số iteration riêng | Mỗi iteration |
| Rework Rate | Công sức sửa lại do lỗi hoặc hiểu sai / tổng công sức ghi nhận trong kỳ; tách thay đổi yêu cầu mới | Hằng tháng |
| Quality Gate Compliance | Gate đạt đúng kiểm soát / gate áp dụng đã đi đến quyết định; báo riêng số ngoại lệ, quá hạn và gate thiếu bằng chứng | Mỗi release / hằng tháng |

Chưa có dữ liệu nền thì chưa đặt target số hoặc so sánh năng suất cá nhân. Hiển thị số mẫu và phần thiếu dữ liệu; không đổi N/A thành 0 để làm đẹp chỉ số. KPI là tín hiệu để chọn cải tiến, không phải bằng chứng tự động rằng gate hay sản phẩm đã đạt.

## 14. Tiêu chí đánh giá việc đưa quy trình vào sử dụng

Các tiêu chí sau là việc phải kiểm chứng trong pilot, chưa được ghi là đã đạt:

1. Một change mẫu truy được nguồn yêu cầu đến AC, tasks, diff/revision, checks và kết quả giao đúng môi trường.
2. Task thiếu AC hoặc dependency quan trọng không được gắn Ready for Dev; discovery đủ scope vẫn có thể thực hiện.
3. Artifact có file nhưng chưa có quyết định không được tự ghi Approved; test không chạy không bị ghi Passed.
4. Khi baseline hoặc artifact release đổi, hồ sơ chỉ ra gate/tests nào phải xem lại.
5. Lỗi blocker, check thất bại hoặc exception hết hạn có hành động và trạng thái đúng, không tự biến mất qua bước merge/archive.
6. Change không cần ADR vẫn đi qua workflow đúng mà không phải bịa một quyết định kiến trúc.
7. Một lượt review solo có findings/đối chiếu thật và được ghi đúng là self-review.
8. Nếu pilot có deployment, chứng minh được định danh artifact, smoke test và phương án recovery phù hợp; nếu không thì ghi chưa kiểm chứng phần này.
9. Thử truy tìm một tài liệu/quyết định/bằng chứng bằng ID từ index; không có bản sao mâu thuẫn về trạng thái.
10. Sau pilot có ít nhất một lượt review điểm vướng và backlog cải tiến; quyết định giữ/sửa quy tắc có căn cứ.

## 15. Đối chiếu với tài liệu nguồn

| Phần SDP nguồn | Nơi được cụ thể hóa trong proposal này | Nhiệm vụ liên quan |
| --- | --- | --- |
| I — Tám giai đoạn, bảy gates | Mục 3 và 5 | P1–P8 |
| II — Vai trò và phân tách trách nhiệm | Mục 2; tailoring self-review trong proposal | P0.01, P5.05, P6.04 |
| III — Quy trình từng giai đoạn | Mục 3–5, 8–10 | P1.01–P8.06 |
| IV — Approval matrix và ngoại lệ | Mục 2–3, 8 | P0.01, P1.06, P2.07, P3.07, P4.07, P5.07, P6.06, P7.05 |
| V — Ba cấp tài liệu, 2 policies, 12 SOP, templates | Mục 7–8 | P0.06 và các nhiệm vụ theo SOP |
| VI — Quy định bắt buộc | Mục 6, 9–10 | R01–R18 và P2–P8 |
| VII — Workflow, trạng thái, trường task | Mục 4, 8–9 | P4.01, P4.07, P5.01, P7.06 |
| VIII — Tám KPI | Mục 13 | P8.05 |
| IX — Lộ trình 90 ngày | Mục 12: đổi sang mốc phù hợp solo | P0–P8, M0–M4 |
| X — Process Owner và nhịp cải tiến | Mục 2, 12–14 | P8.03–P8.06 |

## 16. Thứ tự công việc tiếp theo

Proposal và các điều chỉnh solo đã được người dùng chốt theo DEC-SDP-SOLO-001. Tiếp theo đặc tả các năng lực quy trình của change này, thiết kế phần áp dụng tối thiểu, lập tasks và xử lý các nhiệm vụ P0 còn lại. Khi workflow đủ dùng, thực hiện discovery từ khảo sát/EPICS để xác định MVP và bounded context của sản phẩm, rồi dựng foundation và triển khai một lát cắt nghiệp vụ.

Không đánh dấu các task trong kế hoạch này là đã hoàn thành chỉ vì đã soạn proposal. Bản kế hoạch là công cụ lựa chọn và kiểm soát công việc tiếp theo; nguồn bằng chứng thực hiện phải được tạo trong quá trình làm việc thật.

## 17. Lịch sử trạng thái

| Phiên bản | Ngày | Nội dung |
| --- | --- | --- |
| 0.1 | 12/11/2026 | Lập roadmap 60 nhiệm vụ ở trạng thái Planned |
| 0.2 | 12/11/2026 | Ghi quyết định DEC-SDP-SOLO-001; P0.01 và M0 Done; cập nhật hiện trạng Git, giữ các nhiệm vụ còn lại Planned |
