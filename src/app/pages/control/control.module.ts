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
import { ModalServicioComponent } from './components/modal-servicio/modal-servicio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetalleActividadesComponent } from './components/detalle-actividades/detalle-actividades.component';
import { ProgramacionComponent } from './components/freelance/programacion/programacion.component';
import { SeguimientoComponent } from './components/freelance/seguimiento/seguimiento.component';
import { ViaticosComponent } from './components/freelance/viaticos/viaticos.component';
import { AdministradorComponent } from './components/administrador/administrador.component';

@NgModule({
  declarations: [
    MainComponent,
    ClienteComponent,
    FreelanceComponent,
    AnalistaEspComponent,
    FiltroComponent,
    ModalServicioComponent,
    DetalleActividadesComponent,
    ProgramacionComponent,
    SeguimientoComponent,
    ViaticosComponent,
    AdministradorComponent,
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
    ModalServicioComponent,
    DetalleActividadesComponent,
  ],
})
export class ControlModule { }
