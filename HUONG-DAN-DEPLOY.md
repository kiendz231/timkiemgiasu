# 🚀 HƯỚNG DẪN ĐĂNG TRANG WEB LÊN GITHUB PAGES

## ✅ Trang web đã sẵn sàng!

Trang web "Tìm Gia Sư Online" của bạn đã được tạo thành công với:
- ✨ Giao diện hiện đại, đẹp mắt
- 📱 Responsive trên mọi thiết bị
- 🔍 Tìm kiếm và lọc gia sư thông minh
- 💬 Hệ thống liên hệ trực tiếp

## 📋 CÁC BƯỚC ĐĂNG LÊN GITHUB PAGES

### Bước 1: Cài đặt Git (Nếu chưa có)

1. Tải Git từ: https://git-scm.com/download/win
2. Cài đặt với các tùy chọn mặc định
3. Khởi động lại Command Prompt/PowerShell

### Bước 2: Tạo tài khoản GitHub (Nếu chưa có)

1. Truy cập: https://github.com
2. Click "Sign up" và tạo tài khoản miễn phí
3. Xác nhận email

### Bước 3: Tạo Repository mới

1. Đăng nhập GitHub
2. Click nút **"+"** góc trên bên phải → **"New repository"**
3. Điền thông tin:
   - **Repository name**: `gia-su-online` (hoặc tên bạn muốn)
   - **Description**: "Nền tảng tìm kiếm gia sư online"
   - Chọn **Public** ✅
   - **KHÔNG** tick "Initialize with README"
4. Click **"Create repository"**

### Bước 4: Upload code lên GitHub

Mở **PowerShell** hoặc **Command Prompt** trong thư mục dự án và chạy:

```bash
# Di chuyển vào thư mục dự án (nếu chưa ở đó)
cd C:\Users\bourbon\.gemini\antigravity\scratch\gia-su

# Khởi tạo Git repository
git init

# Thêm tất cả files
git add .

# Commit với message
git commit -m "Initial commit - Trang web tìm gia sư online"

# Kết nối với GitHub repository (THAY YOUR_USERNAME bằng tên GitHub của bạn)
git remote add origin https://github.com/YOUR_USERNAME/gia-su-online.git

# Đổi tên branch thành main
git branch -M main

# Push code lên GitHub
git push -u origin main
```

**Lưu ý:** Khi push lần đầu, GitHub sẽ yêu cầu đăng nhập:
- Username: tên GitHub của bạn
- Password: sử dụng **Personal Access Token** (không phải mật khẩu)

#### Tạo Personal Access Token:
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Đặt tên: "Git Push Token"
4. Chọn scope: **repo** (tick tất cả)
5. Click "Generate token"
6. **Copy token** (chỉ hiện 1 lần, lưu lại!)
7. Dùng token này làm password khi git push

### Bước 5: Kích hoạt GitHub Pages

1. Vào repository trên GitHub
2. Click tab **"Settings"** (⚙️)
3. Scroll xuống menu bên trái, click **"Pages"**
4. Trong phần **"Build and deployment"**:
   - **Source**: Deploy from a branch
   - **Branch**: chọn `main` và `/ (root)`
   - Click **"Save"**

### Bước 6: Truy cập website 🎉

Sau 2-3 phút, website sẽ được deploy tại:

```
https://YOUR_USERNAME.github.io/gia-su-online/
```

Ví dụ: nếu username GitHub là `bourbon123`, link sẽ là:
```
https://bourbon123.github.io/gia-su-online/
```

## 🔄 CẬP NHẬT WEBSITE

Sau khi chỉnh sửa code, chạy các lệnh sau để cập nhật:

```bash
git add .
git commit -m "Mô tả thay đổi của bạn"
git push
```

Website sẽ tự động cập nhật sau vài phút!

## 🌐 SỬ DỤNG TÊN MIỀN RIÊNG (Tùy chọn)

Nếu muốn dùng tên miền riêng (ví dụ: www.giasuonline.com):

### 1. Mua tên miền
- Namecheap: https://www.namecheap.com
- GoDaddy: https://www.godaddy.com
- Tên Miền Việt: https://tenmien.vn

### 2. Tạo file CNAME
Tạo file `CNAME` (không có đuôi) trong thư mục gốc với nội dung:
```
www.giasuonline.com
```

### 3. Cấu hình DNS
Trong trang quản lý DNS của nhà cung cấp tên miền:

**Cách 1: Dùng A Records**
```
Type: A
Host: @
Value: 185.199.108.153
TTL: Automatic

Type: A
Host: @
Value: 185.199.109.153

Type: A
Host: @
Value: 185.199.110.153

Type: A
Host: @
Value: 185.199.111.153

Type: CNAME
Host: www
Value: YOUR_USERNAME.github.io
```

**Cách 2: Dùng CNAME (đơn giản hơn)**
```
Type: CNAME
Host: www
Value: YOUR_USERNAME.github.io
TTL: Automatic
```

### 4. Cập nhật GitHub Pages
1. Vào Settings → Pages
2. Trong phần "Custom domain", nhập: `www.giasuonline.com`
3. Click "Save"
4. Đợi DNS propagate (15 phút - 48 giờ)
5. Tick "Enforce HTTPS" khi có thể

## 🎨 TÙY CHỈNH WEBSITE

### Thay đổi màu sắc
Mở `styles.css`, tìm phần `:root` và thay đổi:

```css
:root {
    --primary: #6366f1;      /* Màu chính */
    --secondary: #ec4899;    /* Màu phụ */
    --accent: #f59e0b;       /* Màu nhấn */
}
```

### Thêm/Sửa gia sư
Mở `script.js`, tìm mảng `tutorsData` và thêm:

```javascript
{
    id: 9,
    name: "Tên gia sư mới",
    avatar: "TGS",
    subjects: ["Toán", "Lý"],
    level: "THPT",
    location: "Hà Nội",
    price: 200000,
    rating: 4.8,
    reviews: 30,
    experience: "5 năm",
    education: "ĐH Bách Khoa",
    description: "Mô tả...",
    phone: "0123456789",
    email: "email@example.com"
}
```

### Thay đổi nội dung
Mở `index.html` và chỉnh sửa text trực tiếp.

## 🐛 XỬ LÝ LỖI THƯỜNG GẶP

### Lỗi: "git is not recognized"
→ Cài đặt Git từ https://git-scm.com/download/win

### Lỗi: "Permission denied"
→ Sử dụng Personal Access Token thay vì password

### Website không hiển thị sau khi deploy
→ Đợi 5-10 phút, xóa cache trình duyệt (Ctrl + Shift + R)

### Lỗi 404 Not Found
→ Kiểm tra Settings → Pages đã chọn đúng branch `main` chưa

### CSS/JS không load
→ Kiểm tra đường dẫn file trong `index.html` (phải là relative path)

## 📚 TÀI LIỆU THAM KHẢO

- GitHub Pages: https://pages.github.com/
- Git Documentation: https://git-scm.com/doc
- GitHub Docs: https://docs.github.com/

## 💡 MẸO HAY

1. **Kiểm tra local trước khi push**: Mở `index.html` bằng trình duyệt để test
2. **Commit thường xuyên**: Mỗi thay đổi nhỏ nên commit riêng
3. **Viết commit message rõ ràng**: "Thêm tính năng X" thay vì "Update"
4. **Backup code**: GitHub chính là backup tuyệt vời!
5. **Sử dụng branch**: Tạo branch mới cho tính năng lớn

## 🎯 NÂNG CẤP TRONG TƯƠNG LAI

- [ ] Tích hợp Firebase cho database thực
- [ ] Thêm hệ thống đăng nhập/đăng ký
- [ ] Chat trực tiếp giữa học viên và gia sư
- [ ] Thanh toán online
- [ ] Đánh giá và review chi tiết
- [ ] Lịch học tương tác
- [ ] Thông báo email tự động

## 📞 HỖ TRỢ

Nếu gặp vấn đề, bạn có thể:
1. Xem lại hướng dẫn này
2. Tìm kiếm trên Google với từ khóa cụ thể
3. Hỏi trên Stack Overflow
4. Xem GitHub Pages documentation

---

**Chúc bạn thành công! 🚀**

Website của bạn sẽ hoàn toàn MIỄN PHÍ với GitHub Pages!
