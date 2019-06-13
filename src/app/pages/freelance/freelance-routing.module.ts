import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FreelanceComponent} from './freelance.component';
import {ProgramacionComponent} from '../control/components/freelance/programacion/programacion.component';
import {SeguimientoComponent} from '../control/components/freelance/seguimiento/seguimiento.component';
import {ViaticosComponent} from '../control/components/freelance/viaticos/viaticos.component';
import {MainComponent} from './components/main.component';

const routes: Routes = [
    { path: '', component: FreelanceComponent },
    {
      path: 'informe',
      component: MainComponent,
      /*children: [
        { path: 'programacion', component: ProgramacionComponent },
        { path: 'seguimiento', component: SeguimientoComponent },
        { path: 'viaticos', component: ViaticosComponent },
        { path: '', redirectTo: 'programacion' },
      ] */
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FreelanceRoutingModule { }
