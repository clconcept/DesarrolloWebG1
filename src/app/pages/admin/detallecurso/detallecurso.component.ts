import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-detallecurso',
  templateUrl: './detallecurso.component.html',
  styleUrls: ['./detallecurso.component.css']
})
export class DetallecursoComponent implements OnInit {
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
        this.cursos = rest.filter((item: { idCurso: number; }) => item.idCurso == id);
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
          this.cursos = rest.filter(ele => (''+ele.nombreCurso).indexOf(filterValue)!=-1||
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