// Fetching Elements : =>>>
let loginBtn = document.querySelector(".login");
let logoutBtn = document.querySelector(".logout");
let heading = document.querySelector("h1");

// Checking Status and Render heading : =>>>
let checkAndRender = () => {
  if (localStorage.getItem("status") === "login") {
    heading.textContent = "User is logged In";
  } else {
    heading.textContent = "User has not logged In";
  }
};

// Adding Event Listners : =>>>
loginBtn.addEventListener("click", () => {
  localStorage.setItem("status", "login");
  checkAndRender();
});

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("status");
  checkAndRender();
});
