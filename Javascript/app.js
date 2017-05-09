//comentario 1 linea
/* comentarios mas lineas
 */

console.log('alguna cosa');

var objeto1={
    nombre: 'unnombre',
    apellido: 'unapellido',
    fecha: new Date(),
    imprimir: function (){
        console.log(this.nombre + ' '+  this.apellido);
},
    anio: function(){
        return this.fecha.getFullYear();
    },
    diferenciaedad: function (edad1) {
        return Math.abs(this.fecha.getFullYear()-edad1);
    }
}

objeto1.imprimir();
console.log(objeto1.anio());
console.log(objeto1.diferenciaedad(1995));