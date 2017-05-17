import { Component } from '@angular/core';

@Component({
  selector: 'twj-raiz',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
usuario: UsuarioInt ={
  nombre: "unnombre",
  apellido: "unapellido"
}
constructor(){
  console.log("Constructor");
  this.holamundo();
  console.log(this.saludar(this.usuario.nombre));
}
holamundo(){
  console.log("Wolis");
}
saludar(nombre: string, apellido?: string):string{
return `woli tu ${nombre} ${apellido}`
}
}

interface UsuarioInt {
  nombre: string,
  apellido: string
}
