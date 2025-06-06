// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Typing animation effect (cleaner and smoother)
const typedText = document.querySelector(".typed-text");
const phrases = ["Data Analyst", "Data Scientist", "ML Engineer", "Python Programmer"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];
  const partialText = currentPhrase.substring(0, charIndex);

  typedText.textContent = partialText;

  let delay = isDeleting ? 110 : 180;

  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1400); // pause after full word typed
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(typeEffect, 600); // pause before new word starts
    return;
  }

  charIndex = isDeleting ? charIndex - 1 : charIndex + 1;
  setTimeout(typeEffect, delay);
}

typeEffect();
