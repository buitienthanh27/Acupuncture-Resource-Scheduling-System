# ADR Review Index

| Thuộc tính | Giá trị |
| --- | --- |
| Change | establish-solo-development-process |
| Review result | Decisions Recorded |
| Ngày ghi nhận | 12/11/2026, Asia/Saigon |
| Phạm vi | Hợp đồng nhận diện artifact ADR của workflow OpenSpec |
| Tính chất | Ghi nhận nội dung thiết kế đang Proposed, không phải phê duyệt kiến trúc hoặc gate |

| ADR | Status | Quyết định |
| --- | --- | --- |
| [ADR-0001](adr/0001-explicit-adr-completion-index.md) | Proposed | Dùng output `adr-index.md` có tên xác định cho bước xem xét ADR |

Index được lập từ quyết định thực sự được phân tích trong design. Schema hiện tại vẫn nhận diện file ADR thật theo `adr/**/*.md`; việc chuyển `generates` sang index thuộc bước apply P0. Index này không tuyên bố schema đã được sửa hoặc mọi điều kiện thực thi đã đạt.
