import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  cursos = [];

  
  constructor(private readonly cursoService: CursoService, 
               
  private activateRoute: ActivatedRoute) { }

  getCursos(){
    this.cursoService.getCursos().subscribe((rest: any) => {

        
      this.cursos = rest.data;      
      console.log(this.cursos);
    })
  }

  getCursoById(id: number){
    this.cursoService.getCursos().subscribe((rest: any) => {
      this.cursos = rest.data.filter((item: { id: number; }) => item.id == id);
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
  buscarDatos(filterValue: string) {
    if (filterValue.length>0){
      this.cursoService.getCursos().subscribe((rest: any) => {
        this.cursos = rest.data.filter(ele => (''+ele.nombreCurso).indexOf(filterValue)!=-1||
                                              (''+ele.frecuencia).indexOf(filterValue)!=-1||
                                              (''+ele.nombreSede).indexOf(filterValue)!=-1||
                                              (''+ele.costo).indexOf(filterValue)!=-1);
        console.log(this.cursos);
      })
    }else{
      this.getCursos();
    }
  }

}