//variables: palabra reservada var
// int
var dos =2;
var tres=3;
var veinte = 20;

console.log(dos);
console.log(tres);
console.log(veinte);

//float

var algunfloat = 2.5;
var fecha = new Date();

var unjson={
    id: 1,
    nombre: 'alguna cosita',
    createdAt: new Date(),
    modifiedAt: new Date(),
    casado: true,
    prestamos: false,
    altura: 1.67,
    mascota:{
        id: 1,
        nombre: 'max'
    }
}
console.log(unjson, dos);
console.log(unjson.mascota.nombre);
unjson.casado= false;
console.log(unjson.casado);
unjson.prestamos= {
    id:1,
    monto: 1234
}
console.log(unjson.prestamos);
//undefined no borra el campo del json
unjson.altura= undefined;
console.log(unjson);
//borrando propiedades del json
delete unjson.altura;
console.log(unjson);

var arraycito=[
    dos,
    fecha,
    unjson,
    'algun stringcito',
    -1
];
console.log(arraycito);
var otrojson={
    papas: ['chola', 'chaucha', 'maria'],
    cebollas: ['perla','puerro', 'paiteña']
}
console.log(arraycito[1]);
var matriz= [[0,1], [2,3]];
console.log(matriz[0][0]);
console.log(otrojson.papas[1]);

var eljson=[
    {
        id: 1,
        nombre: 'unnombre'
    },
    {
        id:2,
        nombre: 'otronombre'
    }
];
// en splice el primer parametro es la posicion, el segundo es el numero de objetos a eliminar
eljson.splice(0,1);
console.log(eljson);
eljson.splice(0,0,{
    id: 3,
    nombre: 'algunnombre'
});
console.log(eljson);



