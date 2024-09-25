const weather = async () => {
  let request =
    await fetch`https://api.openweathermap.org/data/2.5/weather?id=1255364&appid=b73378fd20b41837f81c33ea65589084&units=metric`;
  let response = await request.json();
  displayWeather(response);
};

weather();
let unitToggle
const displayWeather = (data) => {
  document.getElementById("city").innerHTML = data.name + ", IN";

  unitToggle=Math.round(data.main.temp)
  document.getElementById("temperature").innerHTML = `${unitToggle}<span class="degree">°C</span><span class="degree">|</span><span class="degree-f">°F</span>`;

  document.getElementById("description").innerHTML= data.weather[0].description;
  
  document.getElementById( "weather-icon" ).src = `img/clear-sky.png`;
  
  document.getElementById("humidity").innerHTML = `Humidity: ${data.main.humidity}%`;
  
  document.getElementById("wind").innerHTML = `Wind: ${data.wind.speed} m/s`;
  
  document.getElementById("high").innerHTML = `High: ${Math.round(data.main.temp_max)}°C`;
 
  document.getElementById("low").innerHTML = `Low: ${Math.round(data.main.temp_min )}°C`;

  document.querySelector(".degree-f").addEventListener("click", Fahrenheit);
  document.querySelector(".degree").addEventListener("click", Celsius);
};

// °F = °C × (9/5) + 32

const Fahrenheit=()=>{
  let fahrenheit=unitToggle*(9/5)+32
  document.querySelector(".degree-f").innerHTML = `${Math.round(fahrenheit)}°F`;
}
const Celsius=()=>{
  let celsius=unitToggle
  document.querySelector(".degree").innerHTML = `${Math.round(celsius)}°C`;
}
const clock = () => {
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
    else if (hours === 0) {
      hours = 12; 
    }
    if(hours < 10) {
      hours = "0" + hours;
    }
  
    time.innerHTML = `${hours}:${minutes}:${seconds}`;
  
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();
    const weekDay = days[date.getDay()];
    const month = months[date.getMonth()];
    document.getElementById("date").innerHTML = `${weekDay}, ${dayOfMonth} ${month} ${year}`;
};

clock();
setInterval(clock, 1000);



