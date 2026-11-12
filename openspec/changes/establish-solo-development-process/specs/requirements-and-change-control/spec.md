# Yêu cầu, baseline và quản lý thay đổi

## ADDED Requirements

### Requirement: REQ-01 Yêu cầu truy được về nguồn và độ xác nhận

Mỗi yêu cầu SHALL có ID, nguồn đủ cụ thể, mô tả, AC, ưu tiên và trạng thái xác nhận. Sự thật, giả định, mâu thuẫn và Unknown MUST được phân biệt; nội dung thiếu không được tự nâng thành yêu cầu khách hàng đã chốt.

#### Scenario: Trích một yêu cầu từ EPICS
- **GIVEN** tài liệu đầu vào có sheet và dòng xác định
- **WHEN** ghi một yêu cầu từ nội dung đó
- **THEN** yêu cầu có ID và vị trí nguồn để người đọc kiểm tra lại
- **AND** phần diễn giải chưa được xác nhận được đánh dấu là giả định

#### Scenario: Hai nguồn có thông tin khác nhau
- **GIVEN** hai tài liệu mô tả khác nhau về cùng một quy tắc
- **WHEN** chuẩn bị baseline của phạm vi đó
- **THEN** mâu thuẫn trở thành câu hỏi có owner và chưa được trình bày là quy tắc đã thống nhất

### Requirement: REQ-02 Baseline và MVP có phạm vi rõ

**Baseline** SHALL định danh phạm vi, version, yêu cầu và AC thuộc phạm vi, quyết định xác nhận và nội dung còn mở. Phạm vi MVP SHALL thể hiện ưu tiên, dependency và phần ngoài phạm vi; ước lượng chưa được chấp thuận MUST không được ghi là cam kết giao.

#### Scenario: Một nhóm yêu cầu đã đủ rõ
- **GIVEN** một lát cắt có AC, dependency và quyết định xác nhận còn hiệu lực
- **WHEN** đưa lát cắt vào MVP baseline
- **THEN** chỉ phạm vi đã xác nhận được chốt và các nhóm còn mơ hồ vẫn ở backlog

#### Scenario: Ước lượng còn dựa trên giả định
- **GIVEN** chưa xác định được một tích hợp có ảnh hưởng đến thời gian
- **WHEN** ghi kế hoạch sơ bộ
- **THEN** ước lượng ghi giả định, độ bất định và điểm cần làm rõ thay vì deadline đã cam kết

### Requirement: REQ-03 Thay đổi sau baseline có đánh giá tác động

Thay đổi ảnh hưởng scope, AC, chi phí, lịch trình, kiến trúc hoặc dữ liệu SHALL có change request gồm before/after, lý do, lựa chọn, impact, owner và quyết định. Quy trình SHALL chỉ ra specs, design, tests, gate và kế hoạch nào phải xem lại.

#### Scenario: Khách hàng sửa quy tắc đã chốt
- **GIVEN** quy tắc BR-01 nằm trong baseline v1
- **WHEN** đề nghị sửa BR-01 được tiếp nhận
- **THEN** thay đổi có hồ sơ impact và không âm thầm thay thế bản đã chốt
- **AND** baseline mới chỉ được xác nhận khi có quyết định đúng thẩm quyền

#### Scenario: Thay đổi chưa được chấp thuận
- **GIVEN** change request còn ở trạng thái Proposed
- **WHEN** chuẩn bị task phát triển bị ảnh hưởng
- **THEN** task không được trình bày là đang thực hiện một yêu cầu mới đã được khách hàng chốt

### Requirement: REQ-04 Chuỗi truy vết và thuật ngữ nhất quán

**Traceability** SHALL liên kết source, requirement/business rule/NFR, AC, change/task, code revision hoặc diff, test/evidence và release nếu áp dụng. **Bounded Context** và thuật ngữ SHALL dựa trên phân tích nghiệp vụ; không đồng nhất một epic, bảng hoặc màn hình với một context. Phần liên kết chưa tồn tại SHALL ghi Pending hoặc N/A có lý do.

#### Scenario: Một thay đổi được kiểm chứng
- **GIVEN** task triển khai và kiểm thử đã có kết quả thật
- **WHEN** truy từ requirement liên quan
- **THEN** tìm được AC, task, revision và bằng chứng kiểm thử của cùng phạm vi

#### Scenario: Sản phẩm chưa được phát hành
- **GIVEN** một requirement mới chỉ được đặc tả
- **WHEN** cập nhật traceability
- **THEN** liên kết release giữ Pending và không có release record giả để điền đủ bảng
