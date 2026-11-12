# Nền chạy local ClinicFlow

## ADDED Requirements

### Requirement: FND-01 Toolchain và dependency tái lập được

Workspace SHALL pin SDK .NET 11, target `net11.0`, Node 24 và các package stable tương thích của backend/frontend bằng file cấu hình và lockfile phù hợp. Hướng dẫn MUST có lệnh restore/build/start/check từ project root; thiếu prerequisite SHALL báo rõ, không tự retarget về SDK cũ hoặc dùng prerelease để báo thành công.

#### Scenario: FND-01-S1 Chạy từ workspace mới
- **GIVEN** SDK/runtime và PostgreSQL local đã được chuẩn bị theo hướng dẫn
- **WHEN** developer làm theo lệnh restore/build/start đã ghi
- **THEN** API và SPA khởi động với phiên bản dependency xác định trong workspace
- **AND** không cần chỉnh secrets hoặc cấu hình hệ thống toàn máy để hoàn tất bootstrap

#### Scenario: FND-01-S2 Thiếu SDK yêu cầu
- **GIVEN** máy chỉ có SDK .NET 10
- **WHEN** preflight hoặc build kiểm tra foundation target net11.0
- **THEN** kết quả chỉ rõ thiếu SDK .NET 11 và cách chuẩn bị local
- **AND** project không bị đổi target hoặc ghi build Passed thay cho lần chưa chạy

### Requirement: FND-02 Một host có health và hợp đồng phát triển rõ

Backend SHALL có một host ASP.NET Core, endpoint `GET /health/live` trả HTTP 200 và JSON `{"status":"healthy"}` khi tiến trình phục vụ được request. OpenAPI Development SHALL mô tả endpoint này tại `/openapi/v1.json`; health là liveness tiến trình, không chứng nhận database, đăng nhập, lịch hoặc MVP hoàn thành. Response MUST không chứa cấu hình nhạy cảm hoặc dữ liệu nghiệp vụ.

#### Scenario: FND-02-S1 Host phục vụ liveness
- **GIVEN** host local đã khởi động
- **WHEN** client gọi GET /health/live
- **THEN** nhận HTTP 200 với status healthy
- **AND** response không khẳng định đã kết nối database hoặc duyệt quy tắc chuyên môn

#### Scenario: FND-02-S2 OpenAPI chỉ phục vụ môi trường phát triển
- **GIVEN** host chạy ngoài Development
- **WHEN** client yêu cầu /openapi/v1.json
- **THEN** tài liệu phát triển không được phục vụ tại endpoint đó
- **AND** dữ liệu/cấu hình nội bộ không xuất hiện trong response

### Requirement: FND-03 Khung SPA xử lý kết nối và thử lại

Frontend SHALL là React/Vite strict TypeScript có vùng nội dung chính và nhận API base URL từ cấu hình môi trường công khai. Khung nội bộ SHALL cho biết trạng thái kết nối host từ health contract; khi mất kết nối phải có thông báo dễ hiểu và thao tác thử lại, không hiển thị connection string, stack trace hoặc dashboard bệnh nhân giả như dữ liệu thật. Request đang chờ MUST hủy được khi component kết thúc và có giới hạn chờ hữu hạn.

#### Scenario: FND-03-S1 Kết nối thành công
- **GIVEN** API base URL local hợp lệ và health trả status healthy
- **WHEN** khung SPA kiểm tra kết nối
- **THEN** giao diện hiển thị trạng thái đã kết nối
- **AND** trạng thái không được mô tả là MVP hoặc lịch điều trị đã sẵn sàng sử dụng thực tế

#### Scenario: FND-03-S2 Mất kết nối rồi thử lại
- **GIVEN** lần kiểm tra đầu thất bại hoặc hết thời gian chờ
- **WHEN** người dùng chọn thử lại sau khi host phục hồi
- **THEN** trạng thái lỗi được thay bằng kết quả lần kiểm tra mới
- **AND** thông báo người dùng không chứa chi tiết kỹ thuật nhạy cảm từ lỗi

### Requirement: FND-04 Kiểm chứng provider bằng PostgreSQL thật

Foundation SHALL có integration check dùng EF Core/Npgsql stable tương thích net11.0 để kết nối một PostgreSQL 18.x local được chỉ định cho phát triển. DbContext thử SHALL chỉ nằm trong test project, không có model/bảng/migration nghiệp vụ và không tự tạo/xóa database. Kết quả MUST phân biệt thành công, thất bại và chưa chạy; thiếu cấu hình/database không được thay bằng EF InMemory hoặc test bị bỏ qua nhưng ghi Passed.

#### Scenario: FND-04-S1 Provider kết nối database local
- **GIVEN** một database PostgreSQL local được chỉ định cùng credentials ngoài source
- **WHEN** integration check dùng provider EF/Npgsql để kiểm tra kết nối
- **THEN** có kết quả kết nối thật với database đó
- **AND** check không tạo/xóa bảng, schema hoặc dữ liệu nghiệp vụ

#### Scenario: FND-04-S2 Database chưa được chuẩn bị
- **GIVEN** cấu hình database thiếu hoặc kết nối thất bại
- **WHEN** chạy hoặc tổng kết integration check bắt buộc
- **THEN** kết quả là Failed hoặc Not Run kèm lý do đã loại secrets phù hợp với việc thực sự xảy ra
- **AND** foundation chưa được ghi hoàn thành toàn bộ checks hoặc đổi sang provider giả

### Requirement: FND-05 Cấu hình local bảo vệ secrets

Cấu hình public của SPA MUST không chứa credentials; secrets chỉ được nhận từ environment hoặc user-secrets phù hợp, với file mẫu chỉ có placeholder. Lệnh khởi động/check SHALL không sửa PATH, trust store hoặc cấu hình toàn máy ngầm. Dữ liệu/tài khoản thật trong các nguồn SHALL không được import vào foundation; hướng dẫn local MUST nêu rõ phạm vi phát triển.

#### Scenario: FND-05-S1 Cấu hình mẫu có thể chia sẻ
- **GIVEN** workspace có file mẫu cấu hình và ignore phù hợp
- **WHEN** developer review diff và frontend build output
- **THEN** không có database password hoặc connection string chứa secrets bị đóng gói hoặc ghi vào source

#### Scenario: FND-05-S2 Check database thất bại với credentials riêng
- **GIVEN** một connection string chỉ có trong môi trường local
- **WHEN** check kết nối thất bại và ghi kết quả
- **THEN** log/evidence chỉ nêu loại lỗi cần xử lý
- **AND** không in lại connection string hoặc giá trị bí mật

### Requirement: FND-06 Giữ ranh giới kiến trúc khi bootstrap

Foundation SHALL giữ một backend và không tạo **Bounded Context** giả, module theo bảng/màn hình hoặc generic DbContext production dùng chung dữ liệu. API chỉ chứa bootstrap/HTTP contracts của change. Domain/Application/Infrastructure nghiệp vụ, aggregates/repositories và migrations SHALL được tạo trong change sau khi ownership được review; context thử provider không được đăng ký vào host production.

#### Scenario: FND-06-S1 Review solution foundation
- **GIVEN** source foundation đã được tạo
- **WHEN** review project references, DI và các persistence type
- **THEN** có đúng một host API và context provider thử chỉ nằm trong test project
- **AND** không có service độc lập, module ứng viên được chốt ngầm hoặc domain model/framework reference được tạo để lấp chỗ trống

### Requirement: FND-07 Checks và bằng chứng đóng change

Developer SHALL chạy restore/build, backend API tests, frontend typecheck/lint/behavior tests/build và provider integration check thích hợp. Record SHALL có revision, lệnh, môi trường, actual result và hạn chế; scenario chưa chạy vẫn là Not Run. **Definition of Done** MUST không được đánh dấu đạt chỉ vì artifact OpenSpec đủ hoặc health trả 200.

#### Scenario: FND-07-S1 Tổng kết đủ kết quả thật
- **GIVEN** source đã có và các check bắt buộc đã chạy
- **WHEN** tổng kết foundation
- **THEN** mỗi check có actual result, lệnh và phạm vi xác định được
- **AND** chỉ đóng task tương ứng đã có bằng chứng đạt

#### Scenario: FND-07-S2 Một check bắt buộc chưa chạy
- **GIVEN** backend build đạt nhưng PostgreSQL integration chưa chạy
- **WHEN** review hoàn thành change
- **THEN** database check vẫn là Not Run với tác động được nêu
- **AND** foundation không được ghi hoàn thành toàn bộ kiểm chứng

### Requirement: FND-08 Origin phát triển được giới hạn

API SHALL cho phép request browser từ origin SPA local được cấu hình cụ thể; không dùng allow-all origins hoặc credentials khi change chưa có cơ chế đăng nhập. Cấu hình mặc định SHALL phục vụ loopback và không tự mở host ra mạng phòng khám.

#### Scenario: FND-08-S1 Origin local được khai báo
- **GIVEN** origin SPA local khớp cấu hình API
- **WHEN** browser gửi request health từ origin đó
- **THEN** response có CORS header phù hợp cho origin đã khai báo

#### Scenario: FND-08-S2 Origin khác không được cho phép
- **GIVEN** một origin không có trong cấu hình phát triển
- **WHEN** request có Origin đó tới API
- **THEN** response không cấp Access-Control-Allow-Origin cho origin đó
- **AND** API không thay cấu hình thành wildcard để làm check thành công
