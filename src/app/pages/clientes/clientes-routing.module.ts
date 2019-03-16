import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes.component';
import { CentroCostoComponent } from './centro-costo/centro-costo.component';
import { RequestEspComponent } from './request-esp/request-esp.component';
import { IndexComponent } from './index/index.component';
import { NgxPermissionsGuard } from 'ngx-permissions';
import {SolicitudServiciosComponent} from './solicitud-servicios/solicitud-servicios.component';
import {RequestInvestigacionComponent} from './request-investigacion/request-investigacion.component';

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
        children: [
          { path: 'esp', component: RequestEspComponent },
          { path: 'investigaciones', component:  RequestInvestigacionComponent },
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
