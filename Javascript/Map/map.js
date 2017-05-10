//funcion map

let arreglo= [1,3,5,'a'];

let resultado = arreglo.map( (valor, indice)=>{
        return valor;
});

console.log(resultado);

let arreglo2=[
    { nombre: 'Nombre1'
    },
    { nombre: 'Nombre2'
    }];

let resultado2 = arreglo2.map( (valor)=> {
    valor.fechacreado = new Date();
valor.nombre = "Sr o Sra " + valor.nombre;
valor.anio = valor.fechacreado.getFullYear();
return valor;
});
console.log(resultado2);