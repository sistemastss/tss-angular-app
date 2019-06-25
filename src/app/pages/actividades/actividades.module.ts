import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActividadesRoutingModule } from './actividades-routing.module';
import { HistorialJudicialComponent } from './historial-judicial/historial-judicial.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VisitaDomiciliariaComponent } from './visita-domiciliaria/visita-domiciliaria.component';
import { EstadoSalubridadComponent } from './visita-domiciliaria/estado-salubridad/estado-salubridad.component';
import { InformacionFamiliarComponent } from './visita-domiciliaria/informacion-familiar/informacion-familiar.component';
import { EntornoHabitacionalComponent } from './visita-domiciliaria/entorno-habitacional/entorno-habitacional.component';
import { ModusVivendiComponent } from './visita-domiciliaria/modus-vivendi/modus-vivendi.component';
import { ActividadesComponent } from './actividades.component';
import { SeguridadComponent } from './visita-domiciliaria/seguridad/seguridad.component';
import { VerificacionAcademicaComponent } from './verificacion-academica/verificacion-academica.component';
import { VerificacionLaboralComponent } from './verificacion-laboral/verificacion-laboral.component';
import { DueDilligenceComponent } from './due-dilligence/due-dilligence.component';
import { DecadactilarComponent } from './decadactilar/decadactilar.component';
import { PruebaPsicotecnicaComponent } from './prueba-psicotecnica/prueba-psicotecnica.component';
import { EvaluacionFinancieraComponent } from './evaluacion-financiera/evaluacion-financiera.component';
import { DictamenGrafologicoComponent } from './dictamen-grafologico/dictamen-grafologico.component';
import { ConsolidadoComponent } from './consolidado/consolidado.component';
import { AsignarFuncionarioComponent } from './asignar-funcionario/asignar-funcionario.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';

@NgModule({
  declarations: [
    HistorialJudicialComponent,
    VisitaDomiciliariaComponent,
    EstadoSalubridadComponent,
    InformacionFamiliarComponent,
    EntornoHabitacionalComponent,
    ModusVivendiComponent,
    ActividadesComponent,
    SeguridadComponent,
    VerificacionAcademicaComponent,
    VerificacionLaboralComponent,
    DueDilligenceComponent,
    DecadactilarComponent,
    PruebaPsicotecnicaComponent,
    EvaluacionFinancieraComponent,
    DictamenGrafologicoComponent,
    ConsolidadoComponent,
    AsignarFuncionarioComponent,
    DatosPersonalesComponent
  ],
  imports: [
    CommonModule,
    ActividadesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPermissionsModule.forChild()
  ],
  exports: [
    HistorialJudicialComponent
  ]
})
export class ActividadesModule { }
