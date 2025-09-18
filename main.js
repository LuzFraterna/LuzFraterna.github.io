// Luz Fraterna - Main JavaScript
// This file adds basic performance improvements and interactivity

document.addEventListener('DOMContentLoaded', function() {
    // Lazy load images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.loading = 'lazy';
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Example: Highlight camp on hover
    document.querySelectorAll('.camp').forEach(camp => {
        camp.addEventListener('mouseenter', () => camp.classList.add('active'));
        camp.addEventListener('mouseleave', () => camp.classList.remove('active'));
    });
    // Login modal logic
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const closeModal = document.getElementById('closeModal');
    if (loginBtn && loginModal && closeModal) {
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            loginModal.style.display = 'flex';
        });
        closeModal.addEventListener('click', function() {
            loginModal.style.display = 'none';
        });
        window.addEventListener('click', function(e) {
            if (e.target === loginModal) {
                loginModal.style.display = 'none';
            }
        });
    }
});
