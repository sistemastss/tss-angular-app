import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  { path: '',
    component: PagesComponent,
    children: [
      {
        path: 'inicio',
        loadChildren: './servicio/servicio.module#ServicioModule'
      },
      {
        path: 'servicios',
        loadChildren: './operaciones/operaciones.module#OperacionesModule'
      },
      { path: 'clientes',
        loadChildren: './clientes/clientes.module#ClientesModule'
      },
      { path: 'actividades',
        loadChildren: './actividades/actividades.module#ActividadesModule'
      },
      {
        path: 'investigacion',
        loadChildren: './investigacion/investigacion.module#InvestigacionModule'
      },
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
