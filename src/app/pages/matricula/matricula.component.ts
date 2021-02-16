import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';
import { LoginService } from 'src/app/services/login.service';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.css']
})
export class MatriculaComponent implements OnInit {

  cursos = [];

  idAlumno = [];

  showMatri = "true";

  constructor(
    private readonly loginService: LoginService,
    private readonly cursoService: CursoService,  
    private activateRoute: ActivatedRoute) { }

    getCursosMatricula(){
      this.cursoService.getCursoMatricula().subscribe((rest: any) => {
      this.cursos = rest;
      console.log(this.cursos);
      })
      }

      getAlumnoMatricula(){
        this.loginService.getAlumnoMatricula().subscribe((rest: any) => {
        this.idAlumno = rest;
        console.log(this.idAlumno);
        })
        }
            
      getCursoMatriculaById(id: number){
      this.cursoService.getCursoMatricula().subscribe((rest: any) => {
      this.cursos = rest.filter((item: { idCurso: number; }) => item.idCurso == id);
        })
      }   
      
      getAlumnoMatriculaById(id: number){
        this.loginService.getAlumnoMatricula().subscribe((rest: any) => {
        this.idAlumno = rest.filter((item: { idAlumno: number; }) => item.idAlumno == id);
        console.log(this.idAlumno);
        })
      }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params: Params) => {
      if (params.id){
      this.getCursoMatriculaById(params.id);
      this.getAlumnoMatriculaById(1);
      this.showMatri = "false";
    }
    else {
            this.getCursosMatricula();
            }
  });
  }

}
