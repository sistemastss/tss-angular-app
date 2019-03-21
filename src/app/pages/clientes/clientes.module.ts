import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import { IndexComponent } from './index/index.component';
import { CentroCostoComponent } from './centro-costo/centro-costo.component';
import { SolicitudEspComponent } from './solicitud-esp/solicitud-esp.component';
import { CardModule} from '../../card/card.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPermissionsModule} from 'ngx-permissions';
import { SolicitudInvestigacionComponent } from './solicitud-investigacion/solicitud-investigacion.component';
import { SolicitudServiciosComponent } from './solicitud-servicios/solicitud-servicios.component';
import { SolicitudPoligrafiaComponent } from './solicitud-poligrafia/solicitud-poligrafia.component';

// @ts-ignore
@NgModule({
  declarations: [
    ClientesComponent,
    IndexComponent,
    CentroCostoComponent,
    SolicitudEspComponent,
    SolicitudInvestigacionComponent,
    SolicitudServiciosComponent,
    SolicitudPoligrafiaComponent
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
