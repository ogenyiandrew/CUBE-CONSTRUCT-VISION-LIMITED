// Project filtering and lightbox
document.addEventListener('DOMContentLoaded', ()=>{
  const grid = document.getElementById('projectsGrid');
  const filterButtons = document.querySelectorAll('.projects-filters .filters button');
  if(filterButtons.length){
    filterButtons.forEach(btn=>btn.addEventListener('click', ()=>{
      filterButtons.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.project-card').forEach(card=>{
        const cat = card.dataset.category;
        if(filter==='all' || filter===cat){
          card.style.display='block';
          card.classList.add('fade-up');
        } else {
          card.style.display='none';
        }
      });
    }));
  }

  // lightbox for gallery links
  document.querySelectorAll('.lightbox').forEach(a=>{
    a.addEventListener('click', (e)=>{
      e.preventDefault();
      const src = a.getAttribute('href');
      const overlay = document.createElement('div');
      overlay.className='lb-overlay';
      overlay.innerHTML = `<div class="lb-inner"><img src="${src}" alt="" /><button class="lb-close">Close</button></div>`;
      document.body.appendChild(overlay);
      overlay.querySelector('.lb-close').addEventListener('click', ()=>overlay.remove());
      overlay.addEventListener('click', (ev)=>{ if(ev.target===overlay) overlay.remove(); });
    });
  });
});