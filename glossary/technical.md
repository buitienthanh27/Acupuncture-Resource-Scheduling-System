# Thuật ngữ kỹ thuật và quy trình

| Term | Definition | Use When | Avoid |
| --- | --- | --- | --- |
| Software Development Process (SDP) | Bộ chính sách, quy trình, biểu mẫu và bằng chứng quản lý vòng đời phát triển phần mềm của dự án. | Gọi tên quy trình tổng thể được điều chỉnh từ tài liệu nguồn. | Đồng nhất với chứng nhận tiêu chuẩn hoặc một công cụ quản lý task. |
| Quality Gate | Điểm ra quyết định chuyển bước dựa trên tiêu chí, phạm vi, phiên bản và bằng chứng kiểm tra. | Nói đến G1–G7 và điều kiện chuyển giai đoạn. | Coi sự tồn tại của file hoặc checkbox là bằng chứng phê duyệt. |
| Baseline | Phiên bản nội dung đã được xác nhận làm mốc kiểm soát thay đổi trong một phạm vi cụ thể. | Chốt yêu cầu, thiết kế hoặc quy trình đã được xác nhận. | Coi giả định hoặc bản nháp là nội dung đã được khách hàng chấp thuận. |
| Definition of Ready | Bộ điều kiện để một task hoặc change đủ rõ và đủ đầu vào trước khi phát triển. | Xét trạng thái Ready for Dev. | Yêu cầu hoàn tất thiết kế toàn bộ dự án trước mọi task. |
| Definition of Done | Bộ điều kiện hoàn thành phù hợp với loại công việc và phạm vi giao đã được thống nhất. | Đóng task, change hoặc release theo mức tương ứng. | Coi code chạy local hoặc archive là đã triển khai Production. |
| Traceability | Chuỗi liên kết từ nguồn yêu cầu qua đặc tả, task, mã nguồn, kiểm thử đến kết quả giao. | Kiểm tra một yêu cầu đã được thực hiện và xác minh thế nào. | Dùng tên file chung mà không có mã hoặc vị trí tham chiếu. |
| Exception | Quyết định cho phép lệch một quy tắc cụ thể với lý do, đánh giá rủi ro, chủ sở hữu, phạm vi và hạn xử lý. | Ghi nhận một kiểm soát chưa đáp ứng theo quyết định có thẩm quyền. | Dùng ghi chú chung để bỏ qua mọi kiểm tra hoặc giả trạng thái Passed. |
| Bounded Context | Ranh giới trong đó một mô hình và ngôn ngữ nghiệp vụ có ý nghĩa nhất quán và quyền sở hữu rõ ràng. | Xác định module của modular monolith từ nghiệp vụ. | Đồng nhất với một bảng, màn hình, epic hoặc microservice. |
| Self-review | Lượt kiểm tra riêng đối chiếu diff và hành vi với yêu cầu sau khi thực hiện thay đổi. | Chủ dự án rà soát code hoặc tài liệu của chính mình. | Gọi là review độc lập hoặc xem kết quả AI review là phê duyệt của người khác. |
| Release Candidate | Bộ artifact được định danh cố định và đã được kiểm tra để xem xét phát hành. | Chốt đầu vào của G6 và deployment. | Build lại từ mã nguồn khác rồi coi là cùng phiên bản đã kiểm thử. |
| UAT | Việc người có thẩm quyền nghiệp vụ đối chiếu sản phẩm với tiêu chí nghiệm thu đã thống nhất. | Xác nhận nghiệp vụ trước phát hành hoặc bàn giao theo phạm vi. | Coi QA pass hoặc chủ dự án tự chạy thử là khách hàng đã nghiệm thu. |
| Rollback | Phương án đưa hệ thống về trạng thái hoạt động chấp nhận được khi triển khai có sự cố. | Lập kế hoạch khôi phục ứng dụng và dữ liệu cho release. | Giả định hạ phiên bản ứng dụng tự khôi phục được database đã thay đổi. |
