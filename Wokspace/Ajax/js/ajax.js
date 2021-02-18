(()=> { //XMLHTTPREQUEST
const xhr = new XMLHttpRequest(),
  $xhr = document.getElementById("xhr"),
  $fragment = document.createDocumentFragment(); // Se instancia variable XML y ID del DOM
xhr.addEventListener("readystatechange", e =>{
  if(xhr.readyState !== 4) return;
  //console.log(xhr);

  if(xhr.status >= 200 && xhr.status < 300){
    //console.log("Se consultó el api satisfactoriamente.")
    let json = JSON.parse(xhr.responseText);
    //console.log(json);
    json.forEach(el => {
      const $li = document.createElement("li");
      $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
      $fragment.appendChild($li);
    });

    $xhr.appendChild($fragment);

  } else{
    console.log("Se presentó un error al consultar el API revisa que esté bien el Endpoint y el código de Estatus en la consola")
    let message = xhr.statusText   || "Ocurrió un error al consultar el API"
    $xhr.innerHTML = `Error: ${xhr.status} : ${xhr.message}`; 
  }

}); // Agregar Event Listener

xhr.open("GET", "https://jsonplaceholder.typicode.com/users"); // Abrir el eventio mediante una acción PUT, POST, GET, HEAD.
xhr.send(); // Consumo de Datos

})();

(() => { // FETCH
const $fetch = document.getElementById("fetch");
 const $fragment = document.createDocumentFragment(); // Se instancia variable XML y ID del DOM

fetch("https://jsonplaceholder.typicode.com/users")
.then((res) => (res.ok ? res.json() : Promise.reject(res))) 
.then((json) =>{
  //console.log(json);
  //$fetch.innerHTML = json;
   json.forEach(el => {
      const $li = document.createElement("li");
      $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
      $fragment.appendChild($li);
    });

    $fetch.appendChild($fragment);
})

.catch((err) => {
    console.log(err);
    let message = err.statusText   || "Ocurrió un error al consultar el API";
    $fetch.innerHTML = `Error: ${err.status} : ${message}`; 
})

/* .finally(() => 
  console.log(
    "Esto se ejecuta independientemente de la respuesta FETCH"
    )
); */
})();

(() => { //FETCH CON ASYNCAWIAIT

  //Variables del DOM//
const $fetchasync = document.getElementById("fetch-async"),
$fragment = document.createDocumentFragment(); 

//Petición FETCH API FAKE // 
async function getData() { // Generamos una nueva función la cual consulta el API

try { // Try funciona como las promesas en su parte TRUE o Positiva en este caso los AWAITS nos funcionan para esperar la respuesta del servidor antes de ejecutar la siguiente linea de código. 
let res = await fetch("https://jsonplaceholder.typicode.com/users"),  // Consultamos al Servidor por los datos de la API
  json = await res.json(); // La respuesta la convertimos en formato JSON.
  //console.log(res,json);

if(res.ok === false) throw {status: res.status , statusText: res.statusText} //Validación para el manejo de errores en CATCH

     json.forEach(el => { //Funcion para imprimr los datos dentro del ELEMENTO OL en nuestro HTML. 
      const $li = document.createElement("li");
      $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
      $fragment.appendChild($li);
    });

    $fetchasync.appendChild($fragment); // Hacemos la incersión en el dom una vez concluya la consulta.
  
} catch (err) { // Manejo personalizado del error. 
    let message = err.statusText   || "Ocurrió un error al consultar el API";
    $fetchasync.innerHTML = `Error: ${err.status} : ${message}`; 
}

finally{ // Ejecución del código sin importar TRY O CATCH esto siempre se ejecutará después del TRY o el CATCH
//console.log("Recordemos que esto se ejecuta siempre.")
}

}

getData(); //Ejecucion de la Funcion

//
})();

(() => { // AXIOS
  const $axios = document.getElementById("axios"),
  $fragment = document.createDocumentFragment();
  axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then(res => {
    //console.log(res);
    let json = res.data;
 
    json.forEach(el =>{
      const $li = document.createElement("li");
      $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
      $fragment.appendChild($li);
    });
    $axios.appendChild($fragment);
  })
  .catch(err => {
    console.log(err.response);
      let message = err.response.statusText   || "Ocurrió un error al consultar el API";
    $axios.innerHTML = `Error: ${err.response.status} : ${message}`; 
  } )
  .finally(() => {
   //console.log("Esto siempre se ejecuta");
  });
})(); 

(() => { // AXIOS ASYNC
  const $axiosAsync = document.getElementById("axios-async"),
  $fragment = document.createDocumentFragment();

async function getDatos() {
  try {
     let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
     json = await res.data();
      
     
     //console.log(res, json);

  json.forEach(el => {
      const $li = document.createElement("li");
      $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
      $fragment.appendChild($li);
    });
    
    $axiosAsync.appendChild($fragment);

  } catch (err) { // Manejo personalizado del error. 
    let message = err.response.statusText   || "Ocurrió un error al consultar el API";
    $axiosAsync.innerHTML = `Error: ${err.status} : ${message}`; 
}

finally{ // Ejecución del código sin importar TRY O CATCH esto siempre se ejecutará después del TRY o el CATCH
console.log("Recordemos que esto se ejecuta siempre.");
  }
}

getDatos();


})();