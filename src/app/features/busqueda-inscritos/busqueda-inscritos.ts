import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';


interface ListaOpc {
  value: string;
  viewValue: string;

  }

export interface Infracciones {
  Escuela: string;
  Identificacion: Number;
  NombresApellido: string;
  NroCohorte: number;
  Estado: string;
  Acciones: string;
}

const ELEMENT_DATA: Infracciones[] = [
  {Escuela: 'ESAGU', Identificacion: 1235678912, NombresApellido:'Juanito Reyes', NroCohorte: 2, Estado: 'Inscrito', Acciones:'Ver'},
  {Escuela: 'ESAGU', Identificacion: 1234567891, NombresApellido:'Pepito Robles', NroCohorte: 5, Estado: 'Aprobado', Acciones:'Ver'},
  {Escuela: 'ESAGU', Identificacion: 2234343834, NombresApellido:'Juanita Lopez', NroCohorte: 2, Estado: 'No aprobado', Acciones:'Ver'},

];
@Component({
  selector: 'app-busqueda-inscritos',
  imports: [
    MatCardModule,
    MatSelectModule,
    MatTableModule,
  ],
  templateUrl: './busqueda-inscritos.html',
  styleUrl: './busqueda-inscritos.scss'
})
export class BusquedaInscritos {

Escuelas: ListaOpc[] = [
    {value: 'CC', viewValue: 'Escuela de carabineros 1'},
    {value: 'CE' , viewValue: 'Escuela de carabineros 2'},
    {value: 'PPT', viewValue: 'Escuela de carabineros 3'},
  ];

  NivelAcademico: ListaOpc[] = [
    {value: 'CC', viewValue: 'Tecnico'},
    {value: 'CE' , viewValue: 'Tecnologo'},
    {value: 'PPT', viewValue: 'Profesional'},
  ];

  NombrePrograma: ListaOpc[] = [
    {value: 'CC', viewValue: 'Tecnico Profesional 1'},
    {value: 'CE' , viewValue: 'Tecnico Profesional 2'},
    {value: 'PPT', viewValue: 'Tecnico Profesioanl 3'},
  ];

   displayedColumns: string[] = ['Escuela', 'Identificacion', 'NombresApellido', 'NroCohorte', 'Estado', 'Acciones'];
 dataSource = new MatTableDataSource(ELEMENT_DATA);
}
