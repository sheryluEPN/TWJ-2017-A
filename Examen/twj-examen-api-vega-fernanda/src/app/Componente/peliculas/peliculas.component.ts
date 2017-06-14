import {Component, Input, OnInit} from '@angular/core';
import {PeliculasInterface} from "../../Interface/Pelicula";

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  @Input() pelicula:PeliculasInterface;
  constructor() { }

  ngOnInit() {
  }

}
