// Available Options : =>>>
const options = ["Javasript", "java", "Python", "C++"];

// Fetching Elements : =>>>
let container = document.querySelector(".container");
let heading = document.createElement("h1");
let select = document.createElement("select");

// Adding text-content to Elements : =>>>
heading.textContent = "Which is my favourite programming language : ";

for (let option of options) {
  let opt = document.createElement("option");
  opt.textContent = option;
  select.append(opt);
}

// Appending all data to Rendering on div : =>>>
container.append(heading);
container.append(select);
