import { SolicitudPoligrafiaComponent } from './solicitud-poligrafia/solicitud-poligrafia.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes.component';
import { CentroCostoComponent } from './centro-costo/centro-costo.component';
import { SolicitudEspComponent } from './solicitud-esp/solicitud-esp.component';
import { IndexComponent } from './index/index.component';
import { NgxPermissionsGuard } from 'ngx-permissions';
import {SolicitudServiciosComponent} from './solicitud-servicios/solicitud-servicios.component';
import {SolicitudInvestigacionComponent} from './solicitud-investigacion/solicitud-investigacion.component';
import {SolicitarServiciosGuard} from '../../guards/solicitar-servicios.guard';

const routes: Routes = [
  {
    path: '',
    component: ClientesComponent,
    children: [
      {
        path: 'index',
        component: IndexComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ['ADG', 'DOPE']
          }
        }
      },
      { path: 'solicitud', component: CentroCostoComponent },
      {
        path: 'solicitud-servicios',
        component: SolicitudServiciosComponent,
        canActivate: [SolicitarServiciosGuard],
        children: [
          { path: 'esp', component: SolicitudEspComponent },
          { path: 'investigaciones', component:  SolicitudInvestigacionComponent },
          { path: 'poligrafia', component:  SolicitudPoligrafiaComponent },
          { path: '', redirectTo: 'esp', pathMatch: 'full' }
        ]
      },
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      { path: '**', redirectTo: '../'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
