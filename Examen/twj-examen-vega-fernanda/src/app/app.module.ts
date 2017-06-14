import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AgarreComponenteComponent } from './Componentes/agarre-componente/agarre-componente.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    AgarreComponenteComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [InicioComponent]
})
export class AppModule { }
