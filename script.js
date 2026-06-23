// 1. Inisialisasi Animasi Teks (Typed.js) - Diperbarui ke Software Engineer
const typed = new Typed('.typing', {
    strings: ['Web Developer', 'Siswa SMK'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// 2. Logika Hamburger Menu Responsive
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); 
    navbar.classList.toggle('open');
};

// Menutup navbar otomatis ketika di-scroll
window.onscroll = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('open');
};