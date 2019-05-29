import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformeRoutingModule } from './informe-routing.module';
import { MainComponent } from './components/main/main.component';
import { EstudioSeguridadComponent } from './components/estudio-seguridad/estudio-seguridad.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VisitaDomiciliariaComponent } from './components/visita-domiciliaria/visita-domiciliaria.component';
import { SeguridadComponent } from './components/visita-domiciliaria/seguridad/seguridad.component';
import { EstadoSalubridadComponent } from './components/visita-domiciliaria/estado-salubridad/estado-salubridad.component';
import { DatosPersonalesComponent } from './components/datos-personales/datos-personales.component';
import { InformacionFamiliarComponent } from './components/informacion-familiar/informacion-familiar.component';
import { EntornoHabitacionalComponent } from './components/entorno-habitacional/entorno-habitacional.component';
import { HistorialLaboralAcademicoComponent } from './components/historial-laboral-academico/historial-laboral-academico.component';
import { ModusVivendiComponent } from './components/modus-vivendi/modus-vivendi.component';

@NgModule({
  declarations: [
    MainComponent,
    EstudioSeguridadComponent,
    VisitaDomiciliariaComponent,
    SeguridadComponent,
    EstadoSalubridadComponent,
    DatosPersonalesComponent,
    InformacionFamiliarComponent,
    EntornoHabitacionalComponent,
    HistorialLaboralAcademicoComponent,
    ModusVivendiComponent,
  ],
  imports: [
    CommonModule,
    InformeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InformeModule { }
