document.addEventListener('DOMContentLoaded', function () {
    // Carousel logic
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let current = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        current = (current + 1) % slides.length;
        showSlide(current);
    }

    function prevSlide() {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // ...existing code...
    document.querySelectorAll('.carousel-slide').forEach(slide => {
        const bg = slide.getAttribute('data-bg');
        if (bg) {
            slide.style.backgroundImage = `url('${bg}')`;
        }
    });
    // ...existing code...

    // Auto-slide every 5 seconds
    setInterval(nextSlide, 5000);

    showSlide(current);
});
// Contact form (basic validation)
// const contactForm = document.querySelector('.contact-form');
// if (contactForm) {
//     contactForm.addEventListener('submit', function(e) {
//         e.preventDefault()
//         alert('Thank you for contacting Zircon Chambers!')
//     }
//     );
// }});