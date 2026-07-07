# Northpeak Consulting — Strategy & Growth Advisory

A modern, responsive consulting website showcasing services, projects, testimonials, and pricing.

## Tech Stack

### Frontend
- **HTML5** — Semantic markup, accessibility (ARIA labels, alt text)
- **CSS3** — Flexbox, CSS Grid, responsive design (mobile-first), custom properties, animations
- **JavaScript (Vanilla)** — No frameworks; DOM manipulation for:
  - Mobile nav toggle / hamburger menu
  - Testimonial slider with auto-rotate and dot navigation
  - Contact form validation and user feedback

### Design & UX
- **Google Fonts** — Fraunces (serif headlines), Work Sans (body text), IBM Plex Mono (accent)
- **Responsive Layout** — Adjusts gracefully from mobile (320px) to desktop (1440px+)

### Project Structure
```
files (1)/
├── index.html          # Main HTML structure
├── style.css           # All styling (no CSS framework)
├── script.js           # Interactive components
├── README.md           # This file
└── images/             # Optimized images (JPG format)
    ├── hero-mountain.jpg
    ├── about-team.jpg
    ├── service-01.jpg through service-06.jpg
    ├── project-01.jpg through project-03.jpg
    ├── testimonials-bg.jpg
    └── cta-mountain.jpg
```

### Key Features
- Fully responsive mobile & desktop experience
- Smooth scroll navigation with anchor links
- Testimonial auto-slider with manual dot controls
- Contact form with real-time feedback
- No external dependencies (pure HTML/CSS/JS)
- Optimized for performance and accessibility

### How to Use
1. Open `index.html` in a browser or use a local server:
   ```bash
   python -m http.server 5500
   # Then visit http://localhost:5500
   ```

2. Customize content by editing `index.html` and `style.css`

3. Deploy to GitHub Pages, Netlify, or any static hosting

---

**Built with care.** No build tools, no frameworks—just clean, modern web standards.
