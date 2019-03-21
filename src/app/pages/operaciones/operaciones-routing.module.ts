import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EspComponent} from './esp/esp.component';
import {OperacionesComponent} from './operaciones.component';
import {IndexComponent} from './index/index.component';

const routes: Routes = [
  {
    path: '',
    component: OperacionesComponent,
    children: [
      { path: 'index', component: IndexComponent },
      { path: 'esp', component: EspComponent },
      { path: '', redirectTo: 'index', pathMatch: 'full'},
      { path: '**', redirectTo: '../esp'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperacionesRoutingModule {}

