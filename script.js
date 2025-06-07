// === Smooth scroll for nav links ===
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// === Typing animation effect ===
const typedText = document.querySelector(".typed-text");
const phrases = ["Data Analyst", "Data Scientist", "ML Engineer", "Python Programmer"];
let i = 0, j = 0;
let currentPhrase = "", isDeleting = false;

function typeEffect() {
  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase = phrases[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      currentPhrase = phrases[i].substring(0, j--);
    }

    typedText.textContent = currentPhrase;

    if (!isDeleting && j === phrases[i].length) {
      isDeleting = true;
      setTimeout(typeEffect, 1400); // pause after typing full word
      return;
    }

    if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % phrases.length;
      setTimeout(typeEffect, 600); // pause before next word
      return;
    }

    const typingSpeed = isDeleting ? 100 : 150;
    setTimeout(typeEffect, typingSpeed);
  }
}

typeEffect();

// === Contact Form Handling ===
const form = document.getElementById("contactForm");
const successMsg = document.getElementById("formSuccess");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);
  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      successMsg.style.display = "block";
      form.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  });
});
