// ---------- mobile nav toggle ----------
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('is-open');
});
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mainNav.classList.remove('is-open'));
});

// ---------- testimonial slider ----------
const slides = Array.from(document.querySelectorAll('.testimonial-slide'));
const dotsWrap = document.getElementById('testimonialDots');
let current = 0;
let timer;

slides.forEach((_, i) => {
  const dot = document.createElement('button');
  if (i === 0) dot.classList.add('is-active');
  dot.setAttribute('aria-label', `Show testimonial ${i + 1}`);
  dot.addEventListener('click', () => {
    goTo(i);
    resetTimer();
  });
  dotsWrap.appendChild(dot);
});
const dots = Array.from(dotsWrap.children);

function goTo(index) {
  slides[current].classList.remove('is-active');
  dots[current].classList.remove('is-active');
  current = index;
  slides[current].classList.add('is-active');
  dots[current].classList.add('is-active');
}

function next() {
  goTo((current + 1) % slides.length);
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(next, 6000);
}

if (slides.length) resetTimer();

// ---------- contact form (connected to backend API) ----------
const API_URL = 'https://simtrack-weld.vercel.app/api/contact';
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error('Request failed');

      note.hidden = false;
      note.textContent = "Thanks — we'll be in touch within one business day.";
      form.reset();
    } catch (err) {
      note.hidden = false;
      note.textContent = 'Something went wrong. Please try again in a moment.';
      console.error(err);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    }
  });
}
