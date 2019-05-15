import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FreelanceComponent } from './freelance.component';
import { ProgramacionComponent } from './informe/programacion/programacion.component';
import { SeguimientoComponent } from './informe/seguimiento/seguimiento.component';
import { ViaticosComponent } from './informe/viaticos/viaticos.component';
import { InformeComponent } from './informe/informe.component';
import { FreelanceRoutingModule } from './freelance-routing.module';

@NgModule({
  declarations: [
    FreelanceComponent,
    ProgramacionComponent,
    SeguimientoComponent,
    ViaticosComponent,
    InformeComponent,
  ],
  imports: [
    NgbModule,
    CommonModule,
    FreelanceRoutingModule
  ]
})
export class FreelanceModule { }
