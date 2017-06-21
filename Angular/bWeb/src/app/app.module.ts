import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import { EstiloComponent } from './estilo/estilo.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { PeliculaBatmanComponent } from './Componentes/pelicula-batman/pelicula-batman.component';
import { TituloPeliculaComponent } from './Componentes/titulo-pelicula/titulo-pelicula.component';
import { PopularidadPeliculaComponent } from './Componentes/popularidad-pelicula/popularidad-pelicula.component';
import { DescripcionPeliculaComponent } from './Componentes/descripcion-pelicula/descripcion-pelicula.component';
import { PosterPeliculaComponent } from './Componentes/poster-pelicula/poster-pelicula.component';
import { VotosPeliculaComponent } from './Componentes/votos-pelicula/votos-pelicula.component';
import { UsuarioComponent } from './Componentes/usuario/usuario.component';
import { Pagina2Component } from './Componentes/pagina2/pagina2.component';
import {ModulodeRutas} from "./routes";
import { Pagina21Component } from './Componentes/pagina21/pagina21.component';
import { Pagina22Component } from './Componentes/pagina22/pagina22.component';
import { Pagina23Component } from './Componentes/pagina23/pagina23.component';

@NgModule({
  declarations: [
    AppComponent,
    EstiloComponent,
    InicioComponent,
    PeliculaBatmanComponent,
    TituloPeliculaComponent,
    PopularidadPeliculaComponent,
    DescripcionPeliculaComponent,
    PosterPeliculaComponent,
    VotosPeliculaComponent,
    UsuarioComponent,
    Pagina2Component,
    Pagina21Component,
    Pagina22Component,
    Pagina23Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModulodeRutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
