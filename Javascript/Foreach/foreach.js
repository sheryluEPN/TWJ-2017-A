// FOR EACH
// OPERADORES
let arregloNumeros = [1,2,3,4,5,6];

let resultado = arregloNumeros.forEach((numero,indice)=>{
        console.log(indice,numero);
})

console.log('Resultado:',resultado)
//forEach es usado para ejecutar código
//el nùmero de veces de un arreglo

elementos.forEach(function(value, key) {
    console.log("value",value)
    console.log("key",key)
});

function myforeach(arreglo, funcion){
    for(var i=0; i< arreglo.length; i++){
        funcion(i, arreglo[i], arreglo);
    }
}
foreach(elementos, (indice, valor)=> {
    console.log('este es un indice:'+indice+' este es el valor:'+valor)});






