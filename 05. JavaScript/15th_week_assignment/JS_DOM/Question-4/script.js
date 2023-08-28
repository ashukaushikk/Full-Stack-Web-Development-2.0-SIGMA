// Fetching Values : =>>>
let nameInput = document.querySelector("input[name=name]");
let passwordInput = document.querySelector("input[name=password]");
let btn = document.querySelector("button");

// Adding Event Listner : =>>>
btn.addEventListener("click", (event) => {
  // Stopping Form Submission : =>>>
  event.preventDefault();

  if (nameInput.value.length >= 3 && passwordInput.value.length >= 8) {
    alert("Form validation successful");
  } else {
    alert("Form validation failed !!");
  }
});
