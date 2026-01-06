# 📚 Tìm Gia Sư Online

Nền tảng kết nối gia sư và học viên uy tín, hiện đại và dễ sử dụng.

## ✨ Tính năng

- 🔍 **Tìm kiếm thông minh**: Lọc gia sư theo môn học, cấp học, khu vực, giá cả
- 👨‍🏫 **Hồ sơ chi tiết**: Xem thông tin đầy đủ về gia sư, đánh giá, kinh nghiệm
- 💬 **Liên hệ trực tiếp**: Kết nối nhanh chóng với gia sư qua email và điện thoại
- 📱 **Responsive**: Hoạt động mượt mà trên mọi thiết bị
- 🎨 **Thiết kế hiện đại**: Giao diện đẹp mắt với animations và hiệu ứng cao cấp

## 🚀 Cách đăng lên GitHub Pages (MIỄN PHÍ)

### Bước 1: Tạo Repository trên GitHub

1. Đăng nhập vào [GitHub](https://github.com)
2. Click nút **"New"** để tạo repository mới
3. Đặt tên repository (ví dụ: `gia-su-online`)
4. Chọn **Public** (bắt buộc để dùng GitHub Pages miễn phí)
5. Click **"Create repository"**

### Bước 2: Upload code lên GitHub

Mở Terminal/Command Prompt trong thư mục dự án và chạy các lệnh sau:

```bash
# Khởi tạo Git
git init

# Thêm tất cả files
git add .

# Commit
git commit -m "Initial commit - Gia sư online website"

# Thêm remote repository (thay YOUR_USERNAME và YOUR_REPO)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push code lên GitHub
git branch -M main
git push -u origin main
```

### Bước 3: Kích hoạt GitHub Pages

1. Vào repository trên GitHub
2. Click tab **"Settings"**
3. Scroll xuống phần **"Pages"** (ở menu bên trái)
4. Trong phần **"Source"**, chọn:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **"Save"**

### Bước 4: Truy cập website

Sau vài phút, website sẽ được deploy tại:
```
https://YOUR_USERNAME.github.io/YOUR_REPO/
```

## 🎯 Sử dụng tên miền riêng (Tùy chọn)

Nếu bạn muốn dùng tên miền riêng (ví dụ: giasuonline.com):

1. Mua tên miền từ các nhà cung cấp (Namecheap, GoDaddy, etc.)
2. Tạo file `CNAME` trong thư mục gốc với nội dung là tên miền của bạn
3. Cấu hình DNS records:
   - Thêm A record trỏ đến IP của GitHub:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Hoặc thêm CNAME record trỏ đến `YOUR_USERNAME.github.io`

## 📁 Cấu trúc dự án

```
gia-su/
├── index.html      # Trang chủ
├── styles.css      # CSS styling
├── script.js       # JavaScript logic
└── README.md       # Hướng dẫn
```

## 🛠️ Công nghệ sử dụng

- **HTML5**: Cấu trúc semantic
- **CSS3**: Styling hiện đại với gradients, animations
- **JavaScript**: Tương tác động, filtering, search
- **Google Fonts**: Typography cao cấp

## 🎨 Tính năng nổi bật

### Thiết kế
- Gradient backgrounds
- Smooth animations
- Floating cards
- Glassmorphism effects
- Responsive grid layouts

### Chức năng
- Real-time search
- Advanced filtering
- Modal popups
- Smooth scrolling
- Mobile-friendly navigation

## 📝 Tùy chỉnh

### Thay đổi màu sắc
Chỉnh sửa CSS variables trong `styles.css`:

```css
:root {
    --primary: #6366f1;
    --secondary: #ec4899;
    --accent: #f59e0b;
    /* ... */
}
```

### Thêm gia sư mới
Chỉnh sửa mảng `tutorsData` trong `script.js`:

```javascript
const tutorsData = [
    {
        id: 1,
        name: "Tên gia sư",
        subjects: ["Toán", "Vật Lý"],
        // ... thông tin khác
    }
];
```

## 🔄 Cập nhật website

Sau khi chỉnh sửa code, chạy lệnh:

```bash
git add .
git commit -m "Mô tả thay đổi"
git push
```

Website sẽ tự động cập nhật sau vài phút.

## 💡 Mở rộng trong tương lai

- [ ] Tích hợp backend (Firebase, Supabase)
- [ ] Hệ thống đăng nhập/đăng ký thực
- [ ] Thanh toán online
- [ ] Chat trực tiếp
- [ ] Đánh giá và review
- [ ] Lịch học tương tác
- [ ] Thông báo real-time

## 📞 Hỗ trợ

Nếu gặp vấn đề, vui lòng:
1. Kiểm tra [GitHub Pages Documentation](https://docs.github.com/en/pages)
2. Xem [Issues](https://github.com/YOUR_USERNAME/YOUR_REPO/issues)

## 📄 License

MIT License - Tự do sử dụng cho mục đích cá nhân và thương mại.

---

**Chúc bạn thành công! 🎉**

Nếu thấy hữu ích, hãy cho dự án một ⭐ trên GitHub!
