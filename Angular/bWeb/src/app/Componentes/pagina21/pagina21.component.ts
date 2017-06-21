import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-pagina21',
  templateUrl: './pagina21.component.html',
  styleUrls: ['./pagina21.component.css']
})
export class Pagina21Component implements OnInit {

  constructor(private router: Router,
              private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
  }
  navegarAInicio(){
    this.router.navigate(["pagina2","idcositas"]);
}

}
