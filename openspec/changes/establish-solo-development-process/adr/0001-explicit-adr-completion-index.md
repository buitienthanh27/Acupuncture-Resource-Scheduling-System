# ADR-0001: Dùng index xác định để ghi nhận kết quả xem xét ADR

## Status

Proposed — quyết định thiết kế công cụ, chưa ghi Accepted thay người dùng. Style: MADR minimal theo preferences hiện có.

## Context and Problem Statement

Schema `intent-driven` hiện dùng `adr/**/*.md` để nhận diện artifact ADR, đồng thời hướng dẫn không tạo ADR cho thay đổi không có quyết định kiến trúc đáng kể. Tasks phụ thuộc vào ADR, vì vậy trường hợp ADR rỗng không được mở khóa; một Markdown phụ trong thư mục lại có thể làm CLI báo artifact hoàn thành.

Cần một hợp đồng hoàn thành trung thực, dùng được với CLI hiện tại, phân biệt việc đã xem xét cần ADR hay không với việc đã phê duyệt quyết định kiến trúc hoặc **Quality Gate**. Thay đổi này ảnh hưởng cấu trúc workflow của các change về sau, nên được ghi thành ADR thật thay vì một ví dụ giả để mở khóa tasks.

## Considered Options

- Bỏ dependency ADR khỏi tasks và tiếp tục xem xét ADR bằng hướng dẫn thủ công: ít thay đổi schema, nhưng không còn artifact thể hiện đã xem xét nhu cầu ADR trước lập tasks.
- Giữ glob và thêm `adr/README.md` ghi không áp dụng: dễ chuyển đổi, nhưng mọi Markdown phụ vẫn có thể làm artifact được nhận diện hoàn thành và ý nghĩa output không rõ.
- Dùng artifact `adr-index.md` có tên xác định, liên kết đến ADR thật hoặc ghi không áp dụng với lý do: cần thêm template/index nhưng giữ được bước xem xét và tránh glob bắt nhầm file phụ.
- Thay đổi parser OpenSpec để hỗ trợ điều kiện tùy chọn theo nội dung: có khả năng cưỡng chế mạnh hơn, nhưng tạo phụ thuộc vào fork hoặc thay đổi upstream ngoài phạm vi P0.

## Decision Outcome

Đề xuất chọn `adr-index.md` làm `generates` của artifact ID `adr`; giữ dependency từ design và đến tasks. Index dùng `Not Applicable` với lý do hoặc `Decisions Recorded` kèm danh sách ADR thật và status. File index không phải một ADR kiến trúc giả; các quyết định đáng kể tiếp tục đặt dưới `adr/NNNN-*.md`.

CLI vẫn chỉ nhận diện file nên cần kiểm tra nội dung index và liên kết. Không gọi index tồn tại là một phê duyệt, không biến ADR Proposed thành Accepted và không thay đổi bằng chứng quyết định cũ. Trước khi đổi schema, bổ sung index trung thực cho các change hiện hành rồi kiểm tra trạng thái theo output mới.

### Consequences

- Good, because change không có quyết định kiến trúc đáng kể vẫn có kết luận review rõ mà không phải bịa ADR.
- Good, because tài liệu glossary/README trong thư mục ADR không thay thế được output có tên xác định.
- Bad, because mỗi change cần thêm một file tổng kết và phải kiểm tra nội dung; CLI đơn thuần chưa cưỡng chế được tính đúng của kết luận.
- Bad, because các change hiện hành cần migration trước khi đổi schema để không mất trạng thái hoàn thành.
- Follow-up: tasks 3.1–3.4 chuẩn bị template, index, schema và fixtures; chỉ chuyển status ADR theo quyết định thực tế sau khi được xem xét.
