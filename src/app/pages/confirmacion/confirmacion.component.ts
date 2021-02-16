import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatButtonToggleGroup} from '@angular/material/button-toggle';
import Swal from 'sweetalert2';
import { element } from 'protractor';

export interface confirmacion {
    idmatricula: number;
    alumno: string;
    curso: string;
    inscritos: string;
    maximo: string; 
    minimo: string;    
    estado: string;
    accion: string; 
}
 
@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.css']
})
export class ConfirmacionComponent implements OnInit {
  columna: string[] = ['idmatricula','alumno','curso','inscritos','maximo','minimo','estado','accion']
  fila: number=0;
  datasource:MatTableDataSource<confirmacion>;
  constructor() { }

  ngOnInit(): void {
    let datos:any=[];
    datos.push({
      idmatricula: '1',
      alumno: 'PABLO ENRIQUE MALASQUEZ',      
      curso: 'INGLES 1',
      inscritos: '12',
      maximo: '20',
      minimo: '10',    
      estado: 'RECHAZADO',
      accion:''
    },
    {
      idmatricula: '2',
      alumno: 'ENRIQUE SOLANO MALASQUEZ',      
      curso: 'INGLES 2',
      inscritos: '09',
      maximo: '15',
      minimo: '10',          
      estado: 'PENDIENTE',
      accion:''
    },{
      idmatricula: '3',
      alumno: 'JOSE MELENDEZ MALASQUEZ',      
      curso: 'INGLES 1',
      inscritos: '12',
      maximo: '20',
      minimo: '10',    
      estado: 'PENDIENTE',
      accion:''
    },{
      idmatricula: '4',
      alumno: 'JUAN MENDOZA VASQUEZ',      
      curso: 'INGLES 2',
      inscritos: '09',
      maximo: '15',
      minimo: '10',          
      estado: 'MATRICULADO',
      accion:''
    });
    this.fila = datos.length;
    this.datasource = new MatTableDataSource(datos);     
  }

  buscarDatos(filterValue: string) {
    this.datasource.filter= filterValue.trim().toUpperCase();    
  }

   aprueba(alumno:string){
     alert("asdsdasds");
    Swal.fire('warning!', 'Se acaba de aprobar la matricula del alumno: ' + alumno, 'success');
   }
   rechaza(alumno:string){
    Swal.fire('warning!', 'Se acaba de rechazar la matricula del alumno: ' + alumno, 'error');
   }

}
