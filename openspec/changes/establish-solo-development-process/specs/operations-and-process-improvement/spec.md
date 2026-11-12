# Vận hành và cải tiến quy trình

## ADDED Requirements

### Requirement: OPS-01 Vận hành và incident có người chịu trách nhiệm

Hướng dẫn vận hành SHALL xác định health/log/alert phù hợp, người nhận, support path và kiểm tra restore theo rủi ro. Incident SHALL có ID, mức ảnh hưởng, owner, timeline, hành động phục hồi và kết quả; incident nghiêm trọng hoặc lặp lại SHALL có review nguyên nhân và corrective tasks.

#### Scenario: Tiếp nhận một sự cố nghiêm trọng
- **GIVEN** một sự cố đang ảnh hưởng chức năng trọng yếu
- **WHEN** lập hồ sơ xử lý
- **THEN** có owner, mức ảnh hưởng, timeline và hành động phục hồi đang được theo dõi
- **AND** review nguyên nhân được lập sau khi ổn định thay vì bỏ qua bằng chứng sự cố

#### Scenario: Hành động phòng ngừa chưa hoàn thành
- **GIVEN** review incident đã có corrective task còn mở
- **WHEN** tổng hợp trạng thái cải tiến
- **THEN** task giữ trạng thái thực tế và không được coi là đã xử lý chỉ vì incident đã đóng

### Requirement: OPS-02 KPI có định nghĩa và dữ liệu thật

Mỗi KPI SHALL có tên, định nghĩa, nguồn dữ liệu, cửa sổ đo, số mẫu và cách xử lý thiếu dữ liệu. Bộ hướng dẫn SHALL bao phủ tám chỉ số trong SDP; thiếu deployment hoặc mẫu số bằng không SHALL ghi N/A. Chưa có baseline MUST không tự đặt target hoặc dùng KPI đơn lẻ để kết luận năng suất cá nhân.

#### Scenario: Chưa có deployment Production
- **GIVEN** dự án chưa có deployment Production
- **WHEN** báo cáo deployment frequency và change failure rate
- **THEN** báo cáo nêu chưa có dữ liệu và không tạo số deployment thành công hoặc tỷ lệ lỗi giả

#### Scenario: Theo dõi tiến độ local
- **GIVEN** có thời gian thực hiện task local nhưng chưa có Production
- **WHEN** muốn đo thời gian xử lý
- **THEN** số liệu có thể được ghi với tên cycle time local và không được gọi là lead time đến Production

### Requirement: OPS-03 Audit và cải tiến tạo hành động theo dõi được

Quy trình SHALL rà soát sau change/release, xem rủi ro/ngoại lệ/KPI định kỳ phù hợp nhịp dự án, và audit mẫu khi đến mốc hoặc có thay đổi lớn. Findings SHALL có owner, ưu tiên, corrective task và kết quả kiểm tra lại; cập nhật quy trình SHALL giữ version và lịch sử.

#### Scenario: Audit phát hiện gate thiếu bằng chứng
- **GIVEN** một change được chọn để truy từ yêu cầu đến kết quả giao
- **WHEN** thiếu bằng chứng cho một gate đã ghi đạt
- **THEN** finding được ghi nhận và quyết định liên quan được xem lại cùng hành động khắc phục

#### Scenario: Cải tiến cách làm sau pilot
- **GIVEN** pilot chỉ ra một bước trùng lặp không tạo thêm khả năng kiểm soát
- **WHEN** chủ dự án chốt cách giản lược
- **THEN** phiên bản quy trình mới ghi thay đổi, lý do và phạm vi áp dụng thay vì xóa lịch sử cũ
