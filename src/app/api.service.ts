// src/app/api.service.ts
    import { Injectable } from '@angular/core';
    import { HttpClient } from '@angular/common/http';
    import { Observable } from 'rxjs';
    import { evaluacion } from './core/models/evaluacionDTO';
import { LiquidacionMedida } from './core/models/liquidacionMedidaDTO';

    @Injectable({
      providedIn: 'root'
    })
    export class ApiService {
    private apiUrl = 'http://localhost:8087/evaluacionesBackEnd/api/evaluaciones'; 
    //private apiUrl = 'http://186.31.162.25:2055/evaluacionesBackEnd/api/evaluaciones'; 


      constructor(private http: HttpClient) { }

      getData(type:string,doc:string): Observable<evaluacion[]> {
        return this.http.get<evaluacion[]>(`${this.apiUrl}/findByTypeAndDocument/${type}/${doc}`);
      }

      postLiquidar(numeroMedida:any):Observable<LiquidacionMedida>{
        return this.http.post<LiquidacionMedida>(`${this.apiUrl}/liquidar/${numeroMedida}`,{})

      }
      
    }