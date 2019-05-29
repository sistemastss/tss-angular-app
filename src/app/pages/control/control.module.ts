import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ClienteComponent } from './components/cliente/cliente.component';
import { FreelanceComponent } from './components/freelance/freelance.component';
import { AnalistaEspComponent } from './components/analista-esp/analista-esp.component';
import { FiltroComponent } from './components/filtro/filtro.component';
import { RouterModule } from '@angular/router';
import { ControlRoutingModule } from './control-routing.module';
import { reducers } from './store/reducers';
import { effects } from './store/effects';
import { DetalleServicioComponent } from './components/detalle-servicio/detalle-servicio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetalleActividadesComponent } from './components/detalle-actividades/detalle-actividades.component';

@NgModule({
  declarations: [
    MainComponent,
    ClienteComponent,
    FreelanceComponent,
    AnalistaEspComponent,
    FiltroComponent,
    DetalleServicioComponent,
    DetalleActividadesComponent,
  ],
  imports: [
    NgbModule,
    CommonModule,
    ControlRoutingModule,
    RouterModule,
    StoreModule.forFeature('control', reducers),
    EffectsModule.forFeature(effects),
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    DetalleServicioComponent,
    DetalleActividadesComponent,
  ],
})
export class ControlModule { }
