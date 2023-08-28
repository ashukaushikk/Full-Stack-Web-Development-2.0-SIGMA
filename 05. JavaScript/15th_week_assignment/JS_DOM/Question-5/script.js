// Fetching Elements : =>>>
let heading = document.querySelector("h1");
let btn = document.querySelector("button");
let image = document.querySelector("img");

// Adding Event Listner : =>>>
btn.addEventListener("click", () => {
  image.classList.toggle("hidden");
  if (image.getAttribute("class") === "hidden") {
    heading.textContent = "Your image is hidden !";
  } else {
    heading.textContent = "Your image is visible";
  }
});
