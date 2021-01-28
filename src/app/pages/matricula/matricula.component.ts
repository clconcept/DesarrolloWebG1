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

  idusu = [];

  showMatri = "true";

  constructor(
    private readonly loginService: LoginService,
    private readonly cursoService: CursoService,  
    private activateRoute: ActivatedRoute) { }

    getMatricula(){
      this.cursoService.getMatricula().subscribe((rest: any) => {
      this.cursos = rest.data;
      console.log(this.cursos);
      })
      }

      getUsuaMatricula(){
        this.loginService.getUsuaMatricula().subscribe((rest: any) => {
        this.idusu = rest.data;
        console.log(this.idusu);
        })
        }
            
      getMatriculaById(id: number){
      this.cursoService.getMatricula().subscribe((rest: any) => {
      this.cursos = rest.data.filter((item: { id: number; }) => item.id == id);
        })
      }   
      
      getUsuaMatriculaById(id: string){
        this.loginService.getUsuaMatricula().subscribe((rest: any) => {
        this.idusu = rest.data.filter((item: { idusu: string; }) => item.idusu == id);
        console.log(this.idusu);
        })
      }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params: Params) => {
      if (params.id){
      this.getMatriculaById(params.id);
      this.getUsuaMatriculaById("Alum1");
      this.showMatri = "false";
    }
    else {
            this.getMatricula();
            }
  });
  }

}
