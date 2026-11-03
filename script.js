
// SIGNBOARD NATIONS WEBSITE JAVASCRIPT

const WHATSAPP_NUMBER = "919971902778";


// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});


// AUTOMATIC COPYRIGHT YEAR

document.getElementById("year").textContent =
  new Date().getFullYear();


// WHATSAPP CONTACT FORM

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {

  event.preventDefault();

  const name = document.getElementById("customerName").value.trim();

  const phone = document.getElementById("customerPhone").value.trim();

  const service = document.getElementById("service").value;

  const message = document.getElementById("message").value.trim();


  if (!name || !phone || !service || !message) {
    alert("Please fill in all the fields.");
    return;
  }


  const whatsappMessage =
    `Hello Signboard Nations!\n\n` +
    `Name: ${name}\n` +
    `Phone: ${phone}\n` +
    `Service Required: ${service}\n` +
    `Requirement: ${message}`;


  const whatsappURL =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;


  window.open(whatsappURL, "_blank", "noopener,noreferrer");

});
