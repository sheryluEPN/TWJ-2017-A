/**
 * Created by USRDEL on 16/5/17.
 */
console.log('holo');

let holis = `sjfbsdjkbfsjbdfjv
fsdf
dsfsdf
dfwewef
bsdfjbsdfb`;
console.log(holis);
//Tipos de datos

let unbooleano: boolean= true;

let unstring: string = `dfsdfsdfsdf`;

let unnumero: number= 4.5;

let oracion: string = `un string simple es ${unstring} 
un numerito mas otro ${unnumero +2}`;

console.log(oracion);

//arrays
let unalista: number[]= [1,3,6,7,8];
let otroarray: Array<string> = [`uno`,`dos`, `tres`];

let cualquiercosa: any= `esto`;
cualquiercosa= 2;

//interfaces

interface UnLogin {
    nombre: string,
    apellido: string,
    direccion?: string
}

let unusuario: UnLogin = {
    nombre: "alguien",
    apellido: "otroalguien"
}

class persona {
    nombre: string= "algo";
    apellido: string;
    fechaNaciomiento: Date;
    constructor(){

    }
    imprimirpersona(): UnLogin{
        console.log(this.nombre, this.apellido);
        this.imprimirapellido(this.apellido);
        return {
            nombre: this.nombre,
            apellido: this.apellido
        }
    }
    private imprimirapellido(apellido: string, nombre?: string
                            ): void{
        if(nombre){
            console.log(apellido, nombre);
        }
        else{
            console.log(apellido);
        }

    }
}

let unapersona = new persona();
unapersona.nombre = "nombresito";
unapersona.apellido = "apellidito";
let otrapersonita: UnLogin = unapersona.imprimirpersona();
console.log(otrapersonita);

//funciones

function Sumar(n1: number, n2: number): number{
    return n1+n2;
}
console.log(Sumar(4,7));