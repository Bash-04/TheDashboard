function displayCurrentTime() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    hours = addZero(hours);
    minutes = addZero(minutes);
  let timeString = `${hours} : ${minutes}`;
  document.getElementById("time").innerText = timeString;
    let timer = setTimeout(displayCurrentTime, 2000);
  }
  function addZero(component) {
    return component < 10 ? "0" + component : component;
  }
  displayCurrentTime();
