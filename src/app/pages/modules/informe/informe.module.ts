import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformeRoutingModule } from './informe-routing.module';
import { MainComponent } from './components/main/main.component';
import { EstudioSeguridadComponent } from './components/estudio-seguridad/estudio-seguridad.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatosPersonalesComponent } from './components/datos-personales/datos-personales.component';
import { FamiliaComponent } from './components/informacion-familiar/familia.component';
import { Informe2Component } from './components/informe2/informe2.component';
import { HistorialLaboralAcademicoComponent } from './components/historial-laboral-academico/historial-laboral-academico.component';
import { ModusVivendiComponent } from './components/modus-vivendi/modus-vivendi.component';
import { InfoPersonalComponent } from './components/datos-personales/info-personal/info-personal.component';
import { EstadoSaludComponent } from './components/datos-personales/estado-salud/estado-salud.component';
import { HabitosSaludComponent } from './components/datos-personales/habitos-salud/habitos-salud.component';
import { StoreModule } from '@ngrx/store';
import * as fromInforme from './store/reducers/informe.reducer';
import { EffectsModule } from '@ngrx/effects';
import { InformeEffects } from './store/effects/informe.effects';
import { NucleoFamiliarComponent } from './components/informacion-familiar/nucleo-familiar/nucleo-familiar.component';
import { HijosComponent } from './components/informacion-familiar/hijos/hijos.component';
import { InformacionFamiliarComponent } from './components/informacion-familiar/informacion-familiar/informacion-familiar.component';
import { ReferenciasComponent } from './components/informacion-familiar/referencias/referencias.component';
import { EntornoHabitacionalComponent } from './components/informe2/entorno-habitacional/entorno-habitacional.component';
import { CondicionesInmuebleComponent } from './components/informe2/condiciones-inmueble/condiciones-inmueble.component';
import { CondicionesSectorComponent } from './components/informe2/condiciones-sector/condiciones-sector.component';
import { IngresosComponent } from './components/modus-vivendi/ingresos/ingresos.component';
import { EgresosComponent } from './components/modus-vivendi/egresos/egresos.component';
import { InmueblesComponent } from './components/modus-vivendi/inmuebles/inmuebles.component';
import { MueblesComponent } from './components/modus-vivendi/muebles/muebles.component';
import { ReferenciasBancariasComponent } from './components/modus-vivendi/referencias-bancarias/referencias-bancarias.component';
import { CapacidadEndeudamientoComponent } from './components/modus-vivendi/capacidad-endeudamiento/capacidad-endeudamiento.component';
import { HistorialLaboralComponent } from './components/historial-laboral-academico/historial-laboral/historial-laboral.component';
import { NivelAcademicoComponent } from './components/historial-laboral-academico/nivel-academico/nivel-academico.component';

@NgModule({
  declarations: [
    MainComponent,
    EstudioSeguridadComponent,
    DatosPersonalesComponent,
    FamiliaComponent,
    Informe2Component,
    HistorialLaboralAcademicoComponent,
    ModusVivendiComponent,
    InfoPersonalComponent,
    EstadoSaludComponent,
    HabitosSaludComponent,
    NucleoFamiliarComponent,
    HijosComponent,
    InformacionFamiliarComponent,
    ReferenciasComponent,
    EntornoHabitacionalComponent,
    CondicionesInmuebleComponent,
    CondicionesSectorComponent,
    IngresosComponent,
    EgresosComponent,
    InmueblesComponent,
    MueblesComponent,
    ReferenciasBancariasComponent,
    CapacidadEndeudamientoComponent,
    HistorialLaboralComponent,
    NivelAcademicoComponent,
  ],
  imports: [
    CommonModule,
    InformeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('informe', fromInforme.reducer),
    EffectsModule.forFeature([InformeEffects])
  ]
})
export class InformeModule { }
