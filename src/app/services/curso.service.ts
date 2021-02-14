import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private readonly http: HttpClient) { }

  getCursos()
  {
     return this.http.get('https://localhost:44309/api/Curso/GetCursos');
  }
  getMatricula(){
    return this.http.get('/api/matricula/GetMatricula');
  }
}