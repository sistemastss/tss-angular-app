import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperacionesRoutingModule } from './operaciones-routing.module';
import { OperacionesComponent } from './operaciones.component';
import { EspComponent } from './esp/esp.component';
import { IndexComponent } from './index/index.component';
import {CardModule} from '../../card/card.module';
import {NgxPermissionsModule} from 'ngx-permissions';
import { InvestigacionesComponent } from './investigaciones/investigaciones.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ServiciosComponent } from './servicios/servicios.component';

@NgModule({
  declarations: [
    OperacionesComponent,
    EspComponent,
    IndexComponent,
    InvestigacionesComponent,
    ServiciosComponent
  ],
  imports: [
    CommonModule,
    OperacionesRoutingModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPermissionsModule.forChild()
  ]
})
export class OperacionesModule {}
