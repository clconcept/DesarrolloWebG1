import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-gestionar',
  templateUrl: './gestionar.component.html',
  styleUrls: ['./gestionar.component.css']
})
export class GestionarComponent implements OnInit {

  alumnos = [];
  constructor(private readonly alumnoService: AlumnoService) { }

  getAlumnos(){
    this.alumnoService.getAlumnos().subscribe((rest: any) => {
      this.alumnos = rest.data;
      console.log(this.alumnos);
    })
  }

  ngOnInit(): void {
    this.getAlumnos();
  }

}
