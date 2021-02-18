import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators} from '@angular/forms';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-ingcurso',
  templateUrl: './ingcurso.component.html',
  styleUrls: ['./ingcurso.component.css']
})
export class IngcursoComponent implements OnInit {
 
  ingcursoForm = this.nuevoCurso.group ({
    idNivel: ['', Validators.required],
    idSede: ['', Validators.required],
    seccion: ['', Validators.required],
    idModalidad: ['', Validators.required],
    vacantes: ['', Validators.required],
    idHorario: ['', Validators.required],
    idProfesor: ['', Validators.required],
    costo: ['', Validators.required],
    fechaInicio: ['', Validators.required],
    fechaFin: ['', Validators.required],
    activo: ['', Validators.required],
    usuario: ['', Validators.required],
    minimoAlumnos: ['', Validators.required],
    imagen: ['', ]
  });
  

  constructor(private nuevoCurso: FormBuilder, private readonly cursoService: CursoService) {

   }
  cursoInsert(data){
    this.cursoService.insertCurso(data).subscribe((rest: any) => {
      
      console.log(rest);
    })
  }
  onSubmit(){
    if (this.ingcursoForm.valid)
    {
      this.cursoInsert(this.ingcursoForm.value);
    }
  }

  ngOnInit(): void {
  }

}
