import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  ruta = "https://localhost:44309"
  constructor(private readonly http: HttpClient) { }
  getCursos(){
    return this.http.get(this.ruta + '/api/curso/GetCursos');
  }

  getCursoMatricula(){
    return this.http.get(this.ruta + '/api/curso/GetCursos');
  }
}