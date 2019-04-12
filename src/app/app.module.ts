import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ActividadesService } from './services/actividades.service';
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
import {TokenInterceptorService} from './auth/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
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
  providers: [
    ActividadesService,
    MailServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
