const time = document.getElementById("time");
const ampm = document.getElementById("ampm");
const dateElement = document.getElementById("date");

function clock() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();


  if (minutes < 10) {
    minutes = "0" + minutes;
  } 

  if (seconds < 10) {
    seconds = "0" + seconds;
  } 


  if (date.getHours() >= 12) {
    ampm.innerHTML = "PM";
  } else {
    ampm.innerHTML = "AM";
  }

  if (hours > 12) {
    hours -= 12;
  }
  if(hours < 12) {
    hours = "0" + hours;
  }

  time.innerHTML = `${hours}:${minutes}:${seconds}`;

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayOfMonth = date.getDate();
  const year = date.getFullYear();
  const weekDay = days[date.getDay()];
  const month = months[date.getMonth()];
  dateElement.innerHTML = `${weekDay}, ${dayOfMonth} ${month} ${year}`;
}

clock();

setInterval(clock, 1000);
