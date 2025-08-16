// -----------------------------
// PART 1: Variable declarations & conditionals
// -----------------------------
let username = "Aihtea";
let userAge = 20;

if (userAge >= 18) {
  console.log(`${username} is an adult.`);
} else {
  console.log(`${username} is a minor.`);
}

// -----------------------------
// PART 2: Custom functions
// -----------------------------
function greetUser(name) {
  alert(`Hello, ${name}! Welcome to the site.`);
}

function generateList(items) {
  let listElement = document.getElementById("item-list");
  listElement.innerHTML = ""; // Clear existing list
  for (let item of items) {
    let li = document.createElement("li");
    li.textContent = item;
    listElement.appendChild(li);
  }
}

// -----------------------------
// PART 3: Loops
// -----------------------------
// Example 1: For loop
for (let i = 1; i <= 3; i++) {
  console.log(`For loop iteration: ${i}`);
}

// Example 2: While loop
let count = 1;
while (count <= 3) {
  console.log(`While loop count: ${count}`);
  count++;
}

// -----------------------------
// PART 4: DOM interactions
// -----------------------------
// 1) Change content of an element
document.getElementById("page-title").textContent = "JS Assignment Project";

// 2) Event listener for greeting
document.getElementById("btn-greet").addEventListener("click", function() {
  greetUser(username);
});

// 3) Event listener to show a list
document.getElementById("btn-list").addEventListener("click", function() {
  let sampleItems = ["Apple", "Banana", "Cherry"];
  generateList(sampleItems);
});
