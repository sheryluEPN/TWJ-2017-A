// las funciones se definen con parentesis y llaves, se puede pedir parametros
function holo() {
    console.log('yellowwww');
};
holo();
function eldoble(numero) {
    return numero*2;
}
eldoble(5);

function multiplicar(a,b) {
    return a*b;
}

multiplicar(1,2);
var respaldoMultiplicar = multiplicar;
console.log(respaldoMultiplicar(3,5));

var otrohola = function () {
    console.log('ya dije hola');
}
otrohola();
console.log('otro', otrohola);

function hazAlgo(algo) {
    algo()
}
hazAlgo(function () {
    console.log('alguito');
});

function transformar(numero,transformacion) {
transformacion(numero);
}
transformar(2, function (numero) {
    return numero*2;
});
transformar(4, function (numero) {
    return numero /3;
});