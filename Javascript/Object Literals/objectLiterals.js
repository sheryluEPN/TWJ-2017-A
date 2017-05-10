function definirObjetoUsuario(nombre){
    return {
        nombre:nombre,
        saludar:function(){
            return "Hola"+this.nombre;
        },
        twitteo:function(tweet){
            return this.nombre+" twitteo sobre: "+tweet;
        },
    }
}
// se puede usar alerts o confirm para imprimir
var nuevafuncion = (nombre, apellido) =>{
    var usuario1={
        nombre: nombre,
        apellido
    };
    console.log(usuario1.apellido);
    var usuario2={
        nombre
    };
    console.log(usuario2.nombre);
}

nuevafuncion('unnombre', 'unapellido');
