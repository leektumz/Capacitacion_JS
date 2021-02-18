//Programar una función que dado un Array devuelva un nuevo Array con los números elevados al cuadrado.
function CuadradoArray(arreglo){
let emptyarr=[]
for (let i = 0; i < arreglo.length; i++) {
emptyarr[i] = arreglo[i]  * arreglo[i];
  
}
console.log(emptyarr);
}

CuadradoArray([1,4,5])

//Programa una Funcion que devuelva los el número más alto y el número más bajo de un arreglo en un nuevo arreglo.
function NumeroAltoyBajo(arreglo) {
let maximo = Math.max(...arreglo);
let minimo = Math.min(...arreglo);
console.log("Maximo " + maximo +" Minimo " + minimo)
}

NumeroAltoyBajo([1,2,3,4,5,30,90])

function ParesImpares(arreglo) {
 let objeto = {
   pares : [ ],
   impares : [ ]
 } 

for (let i = 0; i < arreglo.length; i++) {
if(arreglo[i] % 2 === 0){
  objeto.pares.push(arreglo[i]);
}
else{
  objeto.impares.push(arreglo[i]);
}
}
console.log(objeto);
}

ParesImpares([1,2,3,4,5,6,7,8,9,0])