import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FreelanceComponent } from './freelance.component';
import { ProgramacionComponent } from '../control/components/freelance/programacion/programacion.component';
import { SeguimientoComponent } from '../control/components/freelance/seguimiento/seguimiento.component';
import { ViaticosComponent } from '../control/components/freelance/viaticos/viaticos.component';
import { MainComponent } from './components/main.component';
import { FreelanceRoutingModule } from './freelance-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromFreelance from './store/reducers/freelance.reducer';
import { FreelanceEffects } from './store/effects/freelance.effects';

@NgModule({
  declarations: [
    // FreelanceComponent,
    // ProgramacionComponent,
    // SeguimientoComponent,
    // ViaticosComponent,
    MainComponent,
  ],
  imports: [
    NgbModule,
    CommonModule,
    FreelanceRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature('freelance', fromFreelance.reducer),
    EffectsModule.forFeature([FreelanceEffects])
  ]
})
export class FreelanceModule { }
