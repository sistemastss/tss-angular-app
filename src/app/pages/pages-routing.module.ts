import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  { path: '',
    component: PagesComponent,
    children: [
      {
        path: 'inicio',
        loadChildren: './inicio/inicio.module#InicioModule'
      },
      {
        path: 'operaciones',
        loadChildren: './operaciones/operaciones.module#OperacionesModule'
      },
      { path: 'clientes',
        loadChildren: './customer/customer.module#CustomerModule'
      },
      { path: 'actividades',
        loadChildren: './actividades/actividades.module#ActividadesModule'
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
