import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlGuard } from './control/guards/control.guard';
import { MainComponent } from './main.component';

const routes: Routes = [
  { path: '',
    component: MainComponent,
    children: [
      { path: 'nuevo-servicio',
        loadChildren: './solicitud-servicio/solicitud-servicio.module#SolicitudServicioModule',
        data: { breadcrumb: 'Nuevo servicio' },
      },
      { path: 'actividades',
        loadChildren: './actividades/actividades.module#ActividadesModule',
        data: { breadcrumb: 'Actividades' },
      },
      {
        path: 'investigacion',
        loadChildren: './investigacion/investigacion.module#InvestigacionModule',
        data: { breadcrumb: 'Investigacion' },
      },
      {
        path: 'perfil',
        loadChildren: './perfil/perfil.module#PerfilModule',
        data: { breadcrumb: 'Perfil' },
      },
      {
        path: 'freelance',
        loadChildren: './freelance/freelance.module#FreelanceModule',
        data: { breadcrumb: 'Freelance' },
      },
      {
        path: 'dashboard',
        loadChildren: './control/control.module#ControlModule',
        data: { breadcrumb: 'Dashboard', }
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
