// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

console.log(Math.pow(2, 100)); 

function BinarioaDecimal(){

}

// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

function descuento(p,d){
    let resultado = 0, decimal= 0, mult = 0;
    decimal = d * .01;
    mult = p * decimal;
    resultado = p - mult;
    console.log("El precio "+ p + " con un descuento de " + d + "%" + " es de resultado: " + resultado);
}

descuento(2050,50);
// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

function DiferenciaDeTiempo(fecha) {
  let año = fecha.getFullYear();
  let diferencia = 2020;
  let resultado =  diferencia - año;
  console.log(resultado);
}

DiferenciaDeTiempo(new Date(1984,4,23));
