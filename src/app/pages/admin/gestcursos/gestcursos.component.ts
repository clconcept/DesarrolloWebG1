import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-gestcursos',
  templateUrl: './gestcursos.component.html',
  styleUrls: ['./gestcursos.component.css']
})
export class GestcursosComponent implements OnInit {
  cursos = [];

  constructor(private readonly cursoService: CursoService, 
               
    private activateRoute: ActivatedRoute) { }

    getCursos(){
      this.cursoService.getCursos().subscribe((rest: any) => {
        this.cursos = rest;
        console.log(this.cursos);
      })
    }
  
    getCursoById(id: number){
      this.cursoService.getCursos().subscribe((rest: any) => {
        this.cursos = rest.filter((item: { id: number; }) => item.id == id);
        console.log(this.cursos);
      })
    }
  

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params: Params) => {
      if (params.id){
        this.getCursoById(params.id);
               
      }
      else {
        this.getCursos();
      }
    });
  }

}
