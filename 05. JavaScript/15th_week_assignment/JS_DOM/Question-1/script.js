// Fetching Elements : =>>>
let imageInput = document.querySelector("input");
let displayerBox = document.querySelector(".displayer");
let image = document.querySelector("img");

// Logic : =>>>
imageInput.addEventListener("change", (event) => {
  let file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = () => {
      image.src = reader.result;
    };

    reader.readAsDataURL(file);
  }
});

// // 2nd Way:

// // Fetching Elements : =>>>
// const imageInput = document.querySelector(`#image`);
// const previewImage = document.querySelector(`#preview-image`);

// // Logic : =>>>
// inputImage.addEventListener("change", (event) => {
//   if (event.target.files.length == 0) {
//     return;
//   }
//   const file = event.target.files[0];
//   const reader = new FileReader();
//   reader.onload = () => {
//     previewImage.src = reader.result;
//   };
//   reader.readAsDataURL(file);
// });
