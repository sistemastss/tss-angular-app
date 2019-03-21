import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioRoutingModule } from './inicio-routing.module';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio.component';
import {SubmenuComponent} from './submenu/submenu.component';
import {NavBarModule} from '../nav-bar/nav-bar.module';
import {NgxPermissionsModule} from 'ngx-permissions';
import {CardModule} from '../../card/card.module';

@NgModule({
  declarations: [
    MenuComponent,
    InicioComponent,
    SubmenuComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    NavBarModule,
    CardModule,
    // ngx permissions
    NgxPermissionsModule.forChild()
  ]
})
export class InicioModule { }
