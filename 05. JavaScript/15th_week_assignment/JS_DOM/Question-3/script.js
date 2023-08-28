// Fetching Elements : =>>>
let decreaseBtn = document.querySelector('.decrease');
let increaseBtn = document.querySelector('.increase');
let displayer = document.querySelector('.value');
let counter = 0;

// Render Counter Value Function : =>>>
const showCountVal = () => {
  if (counter < 0) {
    alert('counter is going beyond 0');
  }
  displayer.textContent = counter;
};

// Adding Event Listners : =>>>
decreaseBtn.addEventListener('click', () => {
  counter--;
  showCountVal();
});

increaseBtn.addEventListener('click', () => {
  counter++;
  showCountVal();
});
