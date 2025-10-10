import {AfterViewInit, Component,OnInit,signal,ViewEncapsulation} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {  Inject , inject} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ApiService } from '../../api.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastService } from '../../toast.service';
import { NgxSpinnerModule } from 'ngx-spinner'; // Import NgxSpinnerModule
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormGroup } from '@angular/forms';
import { evaluacion, Medida } from '../../core/models/evaluacionDTO';
import { NavbarComponent } from "../../component/navbar/navbar.component";

import { Dialog } from '@angular/cdk/dialog';
import { ListaMedidasComponent} from "../lista-medidas/lista-medidas.component";
import {MatButtonModule} from '@angular/material/button';
import { SharedService } from '../../shared/services/shared.service';

import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { finalize } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';
import { AlertDialogComponent } from '../../shared/alert-dialog/alert-dialog.component';
import { MatDialog } from '@angular/material/dialog';



export interface Infracciones {
  NroExpediente: number;
  FechaInfraccion: Date;
  Comportamiento: string;
  Estado: string;
}


interface Select {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-consulta-expedientes',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    NavbarComponent,
    MatProgressBarModule
],
  
  templateUrl: './consulta-expedientes.html',
  styleUrl: './consulta-expedientes.scss',
  standalone: true,



})

export class ConsultaExpedientes implements OnInit{
  loading: boolean = false;

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;
  strokeWidth = 4;

   TiposDocumentos: Select[] = [
    {value: 'CC', viewValue: 'Cedula de Ciudadania'},
    {value: 'CE' , viewValue: 'Cedula de Extranjeria'},
  ];

  // private dialog = inject(Dialog);


  numeroDocumento:string='';
  posts = signal<evaluacion[] | undefined>(undefined);

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

//  http = inject(HttpClient);
//   userList: any[] = [];

  protected openModal(medidas:evaluacion){
    this.shared.setinfo(medidas)
    this.dialog.open(ListaMedidasComponent,{
      height: '60%',
      width: '60%',
    });

  }



  ngOnInit():void{

  //document.getElementById(nombre_modal).style.display = 'none';
    //  this.http.get<any[]>(this.apiUrl).subscribe(data => {
    //     this.posts = data;
    //   });
    //this.getUsersApi();
  
  }


  constructor(@Inject(DOCUMENT) private document: Document, private apiService: ApiService,
   private toastService: ToastService,private fb: FormBuilder,private shared: SharedService,  private cdr: ChangeDetectorRef,
     private dialog: MatDialog
) {
    // Accessing the window object
    const currentWindow = this.document.defaultView;

    // Example: Accessing window.navigator
    if (currentWindow) {
      console.log('Browser Language:', currentWindow.navigator.language);
    }

    //  this.tipoDocumento=''
    //   this.numeroDocumento=''  

    // Example: Manipulating the document body
    //this.document.body.style.backgroundColor = 'lightblue';


  
  }

  buscarClick(): void {

  this.loading = true
  const select = document.querySelector('#lista-desplegables input[type="hidden"]') as HTMLInputElement;
  const tipoDocumento = select ? select.value : '';
    this.apiService.getData(tipoDocumento,this.numeroDocumento).pipe(
        finalize(() => {
          this.loading = false;
           this.cdr.markForCheck();
        })
      )
    .subscribe({
      next: (data)=>{
        if(data.length!=0){
          this.posts.set(data);
        }else{
          this.openAlert("No se encontraron Registros")
        }
        
      },
      error: (err) => {
          console.log('Error:', err.status);
          this.openAlert("Ocurrio un error inesperado").afterClosed()
          .subscribe(result=>{
          })
        }
      
    })
  }

  openAlert(mensaje:string){
    return this.dialog.open(AlertDialogComponent,{
      width: '400px',
      panelClass: 'custom-alert-dialog',
      data:{
        mensaje:mensaje
      }
    })
  }


  closeAlert() {
  //document.getElementById('closealertcontainer').style.display = 'none';
}



  getUsersApi() {
    // this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((result: any) => {
    //   this.userList = result;
    // })
  }

  


//   openModal() {
//   let modalItems = document.querySelectorAll('.container-modal-govco');
//   modalItems.forEach(function(modalItem) {
//     modalItem.style.display = 'block'
//   });
// }

//   closeModal(nombre_modal) {
//   document.getElementById(nombre_modal).style.display = 'none';
// }

  showToast() {
    this.toastService.showToast('This is a toast message!');
  }
}




