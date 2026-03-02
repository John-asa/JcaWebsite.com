// Small UI scripts: mobile menu toggle and simple interactions
document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('menu-icon');
  const navLinks = document.querySelector('.nav-links');

  function toggleMenu() {
    navLinks.classList.toggle('active');
  }

  if (menuIcon && navLinks) {
    menuIcon.addEventListener('click', toggleMenu);
    menuIcon.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') toggleMenu();
    });

    // Close menu when a link is clicked (mobile)
    navLinks.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') navLinks.classList.remove('active');
    });
  }

  // Contact button can scroll to contact section if provided
  const contactBtn = document.getElementById('contact-btn');
  if (contactBtn) {
    contactBtn.addEventListener('click', () => {
      const contact = document.getElementById('contact');
      if (contact) contact.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  // Visit GitHub button opens link
  const visitBtn = document.querySelector('.visit-btn');
  if (visitBtn) {
    visitBtn.addEventListener('click', () => {
      window.open('https://github.com/John-asa', '_blank');
    });
  }

  // Dark mode toggle button
  const darkToggle = document.getElementById('dark-mode-toggle');
  if (darkToggle) {
    darkToggle.addEventListener('click', toggleDarkMode);
    darkToggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') toggleDarkMode();
    });
  }

  // Reveal elements on scroll for smooth appearance
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    revealElements.forEach((el) => observer.observe(el));
  }

  // Simple contact form submission handler
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for contacting me!');
      contactForm.reset();
    });
  }
});

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const icon = document.getElementById('dark-mode-toggle');
  if (icon) {
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
  }
}
