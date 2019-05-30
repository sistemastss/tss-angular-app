import { Component, OnInit } from '@angular/core';
import { EstudioSeguridadComponent } from '../estudio-seguridad/estudio-seguridad.component';
import { DatosPersonalesComponent } from '../datos-personales/datos-personales.component';
import { InformacionFamiliarComponent } from '../informacion-familiar/informacion-familiar.component';
import { EntornoHabitacionalComponent } from '../entorno-habitacional/entorno-habitacional.component';
import { ModusVivendiComponent } from '../modus-vivendi/modus-vivendi.component';
import { HistorialLaboralAcademicoComponent } from '../historial-laboral-academico/historial-laboral-academico.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: []
})
export class MainComponent implements OnInit {

  informe = [
    {
      path : './estudio-seguridad',
      name : 'Estudio de seguridad',
    },
    { path: './datos-personales',
      name: 'Datos personales',
    },
    { path: './informacion-familiar',
      name: 'Informacion Familiar',
    },
    { path: './entorno-habitacional',
      name: 'Entorno habitacional',
    },
    { path: './modus-vivendi',
      name: 'Modus vivendi',
    },
    { path: './historial-laboral-academico',
      name: 'Historial laboral',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
