const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-item');
const navBar = document.querySelector('.navbar')
const eu = document.querySelector('.profile-pic');
const logoMobile = document.querySelector('.logo-header-mobile');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    logoMobile.classList.toggle('active');
    navBar.classList.toggle('active');
});

navLinks.forEach((navLink) => {
    navLink.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

eu.addEventListener('click', () => {
    let sound = new Audio('source/sfx.wav');
    sound.play();
});
