import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearComponent } from './components/crear/crear.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './components/main.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { MostrarComponent } from './components/mostrar/mostrar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [CrearComponent, MostrarComponent, MainComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsuariosRoutingModule,
    NgbModule,
  ]
})
export class UsuariosModule { }
