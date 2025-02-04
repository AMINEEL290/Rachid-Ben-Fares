document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector(".hero-content");
    hero.classList.add("animate");
  
    window.addEventListener("scroll", () => {
      const services = document.querySelector(".services");
      const testimonials = document.querySelector(".testimonials");
  
      if (window.scrollY + window.innerHeight > services.offsetTop + 50) {
        services.classList.add("fade-in");
      }
  
      if (window.scrollY + window.innerHeight > testimonials.offsetTop + 50) {
        testimonials.classList.add("fade-in");
      }
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".service-card");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });
  
    cards.forEach((card) => observer.observe(card));
  });
  document.addEventListener("DOMContentLoaded", () => {
    const textContent = document.querySelector(".text-content");
    const imageContent = document.querySelector(".image-content img");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            textContent.style.opacity = "1";
            textContent.style.transform = "translateY(0)";
            imageContent.style.opacity = "1";
            imageContent.style.transform = "translateX(0)";
          }
        });
      },
      { threshold: 0.5 }
    );
  
    observer.observe(document.querySelector(".scroll-section"));
  });
  document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    const fadeInElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    fadeInElements.forEach(element => {
        observer.observe(element);
    });
});
document.addEventListener('DOMContentLoaded', function() {
  const languageToggle = document.getElementById('language-toggle');

  // Check the current language and set the toggle state
  if (window.location.href.includes('indexAr.html')) {
      languageToggle.checked = true;
  }

  languageToggle.addEventListener('change', function() {
      if (this.checked) {
          window.location.href = 'indexAr.html';
      } else {
          window.location.href = 'index.html';
      }
  });
});