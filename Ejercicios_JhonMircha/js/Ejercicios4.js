// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
function primo(n){
let primo = true;

for (let index = 2; index < n; index++) {
    if(n % index === 0){
        primo=false;
    }
    
}

if(primo === false){
console.log("No es primo");
}
else{console.log("Es Primo");}

}
primo(8);
// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
function par_impar(n){
    if(n % 2 === 0 ){
        console.log("El número es Par");
    }
    else{
        console.log("El número es impar");
    }
}

par_impar(3);

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F

function grados_convert(g,v){
if(v === 'c' || v === 'C'){
    let resultado = (g * 1.8) + 32
    console.log(resultado);
} else if(v === 'f' || v === 'F'){
    let resultado = (g - 32) * 5/9
    console.log(resultado);
}


}

grados_convert(8400,"F");