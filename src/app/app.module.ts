import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContactenosComponent } from './pages/contactenos/contactenos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { MatriculaComponent } from './pages/matricula/matricula.component';
import { HomeComponent } from './pages/home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { CursoComponent } from './pages/curso/curso.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IntranetComponent } from './pages/intranet/intranet.component';
import { LogueoComponent } from './pages/logueo/logueo.component';

import { GestionarComponent } from './pages/gestionar/gestionar.component';
import { EditarComponent } from './pages/editar/editar.component';
import { AlumnoComponent } from './pages/alumno/alumno.component';

import { IngcursoComponent } from './pages/admin/ingcurso/ingcurso.component';
import { GestcursosComponent } from './pages/admin/gestcursos/gestcursos.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactenosComponent,
    NosotrosComponent,
    MatriculaComponent,
    HomeComponent,
    CursoComponent,
    IntranetComponent,
    LogueoComponent,

    GestionarComponent,
    EditarComponent,
    AlumnoComponent,

    GestcursosComponent,
    IngcursoComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
