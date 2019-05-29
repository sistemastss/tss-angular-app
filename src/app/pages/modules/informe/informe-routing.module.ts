import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { VisitaDomiciliariaComponent } from './components/visita-domiciliaria/visita-domiciliaria.component';
import { SeguridadComponent } from './components/visita-domiciliaria/seguridad/seguridad.component';
import { EstadoSalubridadComponent } from './components/visita-domiciliaria/estado-salubridad/estado-salubridad.component';

import { EstudioSeguridadComponent } from './components/estudio-seguridad/estudio-seguridad.component';
import { DatosPersonalesComponent } from './components/datos-personales/datos-personales.component';
import { InformacionFamiliarComponent } from './components/informacion-familiar/informacion-familiar.component';
import { EntornoHabitacionalComponent } from './components/entorno-habitacional/entorno-habitacional.component';
import { HistorialLaboralAcademicoComponent } from './components/historial-laboral-academico/historial-laboral-academico.component';
import { ModusVivendiComponent } from './components/modus-vivendi/modus-vivendi.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'estudio-seguridad', component: EstudioSeguridadComponent },
      { path: 'datos-personales', component: DatosPersonalesComponent },
      { path: 'informacion-familiar', component: InformacionFamiliarComponent },
      { path: 'entorno-habitacional', component: EntornoHabitacionalComponent },
      { path: 'historial-laboral-academico', component: HistorialLaboralAcademicoComponent},
      { path: 'modus-vivendi', component: ModusVivendiComponent },
      {
        path: 'visita-domiciliaria',
        component: VisitaDomiciliariaComponent,
        children: [
          { path: 'visita-domiciliaria-seguridad', component: SeguridadComponent },
          { path: 'salubridad', component: EstadoSalubridadComponent },
          // { path: 'informacion-familiar', component: InformacionFamiliarComponent },
          // { path: 'entorno-habitacional', component: EntornoHabitacionalComponent },
          // { path: 'modus-vivendi', component: ModusVivendiComponent },
          { path: '', redirectTo: 'visita-domiciliaria-seguridad', pathMatch: 'full' }
        ]
      },
    ],
  },
  { path: '', redirectTo: 'estudio-seguridad', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformeRoutingModule { }
