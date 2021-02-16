import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  ruta = "https://localhost:44309"
  constructor(private readonly http: HttpClient) { }
  getAlumnoMatricula(){
    return this.http.get(this.ruta + '/api/Alumno/GetAlumnos');
  }
}
