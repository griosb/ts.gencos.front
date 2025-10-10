import { Routes } from '@angular/router';
import { ConsultaExpedientes } from './features/consulta-expedientes/consulta-expedientes';
import { CursosInscritos } from './features/cursos-inscritos/cursos-inscritos';
import { BusquedaInscritos } from './features/busqueda-inscritos/busqueda-inscritos';
import { InsertarFalloComponent } from './features/fallo/insertar-fallo/insertar-fallo.component';
import { VisorPdfComponent } from './shared/visor-pdf/visor-pdf.component';
//import { InsertarFalloComponent } from './features/insertar-fallo/insertar-fallo.component';


export const routes: Routes = [
  { path: '', redirectTo: 'consulta', pathMatch: 'full' },
  { path: 'consulta', component:ConsultaExpedientes  },
  { path: 'cursos', component:CursosInscritos  },
  { path: 'buscar', component:BusquedaInscritos  },
  { path: 'visor-pdf', component: VisorPdfComponent },

  { path: 'fallo/insertar', component:InsertarFalloComponent  },


];