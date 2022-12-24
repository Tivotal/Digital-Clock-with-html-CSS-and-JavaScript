function updateTime() {
  const timer = document.querySelector(".timer");

  let hour = new Date().getHours();
  let min = new Date().getMinutes();
  let sec = new Date().getSeconds();

  let suffix = hour >= 12 ? "PM" : "AM";

  hour < 12 ? (hour = hour) : hour - 12;
  hour < 10 ? (hour = "0" + hour) : hour;
  min < 10 ? (min = "0" + min) : min;
  sec < 10 ? (sec = "0" + sec) : sec;

  timer.textContent = hour + ":" + min + ":" + sec + " " + suffix;
}

window.setInterval(updateTime, 1000);
