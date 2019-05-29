import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { FreelanceComponent } from './components/freelance/freelance.component';
import { AnalistaEspComponent } from './components/analista-esp/analista-esp.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'cl', component: ClienteComponent },
      { path: 'frc', component: FreelanceComponent },
      { path: 'aesp', component: AnalistaEspComponent },
    ]
  },
  { path: '', redirectTo: 'cl', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControlRoutingModule { }
