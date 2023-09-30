// Fetching Values : =>>>
let nameInput = document.querySelector("input[name=name]");
let passwordInput = document.querySelector("input[name=password]");
let btn = document.querySelector("button");

// Adding Event Listener : =>>>
btn.addEventListener("click", (event) => {
  // Stopping Form Submission : =>>>
  event.preventDefault();

  if (nameInput.value.length < 3) {
    alert("Name enter at least 3 character");
    return
  }
  if (passwordInput.value.length < 8) {
    alert("Password enter at least 8 character");
    return
  }
  alert("Form validation successfully !!");
  return;
});
