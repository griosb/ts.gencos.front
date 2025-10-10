import { Component, Inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-alert-dialog',
  standalone: true,
  imports: [
  MatDialogModule,
  MatIconModule,
  MatButtonModule
  ],
  templateUrl: './alert-dialog.component.html',
  styleUrl: './alert-dialog.component.scss'
})
export class AlertDialogComponent {


  constructor(private dialogRef: MatDialogRef<AlertDialogComponent>, @Inject(MAT_DIALOG_DATA) public data:dataDialog) {}

  closeDialog() {
    this.dialogRef.close();
  }
}


export interface dataDialog{
  mensaje:string
}
