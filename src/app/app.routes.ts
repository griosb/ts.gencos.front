import { Routes } from '@angular/router';
import { ConsultaExpedientes } from './features/consulta-expedientes/consulta-expedientes';
import { CursosInscritos } from './features/cursos-inscritos/cursos-inscritos';
import { BusquedaInscritos } from './features/busqueda-inscritos/busqueda-inscritos';

export const routes: Routes = [
  { path: '', redirectTo: 'consulta', pathMatch: 'full' },
  { path: 'consulta', component:ConsultaExpedientes  },
  { path: 'cursos', component:CursosInscritos  },
  { path: 'buscar', component:BusquedaInscritos  },



];