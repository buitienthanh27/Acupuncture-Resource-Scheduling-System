# Proposal: Quy trình phát triển phần mềm cho một người triển khai

| Thuộc tính | Giá trị |
| --- | --- |
| Mã | PROP-SDP-SOLO-001 |
| Phiên bản | 0.2 — cập nhật hồ sơ quyết định và hiện trạng |
| Ngày soạn | 12/11/2026, múi giờ Asia/Saigon |
| Trạng thái | Approved for detailed planning — người dùng đã chốt phương án quy trình và roadmap |
| Chủ sở hữu và người quyết định | Chủ dự án — người dùng trực tiếp triển khai |
| Trợ lý thực hiện | Codex, trong phạm vi công việc được người dùng giao |
| Phạm vi | Dự án Acupuncture Scheduling System do một người triển khai |
| Nguồn | [SDP v1.0 do người dùng cung cấp](references/sdp-v1.0-source.txt) và các quyết định trong cuộc trao đổi |

## Why

Chuyển bộ **Software Development Process (SDP)** cấp công ty thành quy trình thực hành cho một người, có nhiệm vụ cụ thể, bằng chứng và điều kiện chuyển bước. Mục tiêu là giảm sai sót, phát hiện lệch yêu cầu sớm và kiểm soát triển khai; quy trình không bảo đảm loại bỏ mọi lỗi.

## What Changes

- Giữ tám giai đoạn và bảy **Quality Gate**, áp dụng theo từng phạm vi thay đổi hoặc đợt phát hành, với một người chịu trách nhiệm cuối cùng.
- Thay cơ cấu nhiều chức danh bằng các vai trò công việc do chủ dự án kiêm nhiệm; giữ xác nhận của khách hàng khi phạm vi hoặc hợp đồng cần xác nhận đó.
- **BREAKING về chính sách đề xuất:** thay yêu cầu reviewer độc lập mặc định bằng self-review ở lượt riêng, kiểm tra tự động và quyết định của chủ dự án. Cơ chế này không được ghi nhận là review độc lập; nghĩa vụ review độc lập từ hợp đồng hoặc quy định bên ngoài vẫn phải được xử lý riêng.
- Định nghĩa **Definition of Ready**, **Definition of Done**, trạng thái công việc, phân loại rủi ro, bằng chứng kiểm tra và cách xử lý **Exception**.
- Thiết lập **Traceability** từ nguồn yêu cầu đến tiêu chí nghiệm thu, OpenSpec change, task, thay đổi mã nguồn, kiểm thử và release.
- Lập danh sách công việc để chuẩn hóa tài liệu, Git local, kiểm thử, kiểm tra kiến trúc, môi trường, phát hành, rollback và vận hành.
- Gắn quy trình với modular monolith + Clean Architecture + DDD. Xác định **Bounded Context** từ nghiệp vụ trước khi tạo module; giữ một backend triển khai chung.
- Chỉ ghi nhận bước đã hoàn thành khi có bằng chứng thực tế; tách trạng thái tài liệu OpenSpec khỏi quyết định phê duyệt và kết quả phát hành.

Phần nhiệm vụ, quy tắc, cổng kiểm soát, biểu mẫu và tiêu chí hoàn thành được trình bày tại [kế hoạch thực hiện](execution-plan.md). Roadmap đã được chốt làm cơ sở đặc tả tiếp; việc thực hiện các nhiệm vụ vẫn theo dependency, điều kiện sẵn sàng và phạm vi được giao.

## Capabilities

### New Capabilities

Các năng lực dưới đây là năng lực quản lý quy trình của repository, không phải module nghiệp vụ chạy trong ứng dụng. Khi đặc tả tiếp, mỗi năng lực cần một delta spec tương ứng.

- `solo-delivery-governance`: vai trò một người, bảy cổng kiểm soát, bằng chứng, thẩm quyền, rủi ro và ngoại lệ.
- `requirements-and-change-control`: quản lý yêu cầu, baseline, MVP, traceability và đánh giá thay đổi.
- `architecture-and-development-discipline`: bounded context, Clean Architecture + DDD, chuẩn bị dự án, phát triển, self-review và quản lý cấu hình.
- `verification-and-release-control`: kiểm thử, quản lý lỗi, UAT, release readiness, deployment, rollback và bàn giao.
- `operations-and-process-improvement`: hỗ trợ, sự cố, KPI, đánh giá định kỳ và cải tiến quy trình.

### Modified Capabilities

Chưa có specs hiện hành để sửa đổi. Các điều chỉnh hướng dẫn, schema và skills hiện có là tác động đến công cụ hỗ trợ, được liệt kê trong kế hoạch; chúng chưa được áp dụng bởi proposal này.

## Impact

### Tài liệu và cơ chế làm việc

- Dùng ba cấp tài liệu Policy → SOP → Template/Record; gộp nội dung ngắn trong một sổ tay và dùng chỉ mục thay vì tạo tài liệu trùng lặp.
- Đồng bộ `AGENTS.md`, `openspec/config.yaml`, schema và skills qua các bước đặc tả và triển khai tương ứng; hướng dẫn đang có hiệu lực vẫn áp dụng cho đến khi phần thay đổi đó được thực hiện.
- Cần sửa cách hoàn thành ADR tùy chọn trong schema, rà soát tham chiếu Claude/OpenCode và thống nhất checkpoint Git trước khi vận hành workflow đầy đủ.
- Trạng thái hiện tại: Git local đã được khởi tạo trên `main`, `origin` đã liên kết với repository GitHub của người dùng; chưa có commit hoặc push. Chưa có mã nguồn ứng dụng, CI hay hồ sơ phê duyệt G1–G7 được xác nhận. Quyết định chốt proposal không tự chứng minh gate nào đã đạt.

### Ứng dụng

- Giữ baseline ASP.NET Core/.NET, EF Core + Npgsql, PostgreSQL, React + Vite + TypeScript đã chốt trong cấu hình dự án; xác minh tương thích khi dựng source.
- Không tạo microservices. Danh sách bounded context, aggregate và use case châm cứu cần được phân tích từ tài liệu khách hàng ở change tiếp theo; proposal quy trình không tự quyết định các ranh giới đó.
- Chưa thay đổi API, database, dependency, hạ tầng hoặc môi trường vận hành.

### Điều chỉnh so với SDP công ty

| Nội dung nguồn | Cách áp dụng cho một người |
| --- | --- |
| PM, BA, PO nội bộ, Tech Lead, QA, DevOps, Operations | Chủ dự án kiêm nhiệm theo từng lượt công việc; người xác nhận phía khách hàng được ghi nhận riêng khi cần |
| Reviewer độc lập, PR và branch protection | Self-review tách lượt + diff/checks local; PR/branch protection chỉ được ghi nhận khi có remote và cấu hình thật |
| Phê duyệt nhiều chức danh | Chủ dự án quyết định theo gate; Codex tập hợp bằng chứng, không tự ký thay |
| CI/CD trên nền tảng công ty | Bắt đầu bằng script kiểm tra local có lưu kết quả; bổ sung CI/CD nếu được chọn, không ghi local checks thành CI |
| Lộ trình 90 ngày áp dụng toàn công ty | Áp dụng theo các mốc của dự án, không tự tạo cam kết 90 ngày hoặc mở rộng toàn công ty |
| ISO/IEC/IEEE 12207, ISO 9001, CMMI, Agile/Scrum, DevSecOps, ISO/IEC 25010 | Giữ vai trò nguồn tham chiếu của bản SDP; không tuyên bố chứng nhận, maturity level hoặc tuân thủ đầy đủ tiêu chuẩn |

### Phạm vi giao lần này và tiêu chí chấp nhận

1. Có proposal và kế hoạch bao phủ đủ tám giai đoạn, bảy gates, 12 SOP cùng các quy tắc xuyên suốt của bản nguồn.
2. Mỗi nhóm nhiệm vụ có mã, đầu ra và điều kiện hoàn thành; nhiệm vụ phân tích không bị ghi là đã được triển khai.
3. Các quyết định cho mô hình một người, ranh giới quyền của Codex và điểm cần khách hàng xác nhận được thể hiện rõ.
4. Có thứ tự thực hiện, điều kiện sẵn sàng và tiêu chí đánh giá pilot; không tự tạo người phê duyệt, bằng chứng hoặc ngày phát hành.
5. Có bản sao nguồn và bảng đối chiếu để truy lại nội dung đã điều chỉnh.

Dựa trên phương án đã được người dùng chốt, bước đặc tả tiếp là specs, design, ADR nếu thực sự cần và tasks theo schema. Việc OpenSpec nhận diện `proposal` hoàn thành chỉ xác nhận có tài liệu; không đồng nghĩa toàn bộ change đã sẵn sàng apply.

## Hồ sơ chốt phương án

| Thuộc tính | Nội dung |
| --- | --- |
| Mã quyết định | DEC-SDP-SOLO-001 |
| Người quyết định | Chủ dự án — người dùng trong cuộc trao đổi này |
| Nguồn quyết định | Tin nhắn người dùng ngay sau hướng dẫn đọc tài liệu: “Oke tôi đã review xong chốt như vậy nhé” |
| Thời điểm ghi nhận | 12/11/2026 13:04:09, Asia/Saigon (UTC+07:00); đây là thời điểm ghi hồ sơ, không suy đoán thời điểm gửi tin nhắn |
| Tài liệu được rà soát | PROP-SDP-SOLO-001 v0.1 và PLAN-SDP-SOLO-001 v0.1 |
| Quyết định | Chốt phương án quy trình solo, vai trò, các cổng kiểm soát, DoR/DoD, quy tắc và roadmap làm cơ sở đặc tả tiếp |
| Công việc hoàn thành nhờ quyết định này | P0.01 và mốc M0 — chốt cách làm |
| Nội dung chưa được quyết định này xác nhận | Yêu cầu nghiệp vụ sản phẩm, kết quả kiểm thử, hoàn thành các task khác, phê duyệt G1–G7 hoặc sẵn sàng apply/release |
| Giới hạn hành động Git và phát hành | Không bao gồm tạo commit, push, publish hoặc deploy |

SHA-256 của hai file v0.1 ngay trước khi cập nhật hồ sơ quyết định:

- `proposal.md`: `4176008BF296F41F601DC63827DF55ABC976FBF49DBACF8DB9D1975FA3B13F17`.
- `execution-plan.md`: `A5AF558BE7A92002FD97F32CA80DE33B436D317FD6350BD5FC16C791FAE0A832`.

### Lịch sử thay đổi

| Phiên bản | Ngày | Nội dung |
| --- | --- | --- |
| 0.1 | 12/11/2026 | Soạn phương án và roadmap để người dùng rà soát |
| 0.2 | 12/11/2026 | Ghi quyết định của người dùng, đánh dấu P0.01/M0 hoàn thành và cập nhật hiện trạng Git; không thay đổi nội dung quy tắc đã được rà soát |
