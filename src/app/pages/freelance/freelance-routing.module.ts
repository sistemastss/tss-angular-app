import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FreelanceComponent} from './freelance.component';
import {ProgramacionComponent} from './informe/programacion/programacion.component';
import {SeguimientoComponent} from './informe/seguimiento/seguimiento.component';
import {ViaticosComponent} from './informe/viaticos/viaticos.component';
import {InformeComponent} from './informe/informe.component';

const routes: Routes = [
    { path: '', component: FreelanceComponent },
    {
      path: 'informe',
      component: InformeComponent,
      children: [
        { path: 'programacion', component: ProgramacionComponent },
        { path: 'seguimiento', component: SeguimientoComponent },
        { path: 'viaticos', component: ViaticosComponent },
      ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FreelanceRoutingModule { }
