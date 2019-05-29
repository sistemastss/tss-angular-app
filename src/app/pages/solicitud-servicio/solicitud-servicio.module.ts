import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudServicioRoutingModule } from './solicitud-servicio-routing.module';
import { SolicitudServicioComponent } from './solicitud-servicio.component';
import { CentroCostoComponent } from './components/centro-costo/centro-costo.component';
import { SolicitudEspComponent } from './components/solicitud-esp/solicitud-esp.component';
import { CardModule } from '../../card/card.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxPermissionsModule} from 'ngx-permissions';
import { SolicitudInvestigacionComponent } from './components/solicitud-investigacion/solicitud-investigacion.component';
import { SolicitudServiciosComponent } from './components/solicitud-servicios/solicitud-servicios.component';
import { SolicitudPoligrafiaComponent } from './components/solicitud-poligrafia/solicitud-poligrafia.component';
import { ModalModule } from '../../modal/modal.module';
import { NotificationModule } from '../../notification/notification.module';
import { SolicitudEspMasivoComponent } from './components/solicitud-esp-masivo/solicitud-esp-masivo.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducers';
import { effects } from './store/effects';

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
    StoreModule.forFeature('solicitudServicio', reducers),
    EffectsModule.forFeature(effects),
  ]
})
export class SolicitudServicioModule { }
