import {Component, Input, OnInit} from '@angular/core';
import {PeliculasInterface} from "../../Interface/Pelicula";
import {Http} from "@angular/http";
import {PeliculaClase} from "../../Clases/PeliculaBatman";

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  @Input() pelicula:PeliculasInterface;
  constructor(private _http:Http) { }

  ngOnInit() {
  }

  guardarPelicula(){
    let usuario:PeliculaClase={
      title:this.pelicula.title,
      overview:this.pelicula.overview,
      popularity:this.pelicula.popularity,
      vote_count: this.pelicula.vote_count,
      poster_path: this.pelicula.poster_path
    };
    this._http.post("https://twj-2017a-f-v.mybluemix.net/pelicula", usuario).subscribe(respuesta=>{
      let respuestaJson = respuesta.json();
      console.log("respuesta json:", respuestaJson);
    }, error=>{
      console.log("error: ", error);
    });

  }

}
