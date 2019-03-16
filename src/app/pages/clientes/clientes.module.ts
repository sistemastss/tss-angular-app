import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import { IndexComponent } from './index/index.component';
import { CentroCostoComponent } from './centro-costo/centro-costo.component';
import { RequestEspComponent } from './request-esp/request-esp.component';
import { CardModule} from '../../card/card.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPermissionsModule} from 'ngx-permissions';
import { RequestInvestigacionComponent } from './request-investigacion/request-investigacion.component';
import { SolicitudServiciosComponent } from './solicitud-servicios/solicitud-servicios.component';

// @ts-ignore
@NgModule({
  declarations: [
    ClientesComponent,
    IndexComponent,
    CentroCostoComponent,
    RequestEspComponent,
    RequestInvestigacionComponent,
    SolicitudServiciosComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    NgxPermissionsModule.forChild()
  ]
})
export class ClientesModule { }
