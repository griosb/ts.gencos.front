// src/app/api.service.ts
    import { Injectable } from '@angular/core';
    import { HttpClient } from '@angular/common/http';
    import { Observable } from 'rxjs';

    @Injectable({
      providedIn: 'root'
    })
    export class ApiService {
      private apiUrl = 'http://localhost:8087/evaluacionesBackEnd/api/evaluaciones/findByTypeAndDocument/'; // Example API URL

      constructor(private http: HttpClient) { }

      getData(type:string,doc:string): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}${type}/${doc}`);
      }
    }