import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudServicioRoutingModule } from './solicitud-servicio-routing.module';
import { SolicitudServicioComponent } from './solicitud-servicio.component';
import { CentroCostoComponent } from './components/centro-costo/centro-costo.component';
import { SolicitudEspComponent } from './components/solicitud-esp/solicitud-esp.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SolicitudInvestigacionComponent } from './components/solicitud-investigacion/solicitud-investigacion.component';
import { SolicitudServiciosComponent } from './components/solicitud-servicios/solicitud-servicios.component';
import { SolicitudPoligrafiaComponent } from './components/solicitud-poligrafia/solicitud-poligrafia.component';
import { SolicitudEspMasivoComponent } from './components/solicitud-esp-masivo/solicitud-esp-masivo.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducers';
import { effects } from './store/effects';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    NgbModule,
    StoreModule.forFeature('solicitudServicio', reducers),
    EffectsModule.forFeature(effects),
  ]
})
export class SolicitudServicioModule { }
