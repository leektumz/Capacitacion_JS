const d = document, n = navigator;

export default function geoLocate() {
  if ("geolocation" in n){
    console.log("Geolocalización disponible");
  } else {
    console.log("Geolocalización no disponible");
  }

 var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;
  const $geo = d.getElementById("geo");

  $geo.innerHTML = `<p>Tu posición Actual es:</p>
  Latitud: ${crd.latitude} <br>
  Longitud: ${crd.longitude} <br>
  More or less: ${crd.accuracy} metros de presición<br>
  <a href='https://maps.google.com/?q=${crd.latitude},${crd.longitude}' >Ver en maps </a> `

  console.log('Your current position is:');
  console.log('Latitude : ' + crd.latitude);
  console.log('Longitude: ' + crd.longitude);
  console.log('More or less ' + crd.accuracy + ' meters.');



};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

navigator.geolocation.getCurrentPosition(success, error, options);




}