// 📚 Part 2: Functions, Scope & Return Values

// Global variable
let globalMessage = "Hello from Global Scope!";

// Function with parameters + return value
function addNumbers(a, b) {
  return a + b;
}

// Function with local scope
function greet(name) {
  let localGreeting = `Welcome, ${name}!`; // local variable
  return localGreeting;
}

// Using the functions
function showSum(x, y) {
  const result = addNumbers(x, y);
  document.getElementById("functionResult").innerText = `Sum = ${result}`;
}

function showGreeting(userName) {
  const message = greet(userName);
  document.getElementById("functionResult").innerText = message;
}

// 🎬 Part 3: Combining CSS + JS

// Animate Box
document.getElementById("animateBtn").addEventListener("click", () => {
  const box = document.getElementById("animBox");
  box.classList.toggle("active");
});

// Modal Logic
const modal = document.getElementById("modal");
const toggleBtn = document.getElementById("toggleModal");
const closeBtn = document.getElementById("closeModal");

toggleBtn.addEventListener("click", () => {
  modal.style.display = modal.style.display === "flex" ? "none" : "flex";
  setTimeout(() => modal.classList.toggle("show"), 10); // trigger CSS transition
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
  setTimeout(() => modal.style.display = "none", 500);
});