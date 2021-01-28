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
<<<<<<< HEAD
=======
import { IngcursoComponent } from './pages/admin/ingcurso/ingcurso.component';
import { GestcursosComponent } from './pages/admin/gestcursos/gestcursos.component';
>>>>>>> 56b2d3ed104773e25570089be6dfa134fba56e0a

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
<<<<<<< HEAD
=======
    GestcursosComponent,
    IngcursoComponent,
>>>>>>> 56b2d3ed104773e25570089be6dfa134fba56e0a
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
