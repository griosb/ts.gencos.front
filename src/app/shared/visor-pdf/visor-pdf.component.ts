import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-visor-pdf',
  standalone: true,
  imports: [],
  templateUrl: './visor-pdf.component.html',
  styleUrl: './visor-pdf.component.scss'
})
export class VisorPdfComponent {
  safePdfUrl: SafeResourceUrl;


  constructor(private sanitizer: DomSanitizer){
    this.safePdfUrl = this.sanitizer
      .bypassSecurityTrustResourceUrl('../../assets/documentos/vaucher-usuario.pdf');
  }


  

}
