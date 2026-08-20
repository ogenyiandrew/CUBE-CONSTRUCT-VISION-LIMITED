// Navigation: sticky shrink and mobile toggle
const header = document.getElementById('siteHeader');
const hamburger = document.getElementById('hamburger');
const primaryNav = document.getElementById('primaryNav');

function onScroll(){
  if(window.scrollY>60){
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
}
window.addEventListener('scroll', onScroll);

if(hamburger){
  hamburger.addEventListener('click',()=>{
    const expanded = hamburger.getAttribute('aria-expanded')==='true';
    hamburger.setAttribute('aria-expanded', String(!expanded));
    primaryNav.classList.toggle('open');
    document.body.classList.toggle('nav-open');
  });
}

// Close mobile nav on link click
document.addEventListener('click', (e)=>{
  if(e.target.closest('.primary-nav a') && document.body.classList.contains('nav-open')){
    document.body.classList.remove('nav-open');
    primaryNav.classList.remove('open');
    if(hamburger) hamburger.setAttribute('aria-expanded','false');
  }
});