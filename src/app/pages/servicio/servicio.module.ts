import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioRoutingModule } from './servicio-routing.module';
import { ServicioComponent } from './servicio.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { FormsModule } from '@angular/forms';
import { FreelanceComponent } from './freelance/freelance.component';
import { AnalistaEspComponent } from './analista-esp/analista-esp.component';
import {ModalModule} from '../../modal/modal.module';
// import {ModalModule} from 'ng-modal';

@NgModule({
  declarations: [
    ServicioComponent,
    FreelanceComponent,
    AnalistaEspComponent
  ],
  imports: [
    CommonModule,
    ServicioRoutingModule,
    ModalModule,
    NgxPermissionsModule.forChild(),
    FormsModule
  ]
})
export class ServicioModule { }
