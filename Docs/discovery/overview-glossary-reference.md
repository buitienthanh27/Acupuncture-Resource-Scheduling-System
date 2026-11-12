# Glossary Reference

| Term | Source Glossary | Context |
| --- | --- | --- |
| Lượt đến (Visit) | `glossary/business.md` | Phân biệt tiếp nhận với phiên điều trị. |
| Lượt điều trị (TreatmentSession) | `glossary/business.md` | Đối tượng điều phối và thực hiện. |
| Y lệnh tham chiếu (ClinicalOrderRef) | `glossary/business.md` | Ranh giới chỉ định bên ngoài; MVP ghi nhận bằng nhập tay/Excel, không tự ra chỉ định. |
| Thủ thuật (Procedure) | `glossary/business.md` | Danh mục động. |
| Phiên bản thủ thuật (ProcedureVersion) | `glossary/business.md` | Cấu hình có hiệu lực và lịch sử; thay đổi không ghi đè lịch đã duyệt/actual. |
| Công đoạn (ProcedureStep) | `glossary/business.md` | D03 chốt cấu hình linh hoạt chuẩn bị/kết thúc/vệ sinh; giá trị thực tế còn chờ xác nhận. |
| Giám sát (Monitor Duty) | `glossary/business.md` | D02 cho phép công việc khác xen kẽ nhưng vẫn theo dõi, với giới hạn đồng thời cấu hình được; trị số/nhịp kiểm tra còn mở. |
| Kết thúc thủ thuật (Closeout) | `glossary/business.md` | Công đoạn cấu hình được; xác nhận thực tế và giải phóng từng tài nguyên là điều kiện riêng. |
| Thời gian đệm (Buffer) | `glossary/business.md` | D05 chốt cấu hình thời lượng/phạm vi tài nguyên, tách đệm giữa thủ thuật và giữa bệnh nhân. |
| Team Lead | `glossary/business.md` | Quyền lập/duyệt lịch tách quyền chuyên môn, cho phép kiêm nhiệm; quyết định chờ theo D09. |
| Medical Lead | `glossary/business.md` | Quyền xác nhận cấu hình chuyên môn, không tự có quyền duyệt lịch; có thể kiêm nhiệm. |
| Nhân viên cũ (Previous Staff) | `glossary/business.md` | D01/D09 đã chốt: primary phiên COMPLETED gần nhất chỉ là gợi ý, không tự giữ lượt. |
| Bounded Context | `glossary/technical.md` | Module nghiệp vụ ứng viên trong một backend. |
