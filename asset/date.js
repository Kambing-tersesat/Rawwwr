function updateTime() {
  const now = new Date();

  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  let greeting;
  if (hours < 5) {
    greeting = "Wake up Sleepyhead";
  }
  else if (hours < 7) {
    greeting = "Good morning";
  }
   else if (hours < 15) {
    greeting = "Good afternoon";
  } else if (hours <= 20){
    greeting = "Good evening";
  }
  else if(hours >= 22){
    greeting = "Still awake ?, go to bed baby"
  }
  else{
    greeting = "Good Night, Rawwwrr"
  }

  const greets = `${greeting}`;
  const formattedTime = `it is ${hours}:${minutes}:${seconds} on ${month}/${day}/${year}`;

  document.getElementById("time").innerHTML = formattedTime;
  document.getElementById("greet").innerHTML = greeting;
}
updateTime();
setInterval(updateTime, 1000);
