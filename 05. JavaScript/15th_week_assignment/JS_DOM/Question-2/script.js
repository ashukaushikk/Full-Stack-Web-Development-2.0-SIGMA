// Fetching Elements : =>>>
const body = document.querySelector(`body`);
const heading = document.querySelector(`h1`);
const btn = document.querySelector(`#toggle`);

// Adding Event Listner : =>>>
btn.addEventListener("click", (event) => {
  btn.classList.toggle(`active`);
  body.classList.toggle(`dark-mode`);
  if (body.getAttribute("class") === `dark-mode`) {
    heading.textContent = "This is Dark mode";
  } else {
    heading.textContent = "This is Light mode";
  }
});
