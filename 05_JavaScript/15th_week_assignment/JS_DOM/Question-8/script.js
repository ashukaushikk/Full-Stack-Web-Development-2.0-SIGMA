// Fetching Elements : =>>>
let container = document.querySelector(".time-container");
let hourBox = document.querySelector(".hour");
let minBox = document.querySelector(".min");
let secBox = document.querySelector(".sec");
let periods = document.querySelector(".period");

const getColor = () => {
  const randomNumber = Math.floor(Math.random() * 16777215);
  const randomCode = "#" + randomNumber.toString(16);
  container.style.backgroundColor = randomCode;
};

// Function to render time : =>>>
let showTime = () => {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  // Check if it's PM (hour >= 12), and adjust the hour and period accordingly
  if (hour >= 12) {
    periods.textContent = "PM";
    if (hour > 12) {
      hour -= 12;
    }
  }

  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }

  hourBox.textContent = hour;
  minBox.textContent = minute;
  secBox.textContent = second;

  getColor(`#${hour}${minute}${second}`);
};

// Setting interval to call func on every 1 sec automatically : =>>>
setInterval(showTime, 1000);
