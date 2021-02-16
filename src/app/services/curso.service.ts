import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  ruta = "http://localhost:4000"
  constructor(private readonly http: HttpClient) { }
  getCursos(){
    return this.http.get(this.ruta + '/api/curso/GetCursos');
  }

  getMatricula(){
    return this.http.get(this.ruta + '/api/matricula/GetMatricula');
  }
}