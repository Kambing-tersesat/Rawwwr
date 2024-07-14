function updateTime() {
  const now = new Date();

  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  let greeting;
  if (hours < 12) {
    greeting = "Good morning";
  } else if (hours < 17) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  const greets = `${greeting} ${name}`;
  const formattedTime = `it is ${hours}:${minutes}:${seconds} on ${month}/${day}/${year}`;

  document.getElementById("time").innerHTML = formattedTime;
  document.getElementById("greet").innerHTML = greeting;
}
updateTime();
setInterval(updateTime, 1000);
