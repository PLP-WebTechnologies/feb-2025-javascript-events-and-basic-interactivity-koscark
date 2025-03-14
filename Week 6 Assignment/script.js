document.addEventListener("DOMContentLoaded", function () {
  // Changing text content dynamically
  const welcomeMessage = document.querySelector(".content h2");
  const welcomeParagraph = document.querySelector(".content p");
  const updateTextButton = document.createElement("button");

  updateTextButton.textContent = "Reveal";
  updateTextButton.style.padding = "10px 20px";
  updateTextButton.style.margin = "1rem auto";
  updateTextButton.style.display = "block";
  updateTextButton.style.backgroundColor = "#3498db";
  updateTextButton.style.color = "#fff";
  updateTextButton.style.border = "none";
  updateTextButton.style.borderRadius = "4px";
  updateTextButton.style.cursor = "pointer";

  // Insert button after the paragraph
  welcomeParagraph.insertAdjacentElement("afterend", updateTextButton);

  let isOriginalText = true;
  updateTextButton.addEventListener("click", function () {
    if (isOriginalText) {
      welcomeMessage.textContent = "We really deliver!";
      welcomeParagraph.textContent =
        "We're ranked one of the top telehealth platforms in the nation.";
      updateTextButton.textContent = "Hide";
    } else {
      welcomeMessage.textContent = "Welcome to Virtual Healthcare";
      welcomeParagraph.textContent =
        "TeleHealth Connect brings healthcare to your fingertips. Our platform offers secure video consultations, online prescriptions, and 24/7 access to medical professionals. Whether you need a routine check-up or urgent care advice, we're here to help you stay healthy from the comfort of home.";
      updateTextButton.textContent = "Update Welcome Message";
    }
    isOriginalText = !isOriginalText;
  });

  // 1. Event Listeners
  const navLinks = document.querySelectorAll("#nav-links a");
  const featureItems = document.querySelectorAll(".feature-item");
  const header = document.querySelector(".header");

  // Navigation hover effects
  navLinks.forEach((link) => {
    link.addEventListener("mouseover", function () {
      this.style.transition = "color 0.3s ease";
      this.style.color = "#3498db";
    });

    link.addEventListener("mouseout", function () {
      this.style.color = "#fff";
    });

    link.addEventListener("click", function (e) {
      e.preventDefault();
      const sectionId = this.getAttribute("href").substring(1);
      alert(`Navigating to ${sectionId} section (demo mode)`);
    });
  });

  // Sticky header effect with scroll
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.style.backgroundColor = "#1a252f";
      header.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
    } else {
      header.style.backgroundColor = "#2c3e50";
      header.style.boxShadow = "none";
    }
  });

  // Feature item click animation
  featureItems.forEach((item) => {
    item.addEventListener("click", function () {
      this.style.transition = "transform 0.2s ease";
      this.style.transform = "scale(1.05)";
      setTimeout(() => {
        this.style.transform = "scale(1)";
      }, 200);
    });
  });

  // 2. Form Validation for Newsletter
  const footerSection = document.querySelector(".footer-content");
  const newsletterSection = document.createElement("div");
  newsletterSection.className = "footer-section";
  newsletterSection.innerHTML = `
      <h4>Newsletter Signup</h4>
      <form id="newsletter-form">
          <input type="email" id="email-input" placeholder="Enter your email" style="padding: 8px; margin: 5px 0; width: 200px; border-radius: 4px; border: 1px solid #fff;">
          <button type="submit" style="padding: 8px 15px; background-color: #3498db; color: #fff; border: none; border-radius: 4px; margin-left: 5px;">Subscribe</button>
          <p id="error-message" style="color: #ff6b6b; font-size: 0.9rem; margin-top: 5px; display: none;"></p>
      </form>
  `;

  footerSection.appendChild(newsletterSection);

  const newsletterForm = document.getElementById("newsletter-form");
  const emailInput = document.getElementById("email-input");
  const errorMessage = document.getElementById("error-message");

  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = emailInput.value.trim();

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      showError("Please enter an email address");
    } else if (!emailRegex.test(email)) {
      showError("Please enter a valid email address");
    } else {
      showError("Subscription successful!", "#2ecc71");
      emailInput.value = "";
      setTimeout(() => {
        errorMessage.style.display = "none";
      }, 2000);
    }
  });

  // Real-time validation on input
  emailInput.addEventListener("input", function () {
    errorMessage.style.display = "none";
    this.style.borderColor = "#fff";
  });

  function showError(message, color = "#ff6b6b") {
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
    errorMessage.style.color = color;
    emailInput.style.borderColor = color === "#ff6b6b" ? "#ff6b6b" : "#fff";
  }

  // 3. Interactive Elements
  // Appointment Booking Button
  const contentSection = document.querySelector(".content");
  const bookingButton = document.createElement("button");
  bookingButton.textContent = "Book Appointment";
  bookingButton.className = "booking-btn";
  bookingButton.style.cssText = `
      padding: 12px 25px;
      background-color: #3498db;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin: 1rem auto;
      display: block;
      transition: background-color 0.3s ease;
  `;
  contentSection.appendChild(bookingButton);

  // Appointment Modal
  const modal = document.createElement("div");
  modal.style.cssText = `
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.5);
      z-index: 1000;
  `;

  const modalContent = document.createElement("div");
  modalContent.style.cssText = `
      background-color: #fff;
      padding: 2rem;
      border-radius: 8px;
      width: 90%;
      max-width: 400px;
      margin: 10% auto;
      position: relative;
  `;

  modalContent.innerHTML = `
      <h3>Book Appointment</h3>
      <form id="appointment-form">
          <input type="text" id="name" placeholder="Your Name" style="width: 100%; padding: 8px; margin: 10px 0; border-radius: 4px;">
          <input type="date" id="date" style="width: 100%; padding: 8px; margin: 10px 0; border-radius: 4px;">
          <button type="submit" style="padding: 10px 20px; background-color: #3498db; color: #fff; border: none; border-radius: 4px;">Confirm</button>
      </form>
      <button id="close-modal" style="position: absolute; top: 10px; right: 10px; background: none; border: none; font-size: 1.2rem; cursor: pointer;">×</button>
  `;

  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  // Modal event listeners
  bookingButton.addEventListener("mouseover", function () {
    this.style.backgroundColor = "#2980b9";
  });

  bookingButton.addEventListener("mouseout", function () {
    this.style.backgroundColor = "#3498db";
  });

  bookingButton.addEventListener("click", function () {
    modal.style.display = "block";
  });

  document.getElementById("close-modal").addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Click outside to close modal
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Appointment form submission
  document
    .getElementById("appointment-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const date = document.getElementById("date").value;

      if (!name || !date) {
        alert("Please fill in all fields");
        return;
      }

      alert(`Appointment booked!\nName: ${name}\nDate: ${date}`);
      modal.style.display = "none";
      this.reset();
    });
});
