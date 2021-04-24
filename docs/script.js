function changeLetters() {
  var num = Math.floor(Math.random() * Math.floor(15));
  document.getElementById("L1").innerHTML = randomLetters(1 + num);
  player1.loopEnd = Math.min(Math.max(num * 0.01, 1), 9);
  player1.loopStart = Math.min(Math.max((getX(L1) * 0.01) - (num * 0.25), 0), 9);
  player1.playbackRate = getSpeed();
  player1.volume.value = ((getY(L1) * -1) * 0.08)*0.5;
}
function changeLetters2() {
  var num = Math.floor(Math.random() * Math.floor(15));
  document.getElementById("L2").innerHTML = randomLetters(1 + num);
  player2.loopEnd = Math.min(Math.max(getX(L2) * 0.01, 1), 9);
  player2.loopStart = Math.min(Math.max((getX(L2) * 0.01) - (num * 0.25), 0), 9);
  player2.playbackRate = getSpeed();
  player2.volume.value = ((getY(L2) * -1) * 0.08)*0.5;

}
function changeLetters3() {
  var num = Math.floor(Math.random() * Math.floor(15));
  document.getElementById("L3").innerHTML = randomLetters(1 + num);
  player3.loopEnd = Math.min(Math.max(getX(L3) * 0.01, 1), 10.5);
  player3.loopStart = Math.min(Math.max((getX(L3) * 0.01) - (num * 0.25), 0), 10.5);
  player3.playbackRate = getSpeed();
  player3.volume.value = ((getY(L3) * -1) * 0.08)*0.5;

}
function changeLetters4() {
  var num = Math.floor(Math.random() * Math.floor(15));
  document.getElementById("L4").innerHTML = randomLetters(1 + num);
  player4.loopEnd = Math.min(Math.max(num * 0.01, 1), 10);
  player4.loopStart = Math.min(Math.max((getX(L4) * 0.01) - (num * 0.25), 0), 10);
  player4.playbackRate = getSpeed();
  player4.volume.value = ((getY(L4) * -1) * 0.08)*0.5;
}
function changeLetters5() {
  var num = Math.floor(Math.random() * Math.floor(15));
  document.getElementById("L5").innerHTML = randomLetters(1 + num);
  player5.loopEnd = Math.min(Math.max(getX(L5) * 0.01, 1), 11);
  player5.loopStart = Math.min(Math.max((getX(L5) * 0.01) - (num * 0.25), 0), 11);
  player5.playbackRate = getSpeed();
  player5.volume.value = ((getY(L5) * -1) * 0.08)-10;

}
function changeLetters6() {
  var num = Math.floor(Math.random() * Math.floor(15));
  document.getElementById("L6").innerHTML = randomLetters(1 + num);
  player6.loopEnd = Math.min(Math.max(getX(L6) * 0.01, 1), 10.6);
  player6.loopStart = Math.min(Math.max((getX(L6) * 0.01) - (num * 0.25), 0), 10.6);
  player6.playbackRate = getSpeed();
  player6.volume.value = ((getY(L6) * -1) * 0.08)-10;

}
function changeLetters7() {
  var num = Math.floor(Math.random() * Math.floor(15));
  document.getElementById("L7").innerHTML = randomLetters(1 + num);
  player7.loopEnd = Math.min(Math.max(num * 0.01, 0), 9.4);
  player7.loopStart = Math.min(Math.max((getX(L7) * 0.01) - (num * 0.75), 0), 9.4);
  player7.playbackRate = getSpeed();
  player7.volume.value = ((getY(L7) * -1) * 0.08)*0.5;
}
function changeLetters8() {
  var num = Math.floor(Math.random() * Math.floor(15));
  document.getElementById("L8").innerHTML = randomLetters(1 + num);
  player8.loopEnd = Math.min(Math.max(getX(L8) * 0.01, 0.01), 10.3);
  player8.loopStart = Math.min(Math.max((getX(L8) * 0.01) - (num * 0.75), 0), 10.3);
  player8.playbackRate = getSpeed();
  player8.volume.value = ((getY(L8) * -1) * 0.08)*0.5;

}
function changeLetters9() {
  var num = Math.floor(Math.random() * Math.floor(15));
  document.getElementById("L9").innerHTML = randomLetters(1 + num);
  player9.loopEnd = Math.min(Math.max(getX(L9) * 0.01, 0.01), 10.5);
  player9.loopStart = Math.min(Math.max((getX(L9) * 0.01) - (num * 0.75), 0), 10.5);
  player9.playbackRate = getSpeed();
  player9.volume.value = ((getY(L9) * -1) * 0.08)*0.5;

}

//print random text to console
function randomLetters(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\|`~*&^%$#@!?/;:><.,`';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

function moveElmRand(elm){
 elm.style.position ='absolute';
 elm.style.top = Math.floor(Math.random()*90+5)+'%';
 elm.style.left = Math.floor(Math.random()*90+5)+'%';
}

var L1 = document.querySelector('#L1');
var L2 = document.querySelector('#L2');
var L3 = document.querySelector('#L3');
var L4 = document.querySelector('#L4');
var L5 = document.querySelector('#L5');
var L6 = document.querySelector('#L6');
var L7 = document.querySelector('#L7');
var L8 = document.querySelector('#L8');
var L9 = document.querySelector('#L9');
var L10 = document.querySelector('#L10');
var backgroundMusic = document.querySelector('#backgroundMusic');

L1.addEventListener('mouseenter', function(e){ moveElmRand(e.target);});
L2.addEventListener('mouseenter', function(e){ moveElmRand(e.target);});
L3.addEventListener('mouseenter', function(e){ moveElmRand(e.target);});
L4.addEventListener('mouseenter', function(e){ moveElmRand(e.target);});
L5.addEventListener('mouseenter', function(e){ moveElmRand(e.target);});
L6.addEventListener('mouseenter', function(e){ moveElmRand(e.target);});
L7.addEventListener('mouseenter', function(e){ moveElmRand(e.target);});
L8.addEventListener('mouseenter', function(e){ moveElmRand(e.target);});
L9.addEventListener('mouseenter', function(e){ moveElmRand(e.target);});


function getSpeed() {
  var speeds = [0.25, 0.5, 1, 2];
  let speed = speeds[Math.trunc(Math.random()*speeds.length)]
  return speed;
}

const background = new Tone.Player(
  "https://dylanburchett.github.io/7746-Repo/media/sounds/background.ogg",
  () => {
    background.start().connect(filter);
    background.loop = true;
    background.volume.value = -6;
  }
).toDestination();

const player1 = new Tone.Player(
  "https://dylanburchett.github.io/7746-Repo/media/sounds/clicks.ogg",
  () => {
    player1.start().connect(filter);
    player1.loop = true;
    player1.volume.value = -22;
  }
).toDestination();

const player2 = new Tone.Player(
  "https://dylanburchett.github.io/7746-Repo/media/sounds/noise.ogg",
  () => {
    player2.start().connect(filter);
    player2.loop = true;
    player2.volume.value = -12;
  }
).toDestination();

const player3 = new Tone.Player(
  "https://dylanburchett.github.io/7746-Repo/media/sounds/p1.ogg",
  () => {
    player3.start().connect(filter);
    player3.loop = true;
    player3.volume.value = -12;
  }
).toDestination();

const player4 = new Tone.Player(
  "https://dylanburchett.github.io/7746-Repo/media/sounds/p2.ogg",
  () => {
    player4.start().connect(filter);
    player4.loop = true;
    player4.volume.value = -12;
  }
).toDestination();

const player5 = new Tone.Player(
  "https://dylanburchett.github.io/7746-Repo/media/sounds/s1.ogg",
  () => {
    player5.start().connect(filter);
    player5.loop = true;
    player5.volume.value = -22;
  }
).toDestination();

const player6 = new Tone.Player(
  "https://dylanburchett.github.io/7746-Repo/media/sounds/s2.ogg",
  () => {
    player6.start().connect(filter);
    player6.loop = true;
    player6.volume.value = -22;
  }
).toDestination();

const player7 = new Tone.Player(
  "https://dylanburchett.github.io/7746-Repo/media/sounds/f1.ogg",
  () => {
    player7.start().connect(filter);
    player7.loop = true;
    player7.volume.value = -12;
  }
).toDestination();

const player8 = new Tone.Player(
  "https://dylanburchett.github.io/7746-Repo/media/sounds/f2.ogg",
  () => {
    player8.start().connect(filter);
    player8.loop = true;
    player8.volume.value = -12;
  }
).toDestination();

const player9 = new Tone.Player(
  "https://dylanburchett.github.io/7746-Repo/media/sounds/f3.ogg",
  () => {
    player9.start().connect(filter);
    player9.loop = true;
    player9.volume.value = -12;
  }
).toDestination();

const freeverb = new Tone.Freeverb(0.2).toDestination();
freeverb.dampening = 1000;
freeverb.roomSize = 1;

const filter = new Tone.Filter(5000, "highpass").toDestination();
filter.connect(freeverb);

function getX( el ) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return _x;
}

function getY( el ) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return _y;
}

function randomImage2() {
	var fileNames = [
    "https://dylanburchett.github.io/7746-Repo/media/photos/background.png",
		"https://dylanburchett.github.io/7746-Repo/media/photos/background1.png",
		"https://dylanburchett.github.io/7746-Repo/media/photos/background2.png",
		"https://dylanburchett.github.io/7746-Repo/media/photos/background3.png",
		"https://dylanburchett.github.io/7746-Repo/media/photos/background4.png",
		"https://dylanburchett.github.io/7746-Repo/media/photos/background5.png",
    "https://dylanburchett.github.io/7746-Repo/media/photos/background6.png",
    "https://dylanburchett.github.io/7746-Repo/media/photos/background7.png",
    "https://dylanburchett.github.io/7746-Repo/media/photos/background8.png",
    "https://dylanburchett.github.io/7746-Repo/media/photos/background9.png"
	];
	var randomIndex = Math.floor(Math.random() * fileNames.length);
	document.getElementById("background2").style.background =
		"url(" + fileNames[randomIndex] + ")";
}

function startAll() {
  Tone.start();
  setInterval(randomImage2, 50);
  document.querySelector('#startPage').classList.add('invisible');
  onmousemove = function(e){
  var pos = e;
  var dot;
  dot = document.createElement('div');
  dot.className = "dot";
  dot.style.left = pos.x + "px";
  dot.style.top = pos.y + "px";
  document.body.appendChild(dot);
  filter.frequency.value = Math.min(Math.max(pos.x, 1), 1000);
  filter.Q.value = Math.min(Math.max(pos.y * 0.0001, 0.1), 0.25);
  if (pos.y < 250){
    background.playbackRate = 0.75;
  } else if (pos.y > 250 && pos.y < 600){
    background.playbackRate = 1.0;
  } else {
    background.playbackRate = 2.0;
  }
}
}