// Asincronía en JS

console.log("Bienvenido al Sistema de Asincronía");

//setTimeout Nos permite tener un temporizador el cuál al llegar a su fin ejecuta una linea de código una sola vez.

// setTimeout(() => {   console.log("Han pasado 3 segundos"); }, 3000);
// setInterval(() => { console.log("Simulación de Ejecución Asyncrona");
  
// }, 1000);

// setInterval nos permite crear un intervalo de tiempo en el que una función o bloque de código se está ejecutando.

// setInterval(() => {
//   console.log("Este es un intervalo de 4 Segundos");
// }, 4000);

// En JavaScript Existe algo llamado EventLoop, el cuál es un Loop de Eventos, para entender mejor su funcionamiento vamos a poner algunos ejemplos.  

//Procesamiento Single Thread y Multi Thread -> Hilo único o Muchos hilos como los procesadores.

//JS es un lenguaje Single Thread. 

//JS trabaja bajo una filosofía llamada llamada LIFO (Last In First Out) -> Esto significa que La última en entrar es la primera en salir. 


// Operaciones de CPU y Operaciones Input OutPut -> JavaScript es un lenguaje de opreaciones InputOutput.

//Operaciones Bloqueantes y no Bloqueantes. 

//Operaciones Síncronas y Asícnronas

// Código síncrono bloqueante Ejemplo
(function () { 
console.log("Código Síncrono");

function dos() {
  console.log("Dos");
}

function uno(){
  console.log("Uno");
  dos();
  console.log("Tres");
}

uno();

console.log("fin");

})(
);


console.log("********* - *******");

//Código Asíncrono No bloqueante
(function () { 
console.log("Código Asíncrono");
console.log("Inicio");

function dos() {
 setTimeout(() => {
   console.log("Dos");
 }, 1000); 
}

function uno(){

  setTimeout(function () {
    console.log("Uno");
  }, 0);
  
  dos();
   console.log("Tres");
}
uno();
console.log("Fin");





})();





