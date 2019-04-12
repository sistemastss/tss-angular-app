import { SolicitudPoligrafiaComponent } from './solicitud-poligrafia/solicitud-poligrafia.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitudServicioComponent } from './solicitud-servicio.component';
import { CentroCostoComponent } from './centro-costo/centro-costo.component';
import { SolicitudEspComponent } from './solicitud-esp/solicitud-esp.component';
import { SolicitudServiciosComponent } from './solicitud-servicios/solicitud-servicios.component';
import { SolicitudInvestigacionComponent } from './solicitud-investigacion/solicitud-investigacion.component';
import { SolicitarServiciosGuard } from '../../guards/solicitar-servicios.guard';
import { SolicitudEspMasivoComponent } from './solicitud-esp-masivo/solicitud-esp-masivo.component';

const routes: Routes = [
  {
    path: '',
    component: SolicitudServicioComponent,
    children: [
      { path: 'solicitud', component: CentroCostoComponent },
      {
        path: 'solicitud-servicios',
        component: SolicitudServiciosComponent,
        canActivate: [SolicitarServiciosGuard],
        children: [
          { path: 'esp', component: SolicitudEspComponent },
          { path: 'esp-masivo', component: SolicitudEspMasivoComponent },
          { path: 'investigaciones', component:  SolicitudInvestigacionComponent },
          { path: 'poligrafia', component:  SolicitudPoligrafiaComponent },
          { path: '', redirectTo: 'esp', pathMatch: 'full' }
        ]
      },
      { path: '', redirectTo: 'solicitud', pathMatch: 'full' },
      { path: '**', redirectTo: '../'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudServicioRoutingModule { }
