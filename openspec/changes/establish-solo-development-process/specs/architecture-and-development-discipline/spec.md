# Kỷ luật kiến trúc, OpenSpec và phát triển

## ADDED Requirements

### Requirement: ARC-01 Giữ ranh giới modular monolith và Clean Architecture

Hướng dẫn dự án SHALL giữ một backend triển khai chung, module theo **Bounded Context** được xác định từ nghiệp vụ và dependency đi vào trong. Domain/Application MUST không phụ thuộc API, Infrastructure hoặc EF Core; giao tiếp giữa context SHALL qua hợp đồng nội bộ rõ thay vì truy cập internals hoặc dữ liệu của nhau.

#### Scenario: Xem xét một module nghiệp vụ mới
- **GIVEN** một bounded context đã có căn cứ nghiệp vụ
- **WHEN** review thiết kế module
- **THEN** ownership mô hình/dữ liệu, hợp đồng nội bộ và dependency theo layer được chỉ rõ
- **AND** thiết kế không tự tách module thành microservice

#### Scenario: Phát hiện tham chiếu sai tầng
- **GIVEN** một thay đổi để Application tham chiếu EF Core
- **WHEN** review hoặc kiểm tra dependency thay đổi đó
- **THEN** có finding vi phạm ranh giới và thay đổi chưa đáp ứng G5 trước khi xử lý finding hoặc quyết định ngoại lệ hợp lệ

### Requirement: ARC-02 Hoàn thành artifact không áp dụng có kết luận rõ

Workflow SHALL có artifact tổng kết ADR với trạng thái có quyết định đáng kể hoặc không áp dụng và lý do. Khi có ADR thật, bản tổng kết SHALL liên kết đến các quyết định đó. Khi không có, workflow MUST không yêu cầu tạo ADR giả, cũng không dùng một glossary reference hoặc README bất kỳ để chứng minh ADR hoàn thành.

#### Scenario: Change không cần ADR
- **GIVEN** review xác định không có quyết định kiến trúc đáng kể
- **WHEN** tạo bản tổng kết ADR với kết luận và lý do đó
- **THEN** dependency ADR của tasks có thể được nhận diện hoàn thành mà không tạo một ADR kiến trúc giả

#### Scenario: Chỉ tồn tại tài liệu phụ
- **GIVEN** không có artifact tổng kết ADR nhưng có glossary reference trong thư mục ADR
- **WHEN** kiểm tra trạng thái workflow đã điều chỉnh
- **THEN** artifact ADR vẫn chưa hoàn thành và tasks không được mở khóa chỉ bởi tài liệu phụ

### Requirement: ARC-03 Skills phù hợp công cụ hiện có

Hướng dẫn dùng cho Codex SHALL được kiểm kê tham chiếu tool/path/runtime. Tool hoặc named agent không có SHALL được thay bằng cách thực hiện tương đương có sẵn hoặc ghi rõ không hỗ trợ. Workflow MUST không tự giả lập việc đã gọi một tool; dùng sub-agent chỉ khi được yêu cầu hoặc có workflow áp dụng cho phép.

#### Scenario: Hướng dẫn gọi tool riêng của Claude
- **GIVEN** một skill đang yêu cầu Task tool không có trong phiên Codex
- **WHEN** chuẩn hóa skill đó
- **THEN** hướng dẫn dùng thao tác tương đương phù hợp Codex hoặc nêu rõ giới hạn, không ghi tool cũ là đã được gọi

#### Scenario: Chưa có runtime cho bulk apply
- **GIVEN** skill bulk apply đòi runtime chưa được cấu hình
- **WHEN** kiểm kê khả năng sử dụng
- **THEN** skill được ghi không sẵn sàng và không được tự động đưa vào luồng mặc định solo

### Requirement: ARC-04 Planning local và hành động Git có phạm vi riêng

Quy trình SHALL cho tiếp tục planning local trong phạm vi đã giao mà không bắt tạo commit giữa từng tài liệu. Trước apply, chính sách hiện tại về proposal được commit trên main SHALL được kiểm tra; nếu chưa đạt, phải báo rõ điều kiện thiếu. Commit, branch, merge, push và deploy MUST chỉ thực hiện khi được người dùng cho phép; việc liên kết origin không tự cho phép push.

#### Scenario: Tiếp tục bộ tài liệu đã được giao
- **GIVEN** chủ dự án đã yêu cầu tạo specs, design và tasks local
- **WHEN** chuyển từ specs sang design trong cùng phạm vi
- **THEN** việc soạn tài liệu tiếp tục và chưa tạo commit thay người dùng

#### Scenario: Planning đầy đủ nhưng chưa có commit
- **GIVEN** đủ planning artifacts và chưa có commit trên main
- **WHEN** xét điều kiện bắt đầu apply theo Git policy hiện tại
- **THEN** trạng thái báo thiếu checkpoint Git, không tự commit và không báo đã sẵn sàng thực thi mọi điều kiện

### Requirement: ARC-05 Review và kiểm tra dựa trên kết quả thật

Thay đổi triển khai SHALL có **Self-review** ở lượt riêng, findings và kết quả xử lý, cùng build/tests/lint/typecheck/scan phù hợp scope. Dữ liệu kiểm tra SHALL gắn revision, môi trường, lệnh hoặc bước thực hiện, actual result và bằng chứng; Not Run MUST không được coi là Passed. Secrets MUST không được lưu trong source hoặc evidence.

#### Scenario: Check không chạy được
- **GIVEN** môi trường thiếu dependency để chạy một check bắt buộc
- **WHEN** tổng hợp kết quả kiểm tra
- **THEN** check được ghi Not Run với lý do và tác động thay vì Passed

#### Scenario: Self-review tìm thấy lỗi
- **GIVEN** lượt review riêng phát hiện nhánh lỗi chưa xử lý
- **WHEN** chuẩn bị G5
- **THEN** finding được liên kết đến task sửa và retest hoặc quyết định ngoại lệ phù hợp trước khi đóng review
