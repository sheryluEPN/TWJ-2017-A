import {Component, Input, OnInit} from '@angular/core';
import {AgarreInterface} from "../../Interface/Agarre";

@Component({
  selector: 'app-agarre-componente',
  templateUrl: './agarre-componente.component.html',
  styleUrls: ['./agarre-componente.component.css']
})
export class AgarreComponenteComponent implements OnInit {

  @Input() agarre:AgarreInterface;
  constructor() { }

  ngOnInit() {
  }

}
