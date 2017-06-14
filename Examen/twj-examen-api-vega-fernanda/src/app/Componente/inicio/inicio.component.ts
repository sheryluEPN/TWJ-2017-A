import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {PeliculasInterface} from "../../Interface/Pelicula";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private _http:Http) { }
  peliculasList: PeliculasInterface[];
  consulta:string=null;

  ngOnInit() {
  }

  cargarPeliculas(){
    this._http.get("https://api.themoviedb.org/3/search/movie?api_key=afb1e0f512ed29f413f9333f4f87a77a&language=en-US&query="+this.consulta+"&page=1&include_adult=false")
    //.map(response=>response.json())
      .subscribe(
        (response)=>{
          console.log("Response:", response.json());
          let respuesta= response.json();
          this.peliculasList=(respuesta.results);
        },
        (error)=>{
          console.log("Error:", error);
        },
        ()=>{
          console.log("finally");
        }
      )
  }

}
