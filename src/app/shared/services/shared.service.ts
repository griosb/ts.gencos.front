import { Injectable, signal } from '@angular/core';
import { Medida } from '../../core/models/evaluacionDTO';

import { evaluacion } from '../../core/models/evaluacionDTO';



@Injectable({
  providedIn: 'root',
})

export class SharedService{
  data = signal<evaluacion | undefined>(undefined);

  setinfo(data: evaluacion) {
    this.data.set(data);
  }

}