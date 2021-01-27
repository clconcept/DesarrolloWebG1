import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactenosComponent } from './pages/contactenos/contactenos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { MatriculaComponent } from './pages/matricula/matricula.component';
import { HomeComponent } from './pages/home/home.component';
import { CursoComponent } from './pages/curso/curso.component'
import {IntranetComponent } from './pages/intranet/intranet.component'

const routes: Routes = [
    
    { path: 'curso/:id', component: CursoComponent },
    { path: 'curso', component: CursoComponent },
    { path: 'contactenos', component: ContactenosComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'matricula', component: MatriculaComponent },
    { path: 'home', component: HomeComponent },
    { path: 'intranet', component: IntranetComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}