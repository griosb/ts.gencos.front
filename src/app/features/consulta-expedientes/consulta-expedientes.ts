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
import { evaluacion } from '../../core/models/evaluacionDTO';
import { NavbarComponent } from "../../component/navbar/navbar.component";




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
    ReactiveFormsModule
    //BrowserAnimationsModule, // Required for ngx-spinner animations
    // NgxSpinnerModule.forRoot({ type: 'ball-spin-clockwise-fade-rotating' })
    ,
    NavbarComponent
],
  
  templateUrl: './consulta-expedientes.html',
  styleUrl: './consulta-expedientes.scss',
  standalone: true,



})

export class ConsultaExpedientes implements OnInit{

   TiposDocumentos: Select[] = [
    {value: 'CC', viewValue: 'Cedula de Ciudadania'},
    {value: 'CE' , viewValue: 'Cedula de Extranjeria'},
  ];


  numeroDocumento:string='';
  posts = signal<evaluacion[]>([]);

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

//  http = inject(HttpClient);
//   userList: any[] = [];


ngOnInit():void{

//document.getElementById(nombre_modal).style.display = 'none';
  //  this.http.get<any[]>(this.apiUrl).subscribe(data => {
  //     this.posts = data;
  //   });
   //this.getUsersApi();
 
}


  constructor(@Inject(DOCUMENT) private document: Document, private apiService: ApiService, private toastService: ToastService,private fb: FormBuilder) {
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


 infracciones: Infracciones[] = [
  {NroExpediente: 133242134, FechaInfraccion: new Date("2025-08-17"), Comportamiento: 'ART 146, NUM 12, LIT a, No cumplir con xxx', Estado: 'Proceso'},
  {NroExpediente: 21234123, FechaInfraccion: new Date("2025-08-17"), Comportamiento: 'ART 146, NUM 12, LIT a, No cumplir con xxx', Estado: 'Proceso'},
  {NroExpediente: 3123123, FechaInfraccion: new Date("2025-08-17"), Comportamiento: 'ART 146, NUM 12, LIT a, No cumplir con xxx', Estado: 'Proceso'},
  {NroExpediente: 4132123, FechaInfraccion: new Date("2025-08-17"), Comportamiento: 'ART 146, NUM 12, LIT a, No cumplir con xxx', Estado: 'Proceso'},

];
  
 displayedColumns: string[] = ['NroExpediente', 'Fecha Infraccion', 'Comportamiento', 'Estado', 'Acciones'];
//  dataSource = new MatTableDataSource(ELEMENT_DATA);


  // getAllExpediente(){
  //   this.http.get("");

  // }
  buscarClick(): void {


   const select = document.querySelector('#lista-desplegables input[type="hidden"]') as HTMLInputElement;
  const tipoDocumento = select ? select.value : '';
    //this.message = 'Button clicked!';
    this.apiService.getData(tipoDocumento,this.numeroDocumento).subscribe({
      next: (data)=>{
        this.posts.set(data);
            console.log(this.posts);
      }
    })
    
    
    
  
        //  this.showToast();
      

    console.log('Button buscar was clicked!');
      // 92545551
  }


  closeAlert() {
  //document.getElementById('closealertcontainer').style.display = 'none';
}

openAlert() {
  //document.getElementById('closealertcontainer').style.display = 'flex';
  //document.getElementById('closealert').style.cssText = 'position: fixed; bottom: 23px; width: 100%; z-index: 2; display: flex;';
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




