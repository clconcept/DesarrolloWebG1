import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private readonly http: HttpClient) { }

  getCursos(){
    return this.http.get('/api/curso/GetCursos');
  }
}