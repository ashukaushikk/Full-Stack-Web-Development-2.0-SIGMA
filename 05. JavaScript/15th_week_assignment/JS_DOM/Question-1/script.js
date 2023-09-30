// Fetching Elements : =>>>
// let imageInput = document.querySelector("input");
// let displayerBox = document.querySelector(".displayer");
// let image = document.querySelector("img");

// Logic : =>>>

// // Fetching Elements : =>>>
const imageInput = document.querySelector(`#image`);
const previewImage = document.querySelector(`img`);

// Logic : =>>>
imageInput.addEventListener("change", (event) => {
  if (!event.target.files[0]) {
    return "";
  }
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    previewImage.src = reader.result;
  };
  reader.readAsDataURL(file);
});
