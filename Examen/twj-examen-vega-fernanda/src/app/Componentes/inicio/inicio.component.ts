import { Component, OnInit } from '@angular/core';
import {AgarreInterface} from "../../Interface/Agarre";
import {Http} from "@angular/http";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  agarrelist: AgarreInterface[];
  nuevoAgarre: AgarreInterface={
    nombre: "",
    veces: null,
    dineroGastado: null
  };
  constructor(private _http:Http) { }

  crearAgarre(){
    console.log("ESTO ES CREAR AGARRE");

    let agarre:AgarreInterface={
    nombre: this.nuevoAgarre.nombre,
    veces: this.nuevoAgarre.veces,
    dineroGastado: this.nuevoAgarre.dineroGastado}
    this._http.post("http://localhost:1337/agarre", agarre).subscribe(respuesta=>{
      let respuestaJson = respuesta.json();
      console.log("respuesta json:", respuestaJson);
      this.actualizarAgarre();
    }, error=>{
      console.log("error: ", error);
    });
  }
  actualizarAgarre(){
    this._http.get("http://localhost:1337/agarre").subscribe(respuesta=>{
      let rJson = respuesta.json();
      console.log("respuesta json:", rJson);
      this.agarrelist=rJson;

    }, error=>{
      console.log("error: ", error);
    });
  }

  ngOnInit() {
    this._http.get("http://localhost:1337/agarre").subscribe(respuesta=>{
      let rJson = respuesta.json();
      console.log("respuesta json:", rJson);
      this.agarrelist=rJson;

    }, error=>{
      console.log("error: ", error);
    });
  }


}
