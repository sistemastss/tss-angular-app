import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ControlGuard } from './control/guards/control.guard';

const routes: Routes = [
  { path: '',
    component: PagesComponent,
    children: [
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
        path: 'dashboard',
        loadChildren: './control/control.module#ControlModule',
        // canActivate: [ControlGuard]
      },
      {
        path: 'usuarios',
        loadChildren: './usuarios/usuarios.module#UsuariosModule'
      },
      {
        path: 'informe',
        loadChildren: './modules/informe/informe.module#InformeModule'
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: '',
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
