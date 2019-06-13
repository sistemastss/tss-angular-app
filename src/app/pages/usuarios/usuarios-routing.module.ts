import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main.component';
import { CrearComponent } from './components/crear/crear.component';
import { MostrarComponent } from './components/mostrar/mostrar.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'crear', component: CrearComponent },
      { path: 'listar', component: MostrarComponent },
      { path: '', redirectTo: 'listar', pathMatch: 'full' },
      { path: '**', redirectTo: '../'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule{ }
