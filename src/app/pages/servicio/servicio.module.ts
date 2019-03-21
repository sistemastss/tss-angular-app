import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioRoutingModule } from './servicio-routing.module';
import { ServicioComponent } from './servicio.component';
import {NgxPermissionsModule} from 'ngx-permissions';

@NgModule({
  declarations: [
    ServicioComponent
  ],
  imports: [
    CommonModule,
    ServicioRoutingModule,
    NgxPermissionsModule.forChild()
  ]
})
export class ServicioModule { }
