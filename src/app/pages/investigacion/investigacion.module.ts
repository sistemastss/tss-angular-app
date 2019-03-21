import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestigacionRoutingModule } from './investigacion-routing.module';
import { InvestigacionComponent } from './investigacion.component';

@NgModule({
  declarations: [
    InvestigacionComponent
  ],
  imports: [
    CommonModule,
    InvestigacionRoutingModule,
    ReactiveFormsModule
  ]
})
export class InvestigacionModule { }
