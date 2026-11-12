# Kiểm thử, phát hành và bàn giao

## ADDED Requirements

### Requirement: REL-01 Kiểm thử và lỗi truy được đến tiêu chí nghiệm thu

Quy trình SHALL xác định tests bắt buộc theo AC và rủi ro, kết quả thực tế và revision được thử. Defect SHALL có reproduction, expected/actual, severity, priority, owner, trạng thái và bằng chứng fix/retest; severity MUST không bị hạ chỉ để vượt gate.

#### Scenario: Lỗi đã sửa nhưng chưa retest
- **GIVEN** defect có bản sửa nhưng chưa có kết quả kiểm tra lại
- **WHEN** xem xét đóng defect
- **THEN** defect chưa được trình bày là đã xác nhận sửa thành công

#### Scenario: Phạm vi rủi ro cao
- **GIVEN** release ảnh hưởng một invariant hoặc dữ liệu có tác động lớn
- **WHEN** lập test plan
- **THEN** các kiểm tra liên quan đến thất bại, biên và tính nhất quán được xác định theo rủi ro cùng với tiêu chí đạt

### Requirement: REL-02 UAT và release readiness có đúng thẩm quyền

**UAT** SHALL phân biệt nghiệm thu phía khách hàng với internal acceptance. G6 SHALL tập hợp AC/tests, lỗi/rủi ro còn lại, kết quả UAT hoặc chấp thuận phù hợp, version, kế hoạch deployment, backup, recovery và monitoring. Quyết định tiếp tục có ngoại lệ SHALL tuân GOV-03.

#### Scenario: Chưa có khách hàng xác nhận
- **GIVEN** chủ dự án đã tự kiểm tra nghiệp vụ nhưng phần giao yêu cầu khách hàng nghiệm thu
- **WHEN** cập nhật release readiness
- **THEN** kiểm tra được ghi internal acceptance và phần UAT khách hàng vẫn chờ xác nhận

#### Scenario: Còn blocker không có quyết định xử lý
- **GIVEN** một lỗi blocker còn mở và chưa có xử lý hoặc chấp thuận rủi ro hợp lệ
- **WHEN** xét G6
- **THEN** G6 chưa được Approved để phát hành phạm vi đó

### Requirement: REL-03 Phát hành đúng artifact đã được xem xét

**Release Candidate** SHALL có định danh cố định liên kết đến kết quả kiểm thử và G6. Deployment record SHALL ghi môi trường, owner, thời điểm, artifact, config/migration version và smoke result. Thay đổi artifact sau G6 SHALL được đánh giá tác động và xác minh lại trước khi dùng quyết định cũ.

#### Scenario: Artifact được đổi sau kiểm thử
- **GIVEN** G6 đã xét artifact A nhưng bước triển khai đang chuẩn bị artifact B
- **WHEN** kiểm tra trước deploy
- **THEN** sự khác biệt được báo và quyết định cho A chưa chứng minh B đủ điều kiện

#### Scenario: Chỉ triển khai local
- **GIVEN** một phiên bản chỉ được chạy và kiểm tra trên local
- **WHEN** tổng hợp kết quả giao
- **THEN** hồ sơ ghi môi trường local và không tuyên bố đã phát hành Production

### Requirement: REL-04 Recovery và bàn giao tách khỏi archive

Kế hoạch **Rollback** SHALL xem xét cả ứng dụng và dữ liệu, trigger, người thực hiện và cách xác minh phục hồi; migration ảnh hưởng dữ liệu SHALL có phương án phục hồi phù hợp đã được kiểm tra theo rủi ro. G7 SHALL ghi phạm vi tiếp nhận, smoke result, tài liệu/support và đúng người xác nhận. Archive MUST không được dùng làm bằng chứng deployment hoặc handover.

#### Scenario: Migration làm thay đổi dữ liệu không đảo ngược đơn giản
- **GIVEN** một migration có thể xóa hoặc biến đổi dữ liệu
- **WHEN** review phương án release
- **THEN** kế hoạch nêu backup/restore hoặc forward recovery được kiểm tra và không chỉ ghi hạ phiên bản ứng dụng

#### Scenario: Change đã archive nhưng chưa bàn giao
- **GIVEN** change đã đồng bộ specs và archive, chưa có hồ sơ G7
- **WHEN** xem trạng thái release
- **THEN** trạng thái handover vẫn chưa được xác nhận và các việc còn lại có ID để theo dõi
