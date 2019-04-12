import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavComponent} from './nav/nav.component';
import {MenuItemToggleDirective} from '../../directives/menu-item-toggle.directive';
import {RouterModule} from '@angular/router';
import { SideMenuComponent } from './side-menu/side-menu.component';

@NgModule({
  declarations: [
    NavComponent,
    MenuItemToggleDirective,
    SideMenuComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavComponent,
    SideMenuComponent
  ]
})
export class NavBarModule { }
