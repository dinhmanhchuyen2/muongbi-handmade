document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. XỬ LÝ LỌC SẢN PHẨM THEO TAB
    // ==========================================
    const tabButtons = document.querySelectorAll('.tab-btn');
    const galleryCards = document.querySelectorAll('.gallery-card');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Đổi class active giữa các button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const selectedCategory = button.getAttribute('data-tab');

            // Lọc danh sách thẻ
            galleryCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (selectedCategory === 'all' || cardCategory === selectedCategory) {
                    card.classList.remove('hide');
                } else {
                    card.classList.add('hide');
                }
            });
        });
    });

    // ==========================================
    // 2. XỬ LÝ SỰ KIỆN PHÓNG TO & HIỆN CÂU CHUYỆN (MODAL)
    // ==========================================
    const modal = document.getElementById('storyModal');
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalStory = document.getElementById('modalStory');
    const closeModalBtn = document.getElementById('closeModal');

    galleryCards.forEach(card => {
        card.addEventListener('click', () => {
            const imgSrc = card.querySelector('img').src;
            const title = card.getAttribute('data-title');
            const story = card.getAttribute('data-story');

            // Cập nhật nội dung vào Modal
            modalImg.src = imgSrc;
            modalTitle.textContent = title;
            modalStory.textContent = story;

            // Bật Modal
            modal.classList.add('active');
        });
    });

    // Đóng Modal khi bấm nút X
    closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // Đóng Modal khi bấm ra ngoài vùng nội dung
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // ==========================================
    // 3. HIỆU ỨNG SÓNG NƯỚC DI CHUYỂN KHI CUỘN TRANG
    // ==========================================
    const waveSvg = document.getElementById('waveSvg');

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        // Dịch chuyển ngang nhẹ đường sóng SVG dựa trên khoảng cách cuộn
        waveSvg.style.transform = `translateX(${- (scrollPosition % 200) / 2}px)`;
    });
});
