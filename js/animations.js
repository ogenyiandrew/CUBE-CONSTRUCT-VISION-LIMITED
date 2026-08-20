// Simple scroll reveal for elements with .fade-up
const revealObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('fade-up');
      revealObserver.unobserve(entry.target);
    }
  });
},{threshold:0.2});
document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelectorAll('.fade-in, .reveal, .about-content, .project-card').forEach(el=>revealObserver.observe(el));
});
