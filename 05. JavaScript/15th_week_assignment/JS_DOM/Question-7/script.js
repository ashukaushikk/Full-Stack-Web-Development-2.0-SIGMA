// Fecthing Elements : =>>>
let input = document.querySelector("input");
let items = document.querySelectorAll("li");

// Adding Event Listner to input Elements : =>>>
input.addEventListener("input", () => {
  let enteredVal = input.value.toLowerCase();

  for (let item of items) {
    let itemVal = item.textContent.toLowerCase();

    if (itemVal.includes(enteredVal)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  }
});
