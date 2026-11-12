# Dựng nền local cho ClinicFlow

Trạng thái: Draft để review, ngày ghi 12/11/2026, Asia/Saigon. Đây là change đầu của kế hoạch một tháng; **chưa triển khai** và chưa là phê duyệt gate. Đọc trang này trước; [design](design.md), [spec](specs/local-runtime-foundation/spec.md) và [tasks](tasks.md) dành cho lúc xem chi tiết.

## Why

Dự án hiện có quy trình và discovery nhưng chưa có ứng dụng để build/chạy. Mục tiêu một tháng đã chọn là MVP chạy được, nghiệm thu nội bộ; cần một nền local có kiểm tra thật trước khi triển khai intake, cấu hình và điều phối.

Nguồn: [discovery mục 19 và các quyết định DEC-PRODUCT-001–010](../../../Docs/discovery/overview.md), [baseline stack](../../config.yaml), [sổ tay](../../../Docs/process/handbook.md).

## What Changes

- Dựng một host ASP.NET Core 11 và một frontend React/Vite strict TypeScript; bổ sung lệnh build/start/check local có version xác định.
- Cung cấp health endpoint và OpenAPI tối thiểu cho kiểm tra host; frontend có khung khởi tạo và xử lý kết nối thất bại phù hợp môi trường nội bộ.
- Kiểm chứng EF Core/Npgsql stable kết nối PostgreSQL local bằng integration test dùng context thử riêng; chưa tạo bảng hoặc migration nghiệp vụ.
- Chuẩn bị kiểm tra API, frontend và cấu hình; lưu actual results và hướng dẫn chạy, secrets ngoài Git. Mỗi task triển khai vẫn chưa được đánh dấu hoàn thành.

Phạm vi change tập trung nền kỹ thuật. Danh mục, Workforce & Assets, Scheduling & Dispatch, Execution & Safety và Analytics & Audit vẫn là các **Bounded Context** ứng viên; việc tạo module/layer nghiệp vụ, phân quyền người dùng, Excel importer và lịch điều trị đi vào các change kế tiếp sau review ownership. Không dùng context thử PostgreSQL làm module chung cho dữ liệu nghiệp vụ.

## Capabilities

### New Capabilities

- `local-runtime-foundation`: build/chạy host và SPA local, kiểm tra kết nối provider PostgreSQL, hợp đồng health/OpenAPI và bộ checks có bằng chứng thực tế.

### Modified Capabilities

Không có capability hiện hành cần đổi requirements; change quy trình P0 giữ nguyên scope và trạng thái riêng.

## Impact

- Dự kiến thêm `src/backend/Api`, `src/frontend`, `tests/backend`, cấu hình pin SDK/package và tài liệu chạy local; chưa có các file source này tại lúc soạn proposal.
- Backend vẫn một đơn vị triển khai. Domain/Application/Infrastructure của từng context chỉ được tạo khi ownership đã được review; API bootstrap không chứa model hoặc persistence nghiệp vụ.
- Dữ liệu và tài khoản thật của phòng khám, HIS API, optimizer, pilot/deploy và production migrations thuộc phạm vi sau. File local `Docs/ClinicFlow_Demo_v2.html` hiện chưa được Git theo dõi, được giữ nguyên và không nằm trong checkpoint đề xuất; chưa là baseline UI/role của change này.
- **Definition of Done**: build/start/check phù hợp chạy thật, PostgreSQL provider check đạt với database local được chỉ định, kết quả và hạn chế được ghi; host khởi động không được gọi là MVP hoàn thành.
- Trước apply cần planning hiện hành được commit trên `main` theo Git policy và quyết định review đúng scope. Hiện chỉ có quyền cho baseline commit cũ; không tự tạo commit/push mới.
