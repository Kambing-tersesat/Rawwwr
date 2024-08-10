function updateTime() {
  const now = new Date();

  const year = now.getFullYear();
  const month = now.toLocaleString('default', { month: 'long' });
  const day = now.getDate();
  const hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");

  let greeting;
  if (hours < 5) {
    greeting = "Wake up Sleepyhead";
  }
  else if (hours < 6) {
    greeting = "Good morning";
  }
   else if (hours < 12) {
    greeting = "Good afternoon";
  } else if (hours <= 18){
    greeting = "Good evening";
  }
  else if(hours >= 22){
    greeting = "Still awake ?, go to bed baby"
  }
  else{
    greeting = "Good Night, Rawwwrr"
  }

  const greets = `${greeting}`;
  const formattedTime = `it is ${hours}:${minutes} on ${month}/${day}/${year}`;

  document.getElementById("time").innerHTML = formattedTime;
  document.getElementById("greet").innerHTML = greeting;
}
updateTime();
setInterval(updateTime, 1000);
