# ADR Review Index

| Field | Value |
| --- | --- |
| Change | establish-clinicflow-local-foundation |
| Review result | Not Applicable |
| Reason | Change chỉ hiện thực baseline ASP.NET Core/React/Vite/PostgreSQL, stable ORM pairing và quy tắc chưa tạo module khi context chưa được review đã có trong config/AGENTS. API bootstrap, health/CORS Development và context kết nối chỉ trong tests là chi tiết local của phạm vi này; không chọn thư viện ngoài baseline, ownership mới, production persistence/migration hoặc giao thức identity. Chưa có quyết định kiến trúc mới vượt ngưỡng cần ADR. |
| Recorded on | 12/11/2026, Asia/Saigon; ngày ghi review, không suy ra thời điểm phê duyệt |

Đã xem [design](design.md), [proposal](proposal.md) và baseline trong [config](../../config.yaml). Tạo zero ADR; index ghi hoàn thành lượt xem xét, không xác nhận design/gate đã được chủ dự án chấp thuận. Nếu implementation cần thay đổi dependency, ownership hoặc security/persistence vượt scope, phải review lại impact và ADR trước thực hiện phần đó.
