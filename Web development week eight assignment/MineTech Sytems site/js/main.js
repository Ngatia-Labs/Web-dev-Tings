// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
if (navToggle && navMenu){
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('show');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Back to top
const backToTop = document.getElementById('backToTop');
if (backToTop){
  backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({top:0, behavior:'smooth'});
  });
}

// Year in footer
const yearEl = document.getElementById('year');
if (yearEl){ yearEl.textContent = new Date().getFullYear(); }

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, {threshold: .16});
revealEls.forEach(el => io.observe(el));

// Newsletter (dummy) validation
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm){
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('newsletterEmail');
    const msg = document.getElementById('newsletterMsg');
    if (!email.value || !email.validity.valid){
      msg.textContent = 'Please enter a valid email.';
      msg.style.color = '#facc15';
      email.focus();
      return;
    }
    msg.textContent = 'Subscribed! (demo only)';
    msg.style.color = '#34d399';
    newsletterForm.reset();
  });
}

// Contact form validation (client-side demo)
const contactForm = document.getElementById('contactForm');
if (contactForm){
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const msg = document.getElementById('formMsg');

    if (name.value.trim().length < 2){
      msg.textContent = 'Name must be at least 2 characters.';
      msg.style.color = '#facc15';
      name.focus(); return;
    }
    if (!email.validity.valid){
      msg.textContent = 'Please enter a valid email.';
      msg.style.color = '#facc15';
      email.focus(); return;
    }
    if (message.value.trim().length < 10){
      msg.textContent = 'Message must be at least 10 characters.';
      msg.style.color = '#facc15';
      message.focus(); return;
    }
    msg.textContent = 'Thanks! Your message has been sent. (demo)';
    msg.style.color = '#34d399';
    contactForm.reset();
  });
}

// Simple lightbox for gallery
const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCap = document.getElementById('lightboxCap');
const lightboxClose = document.getElementById('lightboxClose');

if (gallery && lightbox && lightboxImg && lightboxClose){
  gallery.addEventListener('click', (e) => {
    const img = e.target.closest('img');
    if (!img) return;
    lightboxImg.src = img.src;
    const cap = img.parentElement.querySelector('figcaption');
    lightboxCap.textContent = cap ? cap.textContent : '';
    lightbox.classList.add('show');
    lightbox.setAttribute('aria-hidden', 'false');
  });
  lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('show');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.removeAttribute('src');
  });
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox){ lightboxClose.click(); }
  });
}

// Accessibility: close with Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox && lightbox.classList.contains('show')){
    lightbox.classList.remove('show');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.removeAttribute('src');
  }
});