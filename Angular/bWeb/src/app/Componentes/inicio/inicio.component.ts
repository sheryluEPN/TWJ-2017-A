import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nombre: string = "nombresito";
  arregloUsr=[{
    nombre:"nombrecito1",
    apellido:"apellidito1"
  },
    {
      nombre:"nombrecito2",
      apellido:"apellidito2"
    },
    {
      nombre:"nombrecito3",
      apellido:"apellidito3"
    }];
  cambiarNombre(){
    this.nombre="otro nombresito";
  }

  otroNombre():void{
    this.nombre="un nombre de foco";
  }

  cambiarInput(nombreEtiqueta){
  console.log(nombreEtiqueta.type);
  console.log(nombreEtiqueta.value);
    this.nombre= nombreEtiqueta.value;
}
  constructor() { }

  ngOnInit() {
  }

}
