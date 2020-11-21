//15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
function binario_decimal(n,b){
    if(b === 2){
        console.log("El número decimal " + n + " Es igual en binario a " + n.toString(2));
    } else if(b === 10){
        console.log("El número binario " + n + " Es igual en decimal a " +parseInt(n,2));
    }
  


}

binario_decimal(00000000,10);

//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
function descuento(p,d){
let descuento = 0, multiplica=0, decimal=0;
decimal = d * 0.01;
multiplica = p * decimal;
total = p - multiplica;
console.log(total);
}
descuento(1000,20)

//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
