// -----------------------------
// INTERACTIVE FEATURE 1: Button Click Counter
// -----------------------------
let clickCount = 0;
document.getElementById("countBtn").addEventListener("click", function() {
  clickCount++;
  document.getElementById("clickCount").textContent = clickCount;
});

// -----------------------------
// INTERACTIVE FEATURE 2: Show/Hide Password
// -----------------------------
document.getElementById("togglePassword").addEventListener("click", function() {
  let pwdField = document.getElementById("passwordField");
  pwdField.type = pwdField.type === "password" ? "text" : "password";
});

// -----------------------------
// CUSTOM FORM VALIDATION
// -----------------------------
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Stop form from submitting

  // Get form values
  let name = document.getElementById("nameInput").value.trim();
  let email = document.getElementById("emailInput").value.trim();
  let message = document.getElementById("messageInput").value.trim();
  let feedback = document.getElementById("formFeedback");

  // Basic validation
  if (name === "" || email === "" || message === "") {
    feedback.textContent = "All fields are required.";
    feedback.className = "error";
    return;
  }

  // Email format check (simple regex)
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    feedback.textContent = "Please enter a valid email address.";
    feedback.className = "error";
    return;
  }

  // Success
  feedback.textContent = "Form submitted successfully!";
  feedback.className = "success";

  // Clear form
  document.getElementById("contactForm").reset();
});