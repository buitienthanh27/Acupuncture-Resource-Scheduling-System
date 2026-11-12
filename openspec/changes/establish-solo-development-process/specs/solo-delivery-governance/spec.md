# Quyền quyết định và bằng chứng cho quy trình solo

## ADDED Requirements

### Requirement: GOV-01 Phê duyệt thuộc đúng người và phạm vi

Quy trình SHALL để chủ dự án quyết định các **Quality Gate** nội bộ và chỉ ghi nhận chấp thuận của khách hàng khi có bằng chứng từ đúng người phía khách hàng. Codex MUST phân biệt việc ghi lại quyết định đã có với việc tự tạo quyết định mới.

#### Scenario: Ghi nhận quyết định thật của chủ dự án
- **GIVEN** chủ dự án đã xác nhận proposal v0.1 trong cuộc trao đổi
- **WHEN** Codex lập hồ sơ quyết định cho phiên bản đó
- **THEN** hồ sơ ghi người quyết định là chủ dự án, nguồn thông điệp và đúng phạm vi đã chốt
- **AND** các gate nghiệm thu sản phẩm chưa có bằng chứng vẫn chưa được phê duyệt

#### Scenario: AI thông báo kiểm tra thành công
- **GIVEN** Codex đã chạy một kiểm tra kỹ thuật và có kết quả đạt
- **WHEN** xem xét trạng thái G6 của một release chưa được chủ dự án quyết định
- **THEN** kết quả kiểm tra được lưu làm bằng chứng và G6 vẫn chưa ở trạng thái Approved

### Requirement: GOV-02 Hồ sơ gate định danh được phiên bản

Mỗi hồ sơ gate SHALL có ID, gate, scope, version/revision hoặc hash, tiêu chí, kết quả thực tế, bằng chứng, người quyết định, quyết định và thời điểm kèm múi giờ. Quy trình MUST phân biệt thời điểm ghi hồ sơ với thời điểm ra quyết định nếu chỉ biết một trong hai.

#### Scenario: Thiếu định danh bản được duyệt
- **GIVEN** hồ sơ G3 có lời chấp thuận nhưng không xác định được bản thiết kế đã xem
- **WHEN** kiểm tra điều kiện chuyển bước
- **THEN** hồ sơ được đánh dấu thiếu bằng chứng và không chứng minh G3 đã đạt cho bản hiện tại

#### Scenario: Bản được duyệt thay đổi có tác động
- **GIVEN** G2 đã duyệt yêu cầu v1 và change request sửa một tiêu chí nghiệm thu
- **WHEN** đánh giá tác động của phiên bản v2
- **THEN** những quyết định và kiểm tra phụ thuộc tiêu chí đó được liệt kê để xem xét lại
- **AND** quyết định của v1 vẫn được giữ trong lịch sử

### Requirement: GOV-03 Ngoại lệ có giới hạn và không đổi kết quả thật

Một **Exception** SHALL chỉ áp dụng khi có quy tắc bị lệch, lý do, scope/version, rủi ro, kiểm soát bù, owner, người chấp nhận có thẩm quyền, hạn xem lại hoặc khắc phục và corrective task. Ngoại lệ MUST NOT biến kết quả Failed hoặc Not Run thành Passed.

#### Scenario: Ngoại lệ hợp lệ cho một phạm vi
- **GIVEN** một kiểm soát chưa đạt có đầy đủ hồ sơ ngoại lệ cho release R1
- **WHEN** chủ dự án quyết định cho R1 tiếp tục trong phạm vi thẩm quyền của mình
- **THEN** gate ghi Approved with Exception và liên kết hồ sơ ngoại lệ
- **AND** kết quả kiểm soát gốc vẫn ghi chưa đạt

#### Scenario: Ngoại lệ hết hạn hoặc thuộc release khác
- **GIVEN** ngoại lệ cho R1 đã hết hạn hoặc đang được dùng để xét R2
- **WHEN** kiểm tra điều kiện chuyển bước
- **THEN** ngoại lệ không chứng minh điều kiện tiếp tục cho phạm vi đang xét
- **AND** phần gate phụ thuộc ngoại lệ được đưa vào xem xét lại

### Requirement: GOV-04 Ready và Done phù hợp loại công việc

Quy trình SHALL định nghĩa **Definition of Ready** theo ID, mục đích, scope, AC, dependency, cách kiểm tra và rủi ro liên quan; **Definition of Done** SHALL phân biệt tài liệu, code, release và bàn giao. Bước không áp dụng MUST có lý do; hoàn thành tài liệu không tự chứng minh phát hành Production.

#### Scenario: Task thiếu đầu vào quan trọng
- **GIVEN** task triển khai chưa có AC hoặc còn dependency chưa giải quyết
- **WHEN** xét Ready for Dev
- **THEN** task chưa đủ sẵn sàng và đầu vào thiếu được chỉ rõ
- **AND** một task discovery độc lập đủ scope vẫn có thể tiếp tục

#### Scenario: Hoàn thành việc soạn tài liệu
- **GIVEN** task tài liệu đáp ứng tiêu chí review và liên kết nguồn
- **WHEN** đóng task theo DoD tài liệu
- **THEN** task có thể Done với lý do bước deployment không áp dụng
- **AND** không có bản ghi Production deployment được tạo từ việc đóng task đó

### Requirement: GOV-05 Hồ sơ dùng ít file và tái sử dụng quyết định còn hiệu lực

Quy trình SHALL giữ một nguồn chính cho mỗi thông tin và một chỉ mục đến policy, SOP, mẫu và record. Quyết định còn đúng scope/version SHALL được dùng lại trong công việc đã được giao, thay vì yêu cầu chủ dự án chấp thuận lại từng file.

#### Scenario: Bước local đã nằm trong phạm vi giao
- **GIVEN** chủ dự án đã giao hoàn thành một bộ planning artifacts local
- **WHEN** Codex tạo các tài liệu phụ thuộc trong cùng phạm vi đó
- **THEN** Codex dùng quyết định hiện có và ghi tiến độ mà không tạo thêm cổng phê duyệt cho mỗi file

#### Scenario: Hành động vượt phạm vi đã giao
- **GIVEN** phạm vi hiện tại chỉ bao gồm tài liệu local
- **WHEN** bước tiếp theo đòi push hoặc deploy
- **THEN** hành động đó được giữ ngoài phạm vi đang thực hiện và cần chỉ dẫn tương ứng của chủ dự án
