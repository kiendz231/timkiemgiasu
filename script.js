// Sample tutor data
const tutorsData = [
    {
        id: 1,
        name: "Nguyễn Văn An",
        avatar: "NVA",
        subjects: ["Toán", "Vật Lý"],
        level: "THPT",
        location: "Hà Nội",
        price: 200000,
        rating: 4.9,
        reviews: 45,
        experience: "5 năm kinh nghiệm",
        education: "Sinh viên năm 4 - ĐH Bách Khoa Hà Nội",
        description: "Chuyên gia giảng dạy Toán và Vật Lý THPT, có phương pháp giảng dạy hiệu quả, giúp học sinh nắm vững kiến thức và đạt điểm cao.",
        phone: "0123456789",
        email: "nguyenvanan@email.com"
    },
    {
        id: 2,
        name: "Trần Thị Bình",
        avatar: "TTB",
        subjects: ["Tiếng Anh"],
        level: "THCS",
        location: "TP.HCM",
        price: 150000,
        rating: 4.8,
        reviews: 38,
        experience: "3 năm kinh nghiệm",
        education: "Cử nhân Sư phạm Tiếng Anh - ĐH Sư phạm TP.HCM",
        description: "Giáo viên Tiếng Anh nhiệt tình, tận tâm. Chuyên dạy giao tiếp và luyện thi chứng chỉ quốc tế.",
        phone: "0987654321",
        email: "tranthibinh@email.com"
    },
    {
        id: 3,
        name: "Lê Hoàng Cường",
        avatar: "LHC",
        subjects: ["Hóa Học", "Sinh Học"],
        level: "THPT",
        location: "Đà Nẵng",
        price: 180000,
        rating: 4.7,
        reviews: 32,
        experience: "4 năm kinh nghiệm",
        education: "Thạc sĩ Hóa học - ĐH Khoa học Tự nhiên",
        description: "Giảng viên Hóa - Sinh có kinh nghiệm, giúp học sinh hiểu sâu bản chất và ứng dụng thực tế.",
        phone: "0912345678",
        email: "lehoangcuong@email.com"
    },
    {
        id: 4,
        name: "Phạm Minh Đức",
        avatar: "PMĐ",
        subjects: ["Toán"],
        level: "Tiểu học",
        location: "Hà Nội",
        price: 120000,
        rating: 5.0,
        reviews: 52,
        experience: "6 năm kinh nghiệm",
        education: "Giáo viên Tiểu học - ĐH Sư phạm Hà Nội",
        description: "Chuyên dạy Toán tiểu học, phương pháp vui nhộn, dễ hiểu, giúp trẻ yêu thích môn học.",
        phone: "0909123456",
        email: "phamminhduc@email.com"
    },
    {
        id: 5,
        name: "Võ Thị Hương",
        avatar: "VTH",
        subjects: ["Văn", "Lịch Sử"],
        level: "THCS",
        location: "TP.HCM",
        price: 140000,
        rating: 4.6,
        reviews: 28,
        experience: "3 năm kinh nghiệm",
        education: "Cử nhân Ngữ văn - ĐH Khoa học Xã hội và Nhân văn",
        description: "Giáo viên Văn - Sử nhiệt huyết, giúp học sinh phát triển tư duy phản biện và kỹ năng viết.",
        phone: "0938765432",
        email: "vothihuong@email.com"
    },
    {
        id: 6,
        name: "Đặng Quốc Khánh",
        avatar: "ĐQK",
        subjects: ["Tiếng Anh", "Toán"],
        level: "THPT",
        location: "Hải Phòng",
        price: 220000,
        rating: 4.9,
        reviews: 41,
        experience: "7 năm kinh nghiệm",
        education: "Thạc sĩ Giáo dục - ĐH Quốc gia Hà Nội",
        description: "Gia sư có kinh nghiệm luyện thi THPT Quốc gia, tỷ lệ học sinh đạt điểm cao trên 90%.",
        phone: "0945678901",
        email: "dangquockhanh@email.com"
    },
    {
        id: 7,
        name: "Bùi Thị Lan",
        avatar: "BTL",
        subjects: ["Hóa Học"],
        level: "THCS",
        location: "Cần Thơ",
        price: 130000,
        rating: 4.5,
        reviews: 25,
        experience: "2 năm kinh nghiệm",
        education: "Sinh viên năm 3 - ĐH Cần Thơ",
        description: "Sinh viên giỏi chuyên ngành Hóa, nhiệt tình và có phương pháp giảng dạy phù hợp với học sinh THCS.",
        phone: "0967890123",
        email: "buithilan@email.com"
    },
    {
        id: 8,
        name: "Hoàng Văn Minh",
        avatar: "HVM",
        subjects: ["Vật Lý", "Toán"],
        level: "Đại học",
        location: "Hà Nội",
        price: 300000,
        rating: 5.0,
        reviews: 35,
        experience: "10 năm kinh nghiệm",
        education: "Tiến sĩ Vật lý - ĐH Bách Khoa Hà Nội",
        description: "Giảng viên đại học, chuyên gia trong lĩnh vực Vật lý và Toán cao cấp, có nhiều công trình nghiên cứu.",
        phone: "0923456789",
        email: "hoangvanminh@email.com"
    }
];

let currentTutors = [...tutorsData];
let displayedTutors = 6;

// Initialize
document.addEventListener('DOMContentLoaded', function () {
    renderTutors();
    initializeNavigation();
    initializeMobileMenu();
});

// Notification system
function showNotification(message, type = 'success') {
    // Remove existing notification if any
    const existingNotif = document.querySelector('.notification');
    if (existingNotif) {
        existingNotif.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${type === 'success' ? '✓' : '⚠'}</span>
            <span class="notification-message">${message}</span>
        </div>
    `;

    document.body.appendChild(notification);

    // Trigger animation
    setTimeout(() => notification.classList.add('show'), 10);

    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}


// Navigation scroll effect
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Active link on scroll
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Mobile menu
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Render tutors
function renderTutors(tutors = currentTutors.slice(0, displayedTutors)) {
    const grid = document.getElementById('tutorsGrid');
    grid.innerHTML = '';

    tutors.forEach(tutor => {
        const card = createTutorCard(tutor);
        grid.appendChild(card);
    });
}

// Create tutor card
function createTutorCard(tutor) {
    const card = document.createElement('div');
    card.className = 'tutor-card';
    card.onclick = () => openTutorModal(tutor);

    card.innerHTML = `
        <div class="tutor-header">
            <div class="tutor-avatar">${tutor.avatar}</div>
            <div class="tutor-info">
                <h3>${tutor.name}</h3>
                <div class="tutor-rating">
                    <span>⭐ ${tutor.rating}</span>
                    <span>(${tutor.reviews} đánh giá)</span>
                </div>
            </div>
        </div>
        <div class="tutor-subjects">
            ${tutor.subjects.map(subject => `<span class="subject-badge">${subject}</span>`).join('')}
        </div>
        <div class="tutor-details">
            <div>📍 ${tutor.location}</div>
            <div>🎓 ${tutor.level}</div>
            <div>💼 ${tutor.experience}</div>
        </div>
        <div class="tutor-footer">
            <div class="tutor-price">
                ${formatPrice(tutor.price)}
                <span>/buổi</span>
            </div>
            <button class="btn-contact" onclick="event.stopPropagation(); contactTutor(${tutor.id})">
                Liên hệ
            </button>
        </div>
    `;

    return card;
}

// Format price
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(price);
}

// Apply filters
function applyFilters() {
    const subject = document.getElementById('subjectFilter').value;
    const level = document.getElementById('levelFilter').value;
    const location = document.getElementById('locationFilter').value;
    const price = document.getElementById('priceFilter').value;

    currentTutors = tutorsData.filter(tutor => {
        let match = true;

        if (subject && !tutor.subjects.includes(subject)) {
            match = false;
        }

        if (level && tutor.level !== level) {
            match = false;
        }

        if (location && tutor.location !== location) {
            match = false;
        }

        if (price) {
            const [min, max] = price.split('-').map(Number);
            if (tutor.price < min || tutor.price > max) {
                match = false;
            }
        }

        return match;
    });

    displayedTutors = 6;
    renderTutors();
}

// Search tutors
function searchTutors() {
    const searchTerm = document.getElementById('heroSearch').value.toLowerCase();

    currentTutors = tutorsData.filter(tutor => {
        return tutor.name.toLowerCase().includes(searchTerm) ||
            tutor.subjects.some(s => s.toLowerCase().includes(searchTerm)) ||
            tutor.location.toLowerCase().includes(searchTerm);
    });

    displayedTutors = 6;
    renderTutors();

    // Scroll to tutors section
    document.getElementById('tutors').scrollIntoView({ behavior: 'smooth' });
}

// Filter by subject
function filterBySubject(subject) {
    document.getElementById('subjectFilter').value = subject;
    applyFilters();
    document.getElementById('tutors').scrollIntoView({ behavior: 'smooth' });
}

// Load more tutors
function loadMoreTutors() {
    displayedTutors += 6;
    renderTutors();
}

// Open tutor modal
function openTutorModal(tutor) {
    const modal = document.getElementById('tutorModal');
    const details = document.getElementById('tutorDetails');

    details.innerHTML = `
        <div class="tutor-modal-header">
            <div class="tutor-avatar" style="width: 120px; height: 120px; font-size: 3rem;">
                ${tutor.avatar}
            </div>
            <div style="flex: 1;">
                <h2>${tutor.name}</h2>
                <div class="tutor-rating" style="font-size: 1.25rem; margin: 1rem 0;">
                    <span>⭐ ${tutor.rating}</span>
                    <span>(${tutor.reviews} đánh giá)</span>
                </div>
                <div class="tutor-subjects">
                    ${tutor.subjects.map(subject => `<span class="subject-badge">${subject}</span>`).join('')}
                </div>
            </div>
        </div>
        
        <div style="margin: 2rem 0;">
            <h3 style="margin-bottom: 1rem;">Thông tin chi tiết</h3>
            <div class="tutor-details" style="font-size: 1rem;">
                <div><strong>📍 Khu vực:</strong> ${tutor.location}</div>
                <div><strong>🎓 Cấp học:</strong> ${tutor.level}</div>
                <div><strong>💼 Kinh nghiệm:</strong> ${tutor.experience}</div>
                <div><strong>🏫 Trình độ:</strong> ${tutor.education}</div>
                <div><strong>💰 Học phí:</strong> ${formatPrice(tutor.price)}/buổi</div>
            </div>
        </div>
        
        <div style="margin: 2rem 0;">
            <h3 style="margin-bottom: 1rem;">Giới thiệu</h3>
            <p style="color: var(--gray); line-height: 1.8;">${tutor.description}</p>
        </div>
        
        <div style="margin: 2rem 0;">
            <h3 style="margin-bottom: 1rem;">Liên hệ</h3>
            <div class="tutor-details" style="font-size: 1rem;">
                <div><strong>📧 Email:</strong> ${tutor.email}</div>
                <div><strong>📱 Điện thoại:</strong> ${tutor.phone}</div>
            </div>
        </div>
        
        <button class="btn-primary btn-full btn-large" onclick="contactTutor(${tutor.id})">
            Liên hệ ngay
        </button>
    `;

    modal.classList.add('active');
}

// Contact tutor
function contactTutor(tutorId) {
    const tutor = tutorsData.find(t => t.id === tutorId);
    alert(`Liên hệ với ${tutor.name}\n\nEmail: ${tutor.email}\nĐiện thoại: ${tutor.phone}\n\nBạn có thể gọi điện hoặc gửi email để đặt lịch học!`);
}

// Modal functions
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

function openLoginModal() {
    openModal('loginModal');
}

function openRegisterModal() {
    openModal('registerModal');
}

function openBecomeTutorModal() {
    openModal('becomeTutorModal');
}

// Close modal on outside click
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
    }
});

// Form handlers
function handleLogin(e) {
    e.preventDefault();
    alert('Chức năng đăng nhập đang được phát triển!\n\nĐây là phiên bản demo. Trong phiên bản thực tế, bạn sẽ có thể đăng nhập và quản lý tài khoản.');
    closeModal('loginModal');
}

function handleRegister(e) {
    e.preventDefault();

    // Get form data
    const form = e.target;
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const password = form.querySelectorAll('input[type="password"]')[0].value;
    const confirmPassword = form.querySelectorAll('input[type="password"]')[1].value;

    // Validation
    if (!name || !email || !password || !confirmPassword) {
        showNotification('Vui lòng điền đầy đủ thông tin!', 'error');
        return;
    }

    if (password !== confirmPassword) {
        showNotification('Mật khẩu xác nhận không khớp!', 'error');
        return;
    }

    if (password.length < 6) {
        showNotification('Mật khẩu phải có ít nhất 6 ký tự!', 'error');
        return;
    }

    // Save to localStorage (demo)
    const userData = {
        name: name,
        email: email,
        registeredAt: new Date().toISOString()
    };

    localStorage.setItem('giasuonline_user', JSON.stringify(userData));

    // Show success message
    showNotification(`Chào mừng ${name}! Đăng ký thành công! 🎉`, 'success');

    // Close modal and reset form
    setTimeout(() => {
        closeModal('registerModal');
        form.reset();
    }, 1500);
}

function handleBecomeTutor(e) {
    e.preventDefault();
    alert('Cảm ơn bạn đã đăng ký!\n\nChúng tôi sẽ xem xét hồ sơ và liên hệ lại trong vòng 24h.\n\n(Đây là phiên bản demo)');
    closeModal('becomeTutorModal');
}

function submitContact(e) {
    e.preventDefault();
    alert('Cảm ơn bạn đã liên hệ!\n\nChúng tôi sẽ phản hồi trong thời gian sớm nhất.\n\n(Đây là phiên bản demo)');
    e.target.reset();
}

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
