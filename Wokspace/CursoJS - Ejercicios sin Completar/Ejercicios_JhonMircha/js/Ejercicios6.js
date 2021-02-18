// Programar funcion que dada una cadena de texto cuente el numero de vocales y consonantes 

function VocalesyConsonantes(cadena) {
let vocales = ["a","e","i","o","u"];
let contadorv = 0;
let consonantes = 0;
let resultado =0;
let lencadena=0;
let newcadena = cadena.replace(/\s/g, "");
lencadena = newcadena.length;
for (let i = 0; i < newcadena.length; i++) { 
  for (let e = 0; e < vocales.length; e++) {
    if(newcadena[i] === vocales[e] ){
     contadorv = contadorv +1;
    }
  }
}

resultado = lencadena - contadorv ;

console.log("El total de Vocales es: " + contadorv + " El total de Consonantes es: "+ resultado) ;   
}

VocalesyConsonantes("Hola Mundo");

// Funcion para validar un nombre

function ValidaNombre(nombre) {
let  resultado = /^[a-zA-Z ñÑ]+$/.test( nombre );
if (resultado === true){
  console.log("El nombre es valido")
}
else {
  console.log("El nombre no es valido")
}
}

ValidaNombre("3883949")

//Funcion para validar un correo
function emailIsValid (email) {
 res = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
 if (res === true){
   console.log("EL correo es válido!");
 }
 else{console.log("El correo no es válido")}
}

emailIsValid("mauricio.sislm@gmail.com");
