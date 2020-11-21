
//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
function NumeroArbitriario(min,max){
return Math.random() * (max - min) + min;

}
let salida = NumeroArbitriario(501,600);
let resultado = Math.round(salida);
console.log(resultado);

//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

function EvaluaCapicua(n){
    if(typeof n === 'string'){
        console.log("Ingresaste Texto, ingresa un número webon");
    
        
    }
    let n_s = n.toString();
    n_s = n_s.split("").reverse().join("");
    let res = parseInt(n_s);
    if(res === n){
        console.log("El número " + n + " es capicua");
    } else{
        console.log("El número " + n + " no es capicua");
    }

}

EvaluaCapicua(11);

//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. 
function factorial(n){
let total = 1;
for (let index = 1; index <= n; index++) {
    total = total * index;
    
}
console.log(total)
}
factorial(5);