# Mẫu hồ sơ quy trình solo

ID `SDP-TEMPLATES`, phiên bản 1.0 pilot local. Owner: chủ dự án. Nguồn kiểm soát: [handbook](handbook.md). Các mục bên dưới là mẫu chưa thực hiện, không phải bằng chứng đã kiểm tra hoặc phê duyệt. Chỉ sao chép phần áp dụng vào [records](records.md), gắn ID và nguồn thật. Phần chưa biết ghi Unknown/Pending; N/A phải có lý do.

## Trường chung của mọi record

`Record ID; loại; scope/change/release; người chuẩn bị; version/revision/hash; nguồn tài liệu/quyết định; ngày ghi nhận và timezone; trạng thái; nội dung; evidence links; owner hành động tiếp; lịch sử thay đổi.`

Ngày ghi nhận không tự là ngày quyết định. Không điền sẵn tên người phê duyệt, quyết định Approved, actual result Passed hoặc thời gian thực hiện chưa có thật.

## T01 — Charter, scope và estimate

- ID dự án và yêu cầu đầu vào; người yêu cầu/khách hàng thực tế.
- Mục tiêu, kết quả đo được, phạm vi trong/ngoài, tiêu chí thành công.
- Năng lực và thời gian thực có của người triển khai, phụ thuộc và công cụ.
- Khoảng ước lượng, đơn vị, căn cứ, giả định, độ bất định, chi phí nếu có.
- Rủi ro ban đầu, câu hỏi chưa rõ và owner; liên kết quyết định G1 khi có.

## T02 — Requirement, business rule, NFR và baseline

| Trường | Nội dung cần điền |
| --- | --- |
| ID / loại | REQ, BR hoặc NFR ổn định |
| Source | File/version và mục/trang hoặc sheet/dòng cụ thể |
| Nội dung | Actor, điều kiện trước/sau, hành vi, quy tắc và ngoại lệ |
| AC | Ví dụ Given/When/Then hoặc kết quả quan sát được |
| Ownership | Thuật ngữ và **Bounded Context** đã có căn cứ, hoặc Candidate/Unknown |
| Ưu tiên / dependency | Lý do MVP hoặc ngoài MVP, đầu vào cần có |
| Xác nhận | Proposed/Confirmed/Unknown; ai xác nhận, nguồn và phạm vi |
| Baseline | Version, danh sách ID/AC, quyết định và câu hỏi còn mở |

Không coi bản diễn giải hoặc giả định là yêu cầu khách hàng đã xác nhận. Khi hai nguồn khác nhau, giữ cả hai tham chiếu và lập câu hỏi thay vì chọn ngầm.

## T03 — Traceability

`Source reference -> REQ/BR/NFR ID -> AC ID -> context -> change/task -> revision/diff -> test/evidence -> defect -> release/handover.`

Một dòng có trạng thái cho từng liên kết: có bằng chứng, Pending hoặc N/A có lý do. Requirement chỉ mới đặc tả thì release vẫn Pending, không tạo record giả để đủ cột.

## T04 — Change request

`CR ID; requester; scope và baseline hiện tại; lý do; before/after; REQ/AC liên quan; lựa chọn; impact scope/chi phí/lịch trình/kiến trúc/data/security/tests/release; gate phải xem lại; owner; quyết định và nguồn; baseline mới nếu được chốt.`

## T05 — Design review và ADR review

`Scope/version; context map và ownership; invariant/aggregate/transaction; project references; persistence/migration; HTTP contract/UI; data flow/quyền/threats theo rủi ro; alternatives; findings; xử lý/recheck; ADR index; người quyết định và nguồn nếu có.`

ADR review dùng `Not Applicable` kèm lý do hoặc `Decisions Recorded` kèm ADR thật và status. Review index/CLI done không tự là quyết định Accepted hay gate Approved.

## T06 — Gate decision

| Trường bắt buộc | Nội dung |
| --- | --- |
| Record/Gate ID | Mã record và G1–G7 đúng phạm vi |
| Scope | Project/change/release và tiêu chí áp dụng |
| Bản xem xét | Version/revision/hash của chính tài liệu/artifact đã xem |
| Kết quả thực tế | Từng tiêu chí và actual result, kể cả Failed/Not Run |
| Evidence | Link output/record/tin nhắn thật |
| Quyết định | Not Started/In Review/Approved/Rejected/On Hold/Approved with Exception/Superseded |
| Người quyết định | Chủ dự án hoặc đúng người phía khách hàng; không tự ký thay |
| Thời điểm | Thời điểm quyết định nếu biết; thời điểm ghi hồ sơ riêng, timezone |
| Ngoại lệ | Exception IDs và phần tiêu chí phụ thuộc; expiry/review trigger |
| Thay đổi bản | Scope/version bị ảnh hưởng và yêu cầu xem lại, giữ quyết định cũ |

## T07 — Risk và exception

Risk: `ID; mô tả; khả năng/tác động; trigger; owner; biện pháp; trạng thái; lịch xem lại.`

**Exception**: thêm `quy tắc bị lệch; scope/version; lý do; lựa chọn thay thế; rủi ro còn lại; kiểm soát bù; người chấp nhận và thẩm quyền; nguồn quyết định; hạn khắc phục/xem lại; corrective task; điều kiện đóng.`

Ngoại lệ hết hạn hoặc khác release không dùng lại tự động. Không đổi actual Failed/Not Run thành Passed; không cấp quyền bỏ nghĩa vụ với khách hàng bằng hồ sơ nội bộ.

## T08 — Task, test plan và execution result

Task: `ID; loại; mục đích; scope; owner; ưu tiên; AC; source/change; dependency; trạng thái; rủi ro; cách kiểm tra; links diff/test/defect/release nếu áp dụng.`

Test plan: `AC/NFR; phạm vi; mức rủi ro; functional/unit/integration/regression/architecture/performance/security/UI phù hợp; môi trường/dữ liệu; tiêu chí đạt; trường hợp N/A và lý do.`

Execution: `Test/AC/task ID; revision/artifact; lệnh hoặc bước thực hiện; tool/env versions; expected result; actual result; exit code/status; output/evidence đã redaction; người thực hiện; thời điểm; findings và retest.`

Tests chưa chạy ghi Not Run với lý do/tác động. Không tạo log hoặc số coverage để chứng minh việc chưa thực hiện.

## T09 — Self-review và defect

**Self-review**: `scope/revision; lượt review tách khỏi viết; diff và AC đã đối chiếu; findings; severity/tác động; task xử lý; recheck; giới hạn độc lập.`

Defect: `ID; requirement/AC; steps reproduce; env/revision; expected/actual; severity; priority; owner; trạng thái; fix revision; retest result/evidence; quyết định rủi ro nếu còn mở.`

Severity là tác động, priority là thứ tự xử lý. Bản sửa tồn tại nhưng chưa retest không được ghi đã xác nhận sửa thành công.

## T10 — Internal acceptance và UAT

`Scope/AC/version; loại internal acceptance hoặc UAT khách hàng; người kiểm tra/xác nhận và thẩm quyền; test cases; actual results; lỗi còn lại; quyết định/nguồn; thời điểm; phần chờ xác nhận.`

**UAT** khách hàng chỉ có khi đúng người xác nhận. Tự kiểm tra vẫn ghi internal acceptance, không ký thay.

## T11 — Release, deployment, rollback và handover

- Release ID/version, included/excluded changes, **Release Candidate** hash/revision/artifact và test evidence cùng bản.
- G6 decision/source; QA/UAT phù hợp; blocker/critical và risk/exception còn lại; release notes.
- Environment, quyền triển khai đã có, owner/cửa sổ triển khai, config/migration versions, preflight và steps.
- Backup/restore evidence hoặc forward recovery phù hợp; **Rollback** trigger, steps, owner và cách xác nhận ứng dụng/dữ liệu phục hồi.
- Actual deployment time/output, smoke test/health/log/alert và monitoring sau deploy.
- G7/handover scope, docs/support, giới hạn/vấn đề mở, ai tiếp nhận và nguồn xác nhận.

Artifact đổi sau G6 phải review impact/recheck; local ghi local. Hạ version ứng dụng không mặc nhiên khôi phục được dữ liệu. Archive giữ trạng thái riêng với deployment và bàn giao.

## T12 — Incident, audit và cải tiến

Incident: `ID; scope/env/version; mức ảnh hưởng; owner; phát hiện/escalation/timeline; hành động phục hồi; kết quả xác minh; thông báo phù hợp; review nguyên nhân khi nghiêm trọng/lặp lại; corrective tasks và retest.`

Audit: `mẫu change/release; nguồn -> AC -> task -> revision -> evidence -> quyết định/kết quả; findings; owner/ưu tiên/corrective task; review lại; kết luận giữ/sửa quy trình; version/changelog.`

Đóng incident không tự đóng corrective task. Tài liệu quy trình mới giữ lịch sử phiên bản và nguồn quyết định thay đổi.

## T13 — KPI

`Tên; định nghĩa và đơn vị; tử số/mẫu số nếu là tỷ lệ; nguồn record; phạm vi release/kỳ quan sát; số mẫu; giá trị hoặc N/A; thiếu dữ liệu; lịch xem; hành động cải tiến.`

Dùng tám định nghĩa tại [handbook](handbook.md). Chưa có Production hoặc mẫu số 0 thì N/A, chưa có baseline thì chưa có target được giả lập. Cycle time local không đổi tên thành lead time đến Production.
