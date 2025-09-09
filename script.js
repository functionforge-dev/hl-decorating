const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.primary-nav');
if (navToggle && nav){
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const yearEl = document.getElementById('year');
if (yearEl){
  yearEl.textContent = String(new Date().getFullYear());
}

const backToTop = document.querySelector('.back-to-top');
if (backToTop){
  backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({top:0, behavior:'smooth'});
  });
}

// Simple contact form handling
const contactForm = document.getElementById('contact-form');
if (contactForm){
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = /** @type {HTMLInputElement} */ (document.getElementById('name'))?.value.trim();
    const email = /** @type {HTMLInputElement} */ (document.getElementById('email'))?.value.trim();
    const message = /** @type {HTMLTextAreaElement} */ (document.getElementById('message'))?.value.trim();

    if (!name || !email || !message){
      alert('Please fill in your name, email, and project details.');
      return;
    }
    const mailto = `mailto:hello@hldecorating.example?subject=${encodeURIComponent('Quote request from ' + name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + ' <' + email + '>')}`;
    window.location.href = mailto;
  });
}
