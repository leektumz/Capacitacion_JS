// Ejercicio 1 
// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

console.log("Ejercicio 1:");
function cuenta(){
    console.log("El total de caracteres de esta cadena es: " + cadena.length);    
}

let cadena = prompt('Inserta una cadena de caracteres');



if (typeof cadena === 'string') { cuenta(cadena); }
else
{
console.log("Eso no es una cadena");
}

// Ejercicio 2 
//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

console.log("Ejercicio 2: ");
function corta_cadena(numero_cortar){
console.log(cadena.slice(0,numero_cortar));
}

corta_cadena(4);

// Ejercicio 3 
//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
console.log("Ejercicio 3:");

function separa_cadena(cadena , separador){
let arre = cadena.split(" ");
console.log(arre);
}

separa_cadena(cadena, " ");

// Ejercicio 4
//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. -->
console.log("Ejercicio 4:");


function repito(cadena, numrep){
    if(numrep <= 0 || cadena === "" || numrep === undefined){
        console.log("Error en los parametros de entrada Cadena no puede venir vacía y numero de repeticiones no puede ser menor a 0 o el numero de repeticiones no viene definido en la función");
    }
    
    else {console.log(cadena.repeat(numrep));}
}


repito("Hola");
