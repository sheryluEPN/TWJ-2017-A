//filter
//find devuelve la primera ocurrencia del arreglo.
let notas=[7,7,7,4,10,9,8,8,8,9,10];
let notassuple= notas.map( (valor, indice) => {
        return valor/5;
}).filter( (valor) =>{
    return valor>1;}).find( (valor)=> {
    return valor>=1;
});
console.log(notassuple);