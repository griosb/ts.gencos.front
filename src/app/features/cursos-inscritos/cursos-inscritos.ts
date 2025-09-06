import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';



export interface Infracciones {
  Escuela: string;
  NombrePrograma: string;
  NivelAcademico: string;
  NroCohorte: number;
  Estado: string;
}

const ELEMENT_DATA: Infracciones[] = [
  {Escuela: 'ESAGU', NivelAcademico: 'Tecnico',NombrePrograma:'Tecnico en inteligencia Vial', NroCohorte: 2, Estado: 'Inscrito'},
  {Escuela: 'ESAGU', NivelAcademico: 'Tecnico',NombrePrograma:'Tecnico Profesional en servicio Policial', NroCohorte: 2, Estado: 'Inscrito'},
  {Escuela: 'ESAGU', NivelAcademico: 'Tecnico',NombrePrograma:'Tecnico en inteligencia Vial', NroCohorte: 2, Estado: 'Inscrito'},
  {Escuela: 'ESAGU', NivelAcademico: 'Tecnico',NombrePrograma:'Tecnico en inteligencia Vial', NroCohorte: 2, Estado: 'Inscrito'},

];
interface ListaOpc {
  value: string;
  viewValue: string;
}




@Component({
  selector: 'app-cursos-inscritos',
imports: [
    CommonModule,
 
    FormsModule
  ],
  templateUrl: './cursos-inscritos.html',
  styleUrl: './cursos-inscritos.scss'
})



export class CursosInscritos {
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
 displayedColumns: string[] = ['Escuela', 'NivelAcademico', 'NombrePrograma', 'NroCohorte', 'Estado'];
//  dataSource = new MatTableDataSource(ELEMENT_DATA);

}
