import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';
import { evaluacion, Medida } from '../../core/models/evaluacionDTO';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../api.service';
import { LiquidacionMedida } from '../../core/models/liquidacionMedidaDTO';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-medidas',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ],
  templateUrl: './lista-medidas.component.html',
  styleUrl: './lista-medidas.component.scss'
})
export class ListaMedidasComponent implements OnInit {
  medidas:evaluacion |undefined=undefined;
  step:boolean=true
  liquidacionMedida:LiquidacionMedida |undefined=undefined



  constructor(public shared: SharedService,private apiService: ApiService,
    private cdr: ChangeDetectorRef,private router: Router) {
  }

  ngOnInit(): void {
    this.medidas= this.shared.data()
    console.log(this.medidas?.medidas.at(0)?.idHechosMedida)
    this.apiService.postLiquidar(this.medidas?.medidas.at(0)?.idHechosMedida)
    .subscribe({
      next: (data)=>{
        this.liquidacionMedida=data
        this.cdr.detectChanges();

      }
    })

  }

  liquidarInfraccion(){
    this.step=false
  }
  atras(){
    this.step=true
  }
  
  pagarMedida(){
    this.router.navigate(['/visor-pdf']);
  }
}
