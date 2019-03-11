import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { IndexComponent } from './index/index.component';
import { RequestComponent } from './request/request.component';
import { RequestEspComponent } from './request-esp/request-esp.component';
import { CardModule} from '../../card/card.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPermissionsModule} from 'ngx-permissions';
import { RequestInvestigacionComponent } from './request-investigacion/request-investigacion.component';
import { SolicitudServiciosComponent } from './solicitud-servicios/solicitud-servicios.component';

// @ts-ignore
@NgModule({
  declarations: [
    CustomerComponent,
    IndexComponent,
    RequestComponent,
    RequestEspComponent,
    RequestInvestigacionComponent,
    SolicitudServiciosComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    NgxPermissionsModule.forChild()
  ]
})
export class CustomerModule { }
