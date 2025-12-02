

document.addEventListener("DOMContentLoaded", () => {
  
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const rawId = link.getAttribute("href"); 
      if (!rawId || rawId === "#") return;

      const correctedId = rawId.toLowerCase(); 
      const target = document.querySelector(correctedId);

      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });

   
      if (window.innerWidth <= 768) {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
      }
    });
  });

  
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Message Sent Successfully! (Backend Coming Soon)");
      contactForm.reset();
    });
  }


  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");

         
          if (entry.target.id === "skills") {
            const bars = entry.target.querySelectorAll(".progress");
            const skills = [85, 80, 88, 75]; 

            bars.forEach((bar, i) => {
              setTimeout(() => {
                bar.style.width = skills[i] + "%";
              }, i * 200);
            });
          }
        }
      });
    },
    { threshold: 0.18 }
  );

  document.querySelectorAll(".section").forEach((sec) => observer.observe(sec));

const typedText = document.getElementById("typed-text");
const cursor = document.querySelector(".typed-cursor");

if (typedText && cursor) {
  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "Machine Learning Engineer",
    "Full Stack Developer",
    "Problem Solver"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeEffect() {
    const word = roles[roleIndex];

    if (!deleting) {
      typedText.textContent = word.slice(0, charIndex + 1);
      charIndex++;

      if (charIndex === word.length) {
        // PAUSE FULLY – Prevent Flicker
        return setTimeout(() => {
          deleting = true;
          typeEffect();
        }, 120);
      }

      return setTimeout(typeEffect, 80);
    }

    // deleting mode
    typedText.textContent = word.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;

      // small delay before typing next word
      return setTimeout(typeEffect, 300);
    }

    setTimeout(typeEffect, 40);
  }

  setTimeout(typeEffect, 600);
}

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });
});
