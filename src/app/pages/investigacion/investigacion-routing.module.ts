import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvestigacionComponent } from './investigacion.component';

const routes: Routes = [
  {path: '', component: InvestigacionComponent},
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestigacionRoutingModule { }
