import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { EstudioSeguridadComponent } from './components/estudio-seguridad/estudio-seguridad.component';
import { DatosPersonalesComponent } from './components/datos-personales/datos-personales.component';
import { FamiliaComponent } from './components/informacion-familiar/familia.component';
import { Informe2Component } from './components/informe2/informe2.component';
import { HistorialLaboralAcademicoComponent } from './components/historial-laboral-academico/historial-laboral-academico.component';
import { ModusVivendiComponent } from './components/modus-vivendi/modus-vivendi.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'estudio-seguridad', component: EstudioSeguridadComponent },
      { path: 'datos-personales', component: DatosPersonalesComponent },
      { path: 'informacion-familiar', component: FamiliaComponent },
      { path: 'informe2', component: Informe2Component },
      { path: 'modus-vivendi', component: ModusVivendiComponent },
      { path: 'historial-laboral-academico', component: HistorialLaboralAcademicoComponent},
    ],
  },
  { path: '', redirectTo: 'estudio-seguridad', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformeRoutingModule { }
