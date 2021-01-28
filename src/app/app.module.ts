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
import { ReactiveFormsModule } from '@angular/forms';
import { IntranetComponent } from './pages/intranet/intranet.component';
import { LogueoComponent } from './pages/logueo/logueo.component';
import { GestionarComponent } from './pages/gestionar/gestionar.component';
import { EditarComponent } from './pages/editar/editar.component';
import { AlumnoComponent } from './pages/alumno/alumno.component';

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
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
