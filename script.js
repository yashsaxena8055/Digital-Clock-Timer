let a;
let date;
let time;
let ampm;
let hours;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

function resetFunction() {
  clearInterval(clr);
  document.getElementById("displayCountdown").style.fontSize = "50px";
  document.getElementById("displayCountdown").innerHTML = "Timer Reset";
}
setInterval(() => {

  a = new Date();


  hours = a.getHours()
  if (hours >= 12) {
    ampm = 'PM';
  }
  else {
    ampm = "AM";
  }
  hours = hours % 12;
  time = hours + ":" + a.getMinutes() + ":" + a.getSeconds();
  date = a.toLocaleDateString(undefined, options);
  document.getElementById('time').innerHTML = time + " " + ampm + " <br>On " + date;
}, 1000);


function timerStart() {

  let startingTimer = document.getElementById("timer").value;
  if (startingTimer <= 0) {
    alert("Please enter the number greater than zero!");

  }
  else {
    const countDown = document.getElementById("displayCountdown");
    let time = startingTimer * 60;
    window.clr = setInterval(updateCountdown, 1000);

    function updateCountdown() {



      const minutes = Math.floor(time / 60);
      let seconds = time % 60;
      countDown.innerHTML = minutes + ":" + seconds;
      time--;
      if (time == 0) {
        countDown.style.fontSize = "50px";
        countDown.innerHTML = "Times Up";
        clearInterval(clr);
        var audio = new Audio("end.mp4");
        audio.play();
      }
    }
  }
}
