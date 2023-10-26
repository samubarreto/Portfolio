function showMobileMenu() {
  const menuMobile = document.querySelector('.mobile-menu');
  
  if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');
    document.querySelector('.icon').src = 'source/menu-hamburger.png';
  } else {
    menuMobile.classList.add('open');
    document.querySelector('.icon').src = 'source/x.png';
  }
}