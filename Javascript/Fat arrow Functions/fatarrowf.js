//Fat arrow functions
//No se usa la palabra reservada function solo (), fat arrow viene del nombre del simbolo
// => return

var holi = function(){ console.log('holis')}
holi()

var holis2= ()=>{ return 'wolo'}
//holis2()

var holis3 = ()=> holis2()
//holis3()

var holis4 =(nombre, apellido) => `Wolo ${nombre} ${apellido}`

holis4('alguien','alguienapellido')
