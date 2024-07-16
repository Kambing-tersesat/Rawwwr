function updateTime() {

const now = new Date();


const year = now.getFullYear();

const month = now.getMonth() + 1;

const day = now.getDate();

const hours = now.getHours();

const minutes = String(now.getMinutes()).padStart(2, "0");

const seconds = String(now.getSeconds()).padStart(2, "0");


let greeting;
  if (hours === 5 && minutes < 60) {
    greeting = "Wake up Sleepyhead";
  } else if (hours >= 6 && hours < 12) {
    greeting = "Good morning";
  } else if (hours >= 12 && hours < 18) {
    greeting = "Good afternoon";
  } else if (hours >= 18 && hours < 22) {
    greeting = "Good evening";
  } else if (hours === 22) {
    greeting = "Still awake ?, Go to sleep dumbass";
  } else if (hours >= 23 || hours < 4) {
    greeting = "Good Night, Rawwwrr";
  } else if (hours === 4) {
    greeting = "The Dawn Will Rise";
  }

const greets = `${greeting}`;

const formattedTime = `it is ${hours}:${minutes}:${seconds} on ${month}/${day}/${year}`;


document.getElementById("time").innerHTML = formattedTime;

document.getElementById("greet").innerHTML = greeting;

}

updateTime();

setInterval(updateTime, 1000);

  
