import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudServicioRoutingModule } from './solicitud-servicio-routing.module';
import { SolicitudServicioComponent } from './solicitud-servicio.component';
import { CentroCostoComponent } from './centro-costo/centro-costo.component';
import { SolicitudEspComponent } from './solicitud-esp/solicitud-esp.component';
import { CardModule } from '../../card/card.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxPermissionsModule} from 'ngx-permissions';
import { SolicitudInvestigacionComponent } from './solicitud-investigacion/solicitud-investigacion.component';
import { SolicitudServiciosComponent } from './solicitud-servicios/solicitud-servicios.component';
import { SolicitudPoligrafiaComponent } from './solicitud-poligrafia/solicitud-poligrafia.component';
import { ModalModule } from '../../modal/modal.module';
import { NotificationModule } from '../../notification/notification.module';
import { SolicitudEspMasivoComponent } from './solicitud-esp-masivo/solicitud-esp-masivo.component';

@NgModule({
  declarations: [
    SolicitudServicioComponent,
    CentroCostoComponent,
    SolicitudEspComponent,
    SolicitudInvestigacionComponent,
    SolicitudServiciosComponent,
    SolicitudPoligrafiaComponent,
    SolicitudEspMasivoComponent
  ],
  imports: [
    CommonModule,
    SolicitudServicioRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    ModalModule,
    NotificationModule,
    NgxPermissionsModule.forChild(),
  ]
})
export class SolicitudServicioModule { }
