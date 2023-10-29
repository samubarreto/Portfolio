const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const me = document.querySelector('.profile-pic');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

me.addEventListener('click', () => {
    let sound = new Audio('source/hurt-sfx.mp3');
    sound.play();
})