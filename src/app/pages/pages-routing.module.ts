import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  { path: '',
    component: PagesComponent,
    children: [
      {
        path: 'control',
        loadChildren: './servicio/servicio.module#ServicioModule'
      },
      { path: 'nuevo-servicio',
        loadChildren: './solicitud-servicio/solicitud-servicio.module#SolicitudServicioModule'
      },
      { path: 'actividades',
        loadChildren: './actividades/actividades.module#ActividadesModule'
      },
      {
        path: 'investigacion',
        loadChildren: './investigacion/investigacion.module#InvestigacionModule'
      },
      {
        path: 'perfil',
        loadChildren: './perfil/perfil.module#PerfilModule'
      },
      {
        path: 'freelance',
        loadChildren: './freelance/freelance.module#FreelanceModule'
      },
      {
        path: '',
        redirectTo: 'perfil',
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
