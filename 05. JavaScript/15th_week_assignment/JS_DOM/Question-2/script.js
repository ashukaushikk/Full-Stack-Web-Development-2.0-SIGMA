// Fetching Elements : =>>>
let body = document.querySelector('body');
let heading = document.querySelector('h1');
let toggleBtn = document.querySelector('button');

// Adding Event Listner : =>>>
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.getAttribute('class') === 'dark-mode') {
    heading.textContent = 'This is Dark mode';
  } else {
    heading.textContent = 'This is Light mode';
  }
});
