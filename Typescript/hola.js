/**
 * Created by USRDEL on 16/5/17.
 */
console.log('holo');
var holis = "sjfbsdjkbfsjbdfjv\nfsdf\ndsfsdf\ndfwewef\nbsdfjbsdfb";
console.log(holis);
//Tipos de datos
var unbooleano = true;
var unstring = "dfsdfsdfsdf";
var unnumero = 4.5;
var oracion = "un string simple es " + unstring + " \nun numerito mas otro " + (unnumero + 2);
console.log(oracion);
//arrays
var unalista = [1, 3, 6, 7, 8];
var otroarray = ["uno", "dos", "tres"];
var cualquiercosa = "esto";
cualquiercosa = 2;
var unusuario = {
    nombre: "alguien",
    apellido: "otroalguien"
};
var persona = (function () {
    function persona() {
        this.nombre = "algo";
    }
    persona.prototype.imprimirpersona = function () {
        console.log(this.nombre, this.apellido);
        this.imprimirapellido(this.apellido);
        return {
            nombre: this.nombre,
            apellido: this.apellido
        };
    };
    persona.prototype.imprimirapellido = function (apellido, nombre) {
        if (nombre) {
            console.log(apellido, nombre);
        }
        else {
            console.log(apellido);
        }
    };
    return persona;
}());
var unapersona = new persona();
unapersona.nombre = "nombresito";
unapersona.apellido = "apellidito";
var otrapersonita = unapersona.imprimirpersona();
console.log(otrapersonita);
//funciones
function Sumar(n1, n2) {
    return n1 + n2;
}
console.log(Sumar(4, 7));
