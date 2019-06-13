import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitaDomiciliariaComponent } from './visita-domiciliaria/visita-domiciliaria.component';
import { EstadoSalubridadComponent } from './visita-domiciliaria/estado-salubridad/estado-salubridad.component';
import { InformacionFamiliarComponent } from './visita-domiciliaria/informacion-familiar/informacion-familiar.component';
import { EntornoHabitacionalComponent } from './visita-domiciliaria/entorno-habitacional/entorno-habitacional.component';
import { ModusVivendiComponent } from './visita-domiciliaria/modus-vivendi/modus-vivendi.component';
import { ActividadesComponent } from './actividades.component';
import { HistorialJudicialComponent } from './historial-judicial/historial-judicial.component';
import { SeguridadComponent } from './visita-domiciliaria/seguridad/seguridad.component';
import { VerificacionAcademicaComponent} from './verificacion-academica/verificacion-academica.component';
import { VerificacionLaboralComponent} from './verificacion-laboral/verificacion-laboral.component';
import { DueDilligenceComponent} from './due-dilligence/due-dilligence.component';
import { DecadactilarComponent} from './decadactilar/decadactilar.component';
import { PruebaPsicotecnicaComponent} from './prueba-psicotecnica/prueba-psicotecnica.component';
import { EvaluacionFinancieraComponent} from './evaluacion-financiera/evaluacion-financiera.component';
import {DictamenGrafologicoComponent} from './dictamen-grafologico/dictamen-grafologico.component';
import {ConsolidadoComponent} from './consolidado/consolidado.component';
import {ActividadesGuard} from '../../guards/actividades.guard';
import {DatosPersonalesComponent} from './datos-personales/datos-personales.component';

const routes: Routes = [
  {
    path: '',
    component: ActividadesComponent,
    children: [
      { path: 'datos-personales', component: DatosPersonalesComponent },
      { path: 'historial-judicial', component: HistorialJudicialComponent},

      {
        path: 'visita-domiciliaria',
        component: VisitaDomiciliariaComponent,
        children: [
          { path: 'visita-domiciliaria-seguridad', component: SeguridadComponent },
          { path: 'salubridad', component: EstadoSalubridadComponent },
          { path: 'informacion-familiar', component: InformacionFamiliarComponent },
          { path: 'informe2', component: EntornoHabitacionalComponent },
          { path: 'modus-vivendi', component: ModusVivendiComponent },
          { path: '', redirectTo: 'visita-domiciliaria-seguridad', pathMatch: 'full' }
        ]
      },
      { path: 'verificacion-academica', component: VerificacionAcademicaComponent },
      { path: 'verificacion-laboral', component: VerificacionLaboralComponent },
      { path: 'dictamen-grafologico', component: DictamenGrafologicoComponent },
      { path: 'decadactilar', component: DecadactilarComponent },
      { path: 'prueba-psicotecnica', component: PruebaPsicotecnicaComponent },
      { path: 'evaluacion-financiera', component: EvaluacionFinancieraComponent },
      { path: 'consolidado', component: ConsolidadoComponent },
      // { path: '', redirectTo: 'historial-judicial', pathMatch: 'full' }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActividadesRoutingModule {}
