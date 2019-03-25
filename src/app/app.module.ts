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
import { NavBarModule} from './pages/nav-bar/nav-bar.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import { MailServiceService } from './services/mail-service.service';
import { StoreModule } from '@ngrx/store';
import { WordsLimiterPipe } from './pipes/words-limiter.pipe';
import { StoreDevtoolsModule} from '@ngrx/store-devtools';
import { EffectsModule} from '@ngrx/effects';
import { effects } from './store/effects';
import { reducers } from './store/reducers';
import { environment } from '../environments/environment';

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
    NavBarModule,
    NgxPermissionsModule.forRoot(),
    // Specify your library as an import
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [ActividadesService, MailServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
