import {Component,ViewEncapsulation} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';

export interface Infracciones {
  NroExpediente: number;
  FechaInfraccion: Date;
  Comportamiento: string;
  Estado: string;
}

const ELEMENT_DATA: Infracciones[] = [
  {NroExpediente: 133242134, FechaInfraccion: new Date("2025-08-17"), Comportamiento: 'ART 146, NUM 12, LIT a, No cumplir con xxx', Estado: 'Proceso'},
  {NroExpediente: 21234123, FechaInfraccion: new Date("2025-08-17"), Comportamiento: 'ART 146, NUM 12, LIT a, No cumplir con xxx', Estado: 'Proceso'},
  {NroExpediente: 3123123, FechaInfraccion: new Date("2025-08-17"), Comportamiento: 'ART 146, NUM 12, LIT a, No cumplir con xxx', Estado: 'Proceso'},
  {NroExpediente: 4132123, FechaInfraccion: new Date("2025-08-17"), Comportamiento: 'ART 146, NUM 12, LIT a, No cumplir con xxx', Estado: 'Proceso'},

];
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-consulta-expedientes',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './consulta-expedientes.html',
  styleUrl: './consulta-expedientes.scss',
  standalone: true,



})

export class ConsultaExpedientes {

   foods: Food[] = [
    {value: 'CC', viewValue: 'CC'},
    {value: 'CE' , viewValue: 'CE'},
    {value: 'PPT', viewValue: 'PPT'},
  ];
 displayedColumns: string[] = ['NroExpediente', 'Fecha Infraccion', 'Comportamiento', 'Estado', 'Acciones'];
 dataSource = new MatTableDataSource(ELEMENT_DATA);


}




