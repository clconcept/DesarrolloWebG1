import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private readonly http: HttpClient) { }

  getAlumnos()
  {
     return this.http.get('/api/alumno/GetAlumnos');
     //return this.http.get('https://localhost:44309/api/Alumno/GetAlumnos');
  }
}