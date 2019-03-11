import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './inicio.component';
import {MenuComponent} from './menu/menu.component';
import {SubmenuComponent} from './submenu/submenu.component';
import {OperacionesComponent} from '../operaciones/operaciones.component';

const routes: Routes = [
  { path: '',
    component: InicioComponent,
    children: [
      { path: 'dash', component: MenuComponent },
      { path: '', redirectTo: 'dash', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
