const d = document;

export function digitalClock (clock,btnPlay,btnStop) {
let comienzo;
  d.addEventListener("click", e=>{
  if(e.target.matches(btnPlay)){
comienzo = setInterval(() => {
  let clockHour = new Date().toLocaleTimeString();
  d.querySelector(clock).innerHTML = `<h3> ${clockHour} </h3>`;
}, 1000);
e.target.disabled = true;
}

if(e.target.matches(btnStop)){
clearInterval(comienzo);
d.querySelector(clock).innerHTML = null;
document.querySelector(btnPlay).disabled = false;
}

})
}


export function Alarm (sound,btnPlay,btnStop) {
let alarma;

const $alarm = d.createElement("audio");

$alarm.src = sound;

d.addEventListener("click", e =>{
if(e.target.matches(btnPlay)){
alarma = setTimeout(() => {
  $alarm.play();
}, 2000);
e.target.disabled = true;

}
if(e.target.matches(btnStop)){
clearTimeout(alarma); 
$alarm.pause();
document.querySelector(btnPlay).disabled  = false;
$alarm.currentTime = 0;
}

})
}