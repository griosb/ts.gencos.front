import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
//import { Fallo } from '../../core/models/evaluacionDTO';

@Component({
  selector: 'app-insertar-fallo',
  standalone: true,
  imports: [],
  templateUrl: './insertar-fallo.component.html',
  styleUrl: './insertar-fallo.component.scss'
})
export class InsertarFalloComponent implements OnInit {

frmMain!: FormGroup


 constructor(private formBuilder: FormBuilder) {


    // this.crear = data.crear;
    // this.ver = data.ver;
    // this.deshabilitar = false;
    // if (!this.crear) {
    //   this.builderUpdate();
    // }
    // this.frmMain = this.formBuilder.group({
    //   catalogo: [''], codigo: ['', Validators.required],
    //   nombre: ['', Validators.required], activo: [''], auditoria: ['']
    // });


    // this.frmMainact = this.formBuilder.group({
    //    codigo: ['', Validators.required],
    //   nombre: ['', Validators.required],
    // });
  }

  ngOnInit(): void {

  }



  //Presionar el botón guardar
  insertarClick(): void {

    alert('ok');
    let dataForm=this.frmMain.value



    // let dataVal: Fallo
    // dataVal={
    //   id:this.data.id,
    //   valor: dataForm.valor
    // }

    // this.paramService.establecerParametro(dataVal).subscribe(r => {
    //   if(r.descripcion=='Exitoso'){
    //     let dialogConfirm = this._dialog.open(ActionsDialogComponent, {
    //       data: {
    //         message: 'Valor parametrgo actualizado exitosamente',
    //         severity: 'success'
    //       }
    //            },
    //         );
    //         dialogConfirm.afterClosed().subscribe(r => {
    //           window.location.reload();
    //         })
    //   }
    // });
 }


}
