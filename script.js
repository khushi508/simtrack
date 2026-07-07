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

// ---------- contact form (demo only, no backend) ----------
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    note.hidden = false;
    form.reset();
  });
}