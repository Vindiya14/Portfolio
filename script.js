const logo = document.querySelector('.logo');
const navLinks = document.querySelector('.nav-links');
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navLinks.classList.add('show-nav');
    header.classList.add('scrolled'); // add border
  } else {
    navLinks.classList.remove('show-nav');
    header.classList.remove('scrolled'); // remove border
  }
});
  window.addEventListener("scroll", function() {
    
    const heroImg = document.querySelector(".hero-image");
    if (!heroImg) return;

    if (window.scrollY > 50) { 
      heroImg.classList.add("hidden");
    } else {
      heroImg.classList.remove("hidden");
    }
  });

















