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


// ...existing code...
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const navUl = document.querySelector('.navmenu ul');
    const navOverlay = document.querySelector('.navmenu .nav-overlay');

    navToggle.addEventListener('click', function () {
        navUl.classList.toggle('active');
        navToggle.classList.toggle('active');
        if (navUl.classList.contains('active')) {
            navOverlay.style.display = 'block';
        } else {
            navOverlay.style.display = 'none';
        }
    });

    navOverlay.addEventListener('click', function () {
        navUl.classList.remove('active');
        navToggle.classList.remove('active');
        navOverlay.style.display = 'none';
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const logoImg = document.querySelector('.logo img');
    function updateLogo() {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            logoImg.src = 'Assets/dark_mode_picture-removebg-preview.png';
        } else {
            logoImg.src = 'Assets/zircon_logo-removebg-preview.png';
        }
    }
    updateLogo();
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateLogo);
});

document.addEventListener('DOMContentLoaded', function () {
    const logoImg = document.querySelector('.logo img');
    const footerLogoImg = document.getElementById('footer-logo');
    function updateLogos() {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            logoImg.src = 'Assets/dark_mode_picture-removebg-preview.png';
            if (footerLogoImg) {
                footerLogoImg.src = 'Assets/dark_mode_picture-removebg-preview.png';
            }
        } else {
            logoImg.src = 'Assets/zircon_logo-removebg-preview.png';
            if (footerLogoImg) {
                footerLogoImg.src = 'Assets/zircon_logo-removebg-preview.png';
            }
        }
    }
    updateLogos();
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateLogos);
});



// ...existing code...
// Contact form (basic validation)
// const contactForm = document.querySelector('.contact-form');
// if (contactForm) {
//     contactForm.addEventListener('submit', function(e) {
//         e.preventDefault()
//         alert('Thank you for contacting Zircon Chambers!')
//     }
//     );
// }});