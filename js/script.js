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
var lang = 'eng';
function changeLang(typ){
if(typ=='eng'){
  document.getElementById("play").style.display = "none";
  document.getElementById("pause").style.display = "block";
  // document.getElementById("myForm").style.display = "none"
  // document.getElementById("cf").style.display = "block";

    $("#cf").load("#cf");

}
else{
  document.getElementById("play").style.display = "block";
  document.getElementById("pause").style.display = "none";
  switchLng()
}
  

}
function selectLang(lng) {
  lang = lng;
  document.getElementById("myForm").style.display = "none"
  document.getElementById("cf").style.display = "block";
  if(lng=='hin'){
    switchLng()
  }
}
function switchLng(){
  document.getElementById("grmName").innerHTML = "रोहित";
  document.getElementById("grmName").style.fontFamily = 'Kalam';
  document.getElementById("brdName").innerHTML = "मनिता";
  document.getElementById("brdName").style.fontFamily = 'Kalam';
  document.getElementById("getMarry").innerHTML = "शादी कर रहे हैं";
  document.getElementById("getMarry").style.fontFamily = 'Ranga';
  document.getElementById("getMarry").style.fontSize = '50px';
  document.getElementById("vdet").innerHTML = "27 फरवरी 2023 को बंशी भवन, प्रयागराज, उत्तर प्रदेश में";
  document.getElementById("vdet").style.fontFamily = 'Pragati Narrow';
  document.getElementById("vdet").style.fontSize = '30px';  
  document.getElementById("countdownHead").innerHTML = "शादी के लिए बचा समय";
  document.getElementById("countdownHead").style.fontFamily = 'Inknut Antiqua';
  document.getElementById("countdownHead").style.fontSize = '20px';
  document.getElementById("daysHead").innerHTML = "जब तक हम पति और पत्नी नहीं बन जाते "+"<span><img class='ring' src='./assets/img/ring.png' alt=''></span>";
  document.getElementById("daysHead").style.fontFamily = 'Inknut Antiqua';
  document.getElementById("daysHead").style.fontSize = '20px';
  document.getElementById("venueBut").innerHTML = "शादी के लिए जगह";
  document.getElementById("venueBut").style.fontFamily = 'Yantramanav';
  document.getElementById("dineAndDance").innerHTML = "आते समय अपने डांसिंग शूज़ लेकर आएं";
  document.getElementById("dineAndDance").style.fontFamily = 'Kalam';
  document.getElementById("dineAndDance").style.fontSize = '25px';
  document.getElementById("inv").innerHTML = "परमपिता परमात्मा की कृपा से,<br/>हम आपको और आपके परिवार को हमारी शादी में सादर आमंत्रित करते हैं,<br/>हम अपने परिवार के शुभ अवसर पर आपकी उपस्थिति का बेसब्री से इंतजार करेंगे।";
  document.getElementById("inv").style.fontFamily = 'Poppins';
  document.getElementById("inv").style.fontSize = '20px';
  document.getElementById("inv").style.fontWeight = 'bold';
  if(new Date("Oct 28, 2022 11:30:00").getTime() - new Date().getTime() > 0){
    document.getElementById("getMarry").innerHTML = "सगाई कर रहे हैं";
    document.getElementById("getMarry").style.fontFamily = 'Ranga';
    document.getElementById("getMarry").style.fontSize = '50px';
    document.getElementById("vdet").innerHTML = "28 अक्टूबर 2022 को त्रिवेणी दर्शन, प्रयागराज, उत्तर प्रदेश में";
    document.getElementById("vdet").style.fontFamily = 'Pragati Narrow';
    document.getElementById("vdet").style.fontSize = '30px';  
    document.getElementById("countdownHead").innerHTML = "सगाई के लिए बचा समय";
    document.getElementById("countdownHead").style.fontFamily = 'Inknut Antiqua';
    document.getElementById("countdownHead").style.fontSize = '20px';
    document.getElementById("daysHead").innerHTML = "दिन जब तक हम दोनों मंगेतर नहीं बन जाते "+"<span><img class='ring' src='./assets/img/ring.png' alt=''></span>";
    document.getElementById("daysHead").style.fontFamily = 'Inknut Antiqua';
    document.getElementById("daysHead").style.fontSize = '20px';
    document.getElementById("dineAndDance").innerHTML = "आते समय अपने डांसिंग शूज़ लेकर आएं";
    document.getElementById("dineAndDance").style.fontFamily = 'Kalam';
    document.getElementById("dineAndDance").style.fontSize = '25px';
    document.getElementById("venueBut").innerHTML = "सगाई की जगह";
    document.getElementById("venueBut").style.fontFamily = 'Yantramanav';
    document.getElementById("inv").innerHTML = "परमपिता परमात्मा की कृपा से,<br/>हम आपको और आपके परिवार को हमारी सगाई में सादर आमंत्रित करते हैं,<br/>हम अपने परिवार के शुभ अवसर पर आपकी उपस्थिति का बेसब्री से इंतजार करेंगे।";
    document.getElementById("inv").style.fontFamily = 'Poppins';
    document.getElementById("inv").style.fontSize = '20px';
    document.getElementById("inv").style.fontWeight = 'bold';
  }
  document.getElementById("inviteBut").innerHTML = "निमंत्रण कार्ड डाउनलोड करें";
  document.getElementById("inviteBut").style.fontFamily = 'Yantramanav';
  document.getElementById("happ").innerHTML = "कृपया हमारी खुशी में शामिल हों!";
  document.getElementById("happ").style.fontFamily = 'Rozha One';
  document.getElementById("happ").style.fontSize = '30px';
  document.getElementById("fff").innerHTML = "आपके साथ हमारे परिवार के शुभ क्षण का जश्न मनाने के लिए इंतजार नहीं कर सकता!<br/>किसी भी प्रश्न के लिए बस एक पिंग दूर: 6033174520";
  document.getElementById("fff").style.fontFamily = 'Teko';
  document.getElementById("fff").style.fontSize = '30px';

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
  document.getElementById("myForm").style.display = "block";
  document.getElementById("cf").style.display = "none";
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
let audio = "my_audio";
if (new Date("Oct 28, 2022 11:30:00").getTime() - new Date().getTime() > 0) {
  audio = "engageAudio"
}
document.getElementById(audio).play();
$(document).on('click', function () {
  document.getElementById(audio).play();
  console.log('Shaadi me zaroor aana');
});


function playAudio() {
  document.getElementById("play").style.display = "none";
  document.getElementById("pause").style.display = "block";
  document.getElementById(audio).play();
}

function pauseAudio() {
  document.getElementById("play").style.display = "block";
  document.getElementById("pause").style.display = "none";
  document.getElementById(audio).pause();
}
// Set the date we're counting down to
var countDownDate = new Date("Oct 28, 2022 11:30:00").getTime();
// Update the count down every 1 second
var x = setInterval(function () {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  if (distance < 0) {
    countDownDate = new Date("Feb 27, 2023 22:30:00").getTime();
    distance = countDownDate - now;
    if(lang=='eng'){
      document.getElementById("impDate").innerHTML = "27 February 2023"
      document.getElementById("impVenue").innerHTML = "Banshi Bhawan"
      document.getElementById("venueLink").href = "https://goo.gl/maps/D53P8NLc4688vte59"
      document.getElementById("getMarry").innerHTML = "Are getting married"
      document.getElementById("countdownHead").innerHTML = "Wedding countdown"
      document.getElementById("mrAndMrs").style.display = "block";
      document.getElementById("daysHead").style.display = "none";
      document.getElementById("engage").innerHTML = "wedding"
      document.getElementById("dineAndDance").innerHTML = "dinner & dancing to follow"

    }
  }
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
  document.getElementById("time").innerHTML = "<div class='container'>" +
    "<span class='block'>" + "<span class='timeUnit'>" + daysNo.join("</span><span class='timeUnit'>") + "</span>" + "<br><br><center><label id='timeLabel'>Days</label></center>" + "</span>" +
    "<span class='block'>" + "<span class='timeUnit'>" + hoursNo.join("</span><span class='timeUnit'>") + "</span>" + "<br><br><center><label id='timeLabel'>Hours</label></center>" + "</span>" +
    "<span class='block'>" + "<span class='timeUnit'>" + minutesNo.join("</span><span class='timeUnit'>") + "</span>" + "<br><br><center><label id='timeLabel'>Mins</label></center>" + "</span>" +
    "<span class='block'>" + "<span class='timeUnit'>" + secondsNo.join("</span><span class='timeUnit'>") + "</span>" + "<br><br><center><label id='timeLabel'>Secs</label></center>" + "</span>" + "</div>"


  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("getMarry").innerHTML = "Just got married"
    document.getElementById("time").innerHTML = "Bless the married couple for happy life!";
    document.getElementById("timeHead").style.display = 'none';
    document.getElementById("time").style.marginTop = '-20px';
    document.getElementById("time").style.marginBottom = '30px';
    document.getElementById("dineAndDance").style.display = 'none';
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
