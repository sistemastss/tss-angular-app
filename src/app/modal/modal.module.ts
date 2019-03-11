import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { ModalDirective } from '../directives/modal.directive';

@NgModule({
  declarations: [
    ModalComponent,
    ModalDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalComponent
  ]
})
export class ModalModule { }
