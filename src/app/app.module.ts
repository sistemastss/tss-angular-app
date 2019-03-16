import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VistaDomiciliariaComponent } from './vista-domiciliaria/vista-domiciliaria.component';
import { ActividadesService } from './services/actividades.service';
import { VerificacionAcademitaComponent } from './verificacion-academita/verificacion-academita.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { ModalModule} from './modal/modal.module';
import { NavBarModule} from './pages/nav-bar/nav-bar.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import { MailServiceService} from './services/mail-service.service';
import { StoreModule } from '@ngrx/store';
import { centroCostoReducer, investigacionReducer, servicioEspReducer } from './store/reducers/reducers';
import { WordsLimiterPipe } from './pipes/words-limiter.pipe';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {effects} from './store/effects';
import {environment} from '../environments/environment';
import {reducers} from './store/reducers';

@NgModule({
  declarations: [
    AppComponent,
    VistaDomiciliariaComponent,
    VerificacionAcademitaComponent,
    DataTableComponent,
    WordsLimiterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule,
    NavBarModule,
    NgxPermissionsModule.forRoot(),
    // Specify your library as an import
    StoreModule.forRoot(reducers),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot(effects)
  ],
  providers: [ActividadesService, MailServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
