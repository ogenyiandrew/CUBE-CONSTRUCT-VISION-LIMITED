// Basic client-side validation for contact and application forms
function validateForm(form){
  let ok = true;
  form.querySelectorAll('input[required],textarea[required],select[required]').forEach(i=>{
    if(!i.value.trim()){
      i.classList.add('invalid');
      ok = false;
    } else i.classList.remove('invalid');
  });
  return ok;
}

document.addEventListener('DOMContentLoaded', ()=>{
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      if(validateForm(contactForm)){
        alert('Thank you. Your request was submitted (placeholder).');
        contactForm.reset();
      }
    });
  }

  const appForm = document.getElementById('applicationForm');
  if(appForm){
    appForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      if(validateForm(appForm)){
        alert('Application submitted (placeholder).');
        appForm.reset();
      }
    });
  }
});