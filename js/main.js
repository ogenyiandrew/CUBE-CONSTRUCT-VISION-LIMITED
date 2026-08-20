// Main interactions: counters and back-to-top
document.addEventListener('DOMContentLoaded', ()=>{
  // counters
  const counters = document.querySelectorAll('.stat-value');
  const io = new IntersectionObserver((entries, obs)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const el = entry.target;
        const to = +el.dataset.count;
        let current = 0;
        const step = Math.max(1, Math.floor(to/80));
        const t = setInterval(()=>{
          current += step;
          if(current>=to){
            el.textContent = to + (to===98?'%':'');
            clearInterval(t);
          } else {
            el.textContent = current;
          }
        },12);
        obs.unobserve(el);
      }
    });
  },{threshold:0.4});
  counters.forEach(c=>io.observe(c));

  // back to top
  const back = document.querySelector('.back-to-top');
  window.addEventListener('scroll', ()=>{
    if(window.scrollY>400) back.classList.add('visible'); else back.classList.remove('visible');
  });
});