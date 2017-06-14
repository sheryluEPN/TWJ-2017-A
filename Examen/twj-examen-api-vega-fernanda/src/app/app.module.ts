import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InicioComponent } from './Componente/inicio/inicio.component';
import { PeliculasComponent } from './Componente/peliculas/peliculas.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PeliculasComponent
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
