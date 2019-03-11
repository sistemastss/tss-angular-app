import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EspComponent} from './esp/esp.component';
import {OperacionesComponent} from './operaciones.component';
import {IndexComponent} from './index/index.component';
import {InvestigacionesComponent} from './investigaciones/investigaciones.component';

const routes: Routes = [
  {
    path: '',
    component: OperacionesComponent,
    children: [
      { path: 'index', component: IndexComponent },
      { path: 'esp', component: EspComponent },
      { path: 'investigaciones', component: InvestigacionesComponent },
      { path: '', redirectTo: 'index', pathMatch: 'full'},
      { path: '**', redirectTo: '../'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperacionesRoutingModule {}

