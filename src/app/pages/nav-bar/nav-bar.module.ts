import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavComponent} from './nav/nav.component';
import {MenuItemToggleDirective} from '../../directives/menu-item-toggle.directive';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    NavComponent,
    MenuItemToggleDirective,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavComponent
  ]
})
export class NavBarModule { }
