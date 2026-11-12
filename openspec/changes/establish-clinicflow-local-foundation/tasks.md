# Tasks foundation local

Trạng thái: Planned, 0 task implementation hoàn thành tại lúc soạn. Mỗi task nhắm dưới khoảng hai giờ; nếu phát hiện lớn hơn thì tách trước thực hiện, không dùng bảng này như cam kết tổng thời gian.

Dependency: preflight/toolchain -> contract nền/provider check độc lập -> API/DI -> frontend -> verification. Domain/Application/migrations nghiệp vụ không áp dụng vì chưa có use case/context mới; không tạo unit test hoặc layer giả để đánh dấu checklist. API bootstrap dùng integration tests; health client có unit/behavior tests riêng.

## 1. Preflight và toolchain dùng chung

- [ ] 1.1 Đối chiếu scope/review và Git preflight: planning đúng revision đã có trên main trước apply; lưu trạng thái hiện hành, giữ nguyên HTML demo và thay đổi ngoài scope; không tự commit/push. FND-06/07.
- [ ] 1.2 Kiểm kê SDK 11/Node/npm/PostgreSQL local, ghi thiếu/hạn chế và cách chuẩn bị trong workspace; không retarget hoặc đổi môi trường toàn máy ngầm. FND-01/05.
- [ ] 1.3 Recheck stable package compatibility và pin SDK/package/tool exact trong global.json/cấu hình backend, frontend lockfile; giữ EF >=10.0.4,<11 với Npgsql EF 10 stable nếu baseline chưa đổi. FND-01/04.
- [ ] 1.4 Tạo solution với một Api host net11.0 và project tests liên quan; chưa tạo module/domain/application production; kiểm tra restore/build cơ bản. FND-01/06.

## 2. Infrastructure integration check — chỉ trong tests

- [ ] 2.1 Tạo persistence test project và test-only ProviderProbeDbContext không entity/migration; thêm provider packages đã pin, không đăng ký vào API. FND-04/06.
- [ ] 2.2 Chuẩn bị hoặc chọn PostgreSQL loopback/database phát triển được chỉ định cho check; credentials ngoài Git, ghi hướng dẫn setup phù hợp môi trường thực tế; không sửa database khác. FND-04/05.
- [ ] 2.3 Thêm check CanConnectAsync có cancellation và cách báo thiếu cấu hình/kết nối lỗi đã loại secrets; không EnsureCreated/EnsureDeleted/migrate/seed. FND-04/05.
- [ ] 2.4 Chạy check với PostgreSQL thật, đối chiếu đường thiếu/sai cấu hình và output an toàn; ghi actual result, giữ task chưa Done nếu chưa kết nối thật. FND-04-S1/S2, FND-05-S2.

## 3. API contracts, host và DI

- [ ] 3.1 Tạo AddFoundationApi/MapFoundationEndpoints và Program.cs composition root, JSON health contract và OpenAPI chỉ Development; không truy cập DbContext hoặc chứa nghiệp vụ. FND-02/06.
- [ ] 3.2 Cấu hình loopback/origin SPA cụ thể, launch settings và placeholder công khai; không allow-all/credentials hoặc implicit global machine changes. FND-01/05/08.
- [ ] 3.3 Viết và chạy xUnit/WebApplicationFactory tests cho health JSON, OpenAPI theo environment và CORS origin đúng/sai; kiểm tra API không tham chiếu provider test context. FND-02-S1/S2, FND-06-S1, FND-08-S1/S2.

## 4. Frontend React/Vite strict TypeScript

- [ ] 4.1 Tạo frontend với strict TypeScript, pin package/lockfile và scripts typecheck/lint/test/build; nhận public API URL, không thêm thư viện UI/state chưa cần. FND-01/03/05.
- [ ] 4.2 Tạo health client có timeout/cancellation và app shell hiển thị trạng thái kết nối/thử lại; thông báo lỗi dễ hiểu, không secrets hoặc dữ liệu demo y tế. FND-03.
- [ ] 4.3 Viết và chạy unit tests cho health client thành công/lỗi/timeout/cancellation và React Testing Library behavior test mất kết nối -> thử lại -> kết nối; không gọi là tests nghiệp vụ hoàn chỉnh. FND-03-S1/S2.
- [ ] 4.4 Kiểm tra browser local với API thật và CORS, đối chiếu hiển thị/keyboard retry; chạy typecheck/lint/tests/build và review bundle/cấu hình public. FND-01/03/05/08.

## 5. Hướng dẫn và checks tái lập

- [ ] 5.1 Ghi lệnh restore/build/start/check từ root và file cấu hình mẫu có placeholder, thứ tự chuẩn bị database/SDK; nêu PostgreSQL connectivity khác host liveness và auth/nghiệp vụ còn ở change sau. FND-01/02/04/05.
- [ ] 5.2 Thêm entry point chạy checks phù hợp PowerShell/local toolchain, phân biệt API/frontend/provider; database thiếu phải thể hiện Failed/Not Run và không tạo tổng kết Passed giả. FND-07.
- [ ] 5.3 Chạy backend build/test/format và frontend install từ lockfile/typecheck/lint/test/build cùng PostgreSQL check; lưu lệnh/version/revision/actual và phần chưa chạy đã loại secrets. FND-01/04/05/07.

## 6. Review và verification local

- [ ] 6.1 Self-review diff so với FND-01–08/15 scenarios, dependency/DI/bundle/log và file người dùng giữ nguyên; xử lý finding, không thay kết quả Failed bằng Passed. FND-05/06/07.
- [ ] 6.2 Verify change theo implementation và evidence thật, đối chiếu mọi task/AC, ghi known issues và **Definition of Done** foundation; không coi đủ artifact là đủ runtime. FND-07.
- [ ] 6.3 Cập nhật records và đầu vào change tiếp theo từ actual; tiếp tục phần độc lập đã có quyền, giữ riêng quyền commit implementation/archive/push/deploy. FND-07 và Git policy.
