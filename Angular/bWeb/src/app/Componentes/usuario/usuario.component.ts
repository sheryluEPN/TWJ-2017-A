import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Usuarioclase} from "../../Clases/UsuarioClase";
import {Http} from "@angular/http";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {


  @Input() usuario:Usuarioclase;
  @Output() usuarioborrado = new EventEmitter();

  constructor(private _http:Http) { }
  ngOnInit() {
    console.log(this.usuario);
  }
  actualizarUsuario(){
    this._http.get("http://localhost:1337/usuario").subscribe(respuesta=>{
      let rJson = respuesta.json();
      console.log("respuesta json:", rJson);
      //this.usuarios=rJson;

    }, error=>{
      console.log("error: ", error);
    });
  }
  eliminarUsuario(id){
    this._http.delete("http://localhost:1337/usuario/"+id).subscribe(respuesta=>{
      let rJson = respuesta.json();
      console.log("respuesta json:", rJson);
      //this.actualizarUsuario();

    }, error=>{
      console.log("error: ", error);
    });

  }
  modificarUsuario(usuario:Usuarioclase, nuevo){
    let actualizacion={
      nombre: nuevo
    };
    console.log(nuevo);
    this._http.put("http://localhost:1337/usuario/"+usuario.id, actualizacion).map((res)=>{
      return res.json;
    }).subscribe(respuesta=>{
      console.log("se actualizo:", respuesta);
      //let indice= this.usuarios.indexOf(usuario);
      //this.usuarios[indice].nombre=nuevo;
      //this.usuarios[indice].editar=false;

    }, error=>{
      console.log("error: ", error);
    });
  }

}
