//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
console.log("Ejercicio 5");

function reversa(s){
    if(s === "" || s === undefined || s === " "){
        console.log("Por Favor ingresa una cadena de texto no vacía");
    }
    else

    console.log("La String que ingresaste fué: "+ s + " " + "y volteada es " + s.split("").reverse().join(""));
}

reversa("Hola Mundo");

//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
console.log("Ejercicio 6");

function Cuenta_Palabras(p,re){
let arreglo = p.split(" ");
let contador = 0;
arreglo.forEach(element => {
    if (element === re) {
        contador = contador+1;
    }
});
console.log(contador);
}

Cuenta_Palabras("Hola mundo mundo mundo mundo mundo mundo", "mundo");

//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
console.log("Ejercicio 7");

function reversa_if(s){

    let nospace = s.replace(/\s+/g, '');
    let nospace_lowcase = nospace.toLowerCase();
    
    if(s === "" || s === undefined || s === " "){
        console.log("Por Favor ingresa una cadena de texto no vacía");
    }
    else if(nospace_lowcase.split("").reverse().join("") === nospace_lowcase){
        console.log("La palabra " + s + " es un palindromo.")
    }
    else{
    console.log("La palabra " + s + " no es un palindromo");
    
}

}
reversa_if("Aassmad a la dama");


//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
console.log("Ejercicio 8 - Uso de función Replace mediante REGEX");
var replace = "regex";
var re = new RegExp(replace,"g");
function Elimina_Patron(p,re){
console.log(p.replace(/xyz/g,""));
}


Elimina_Patron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");


//Dudas que me surgieron de este ejercicio. ¿Cómo asignar una expresion regulara a una variable y usar la bandera 'g' global. 
 