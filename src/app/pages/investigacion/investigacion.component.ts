import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investigacion',
  templateUrl: './investigacion.component.html',
  styles: ['']
})
export class InvestigacionComponent implements OnInit {

  /**
   *
   *  Control Logístico	                  CL
      Investigación Corporativa	          IC
      Investigación Marcaria	            IM
      Investigación Perdida Total Hurto	  PTH
      Investigación Perdida Parcial Hurto	PPH
      Investigación Perdida Total Daños	  PTD
      Investigación Perdida Parcial Daños	PPD
      Investigación Siniestros	          IS
   *
   *
   */
  form = new FormGroup({
    ciudad        : new FormControl('', Validators.required),
    anexo         : new FormControl(''),
    descripcion   : new FormControl('', Validators.required)
  });

  investigaciones = [
    {
      title: 'Control Logístico',
      codigo: 'CL',
      path: ''
    },
    {
      title: 'Investigación Corporativa',
      codigo: 'IC',
      path: ''
    },
    {
      title: 'Investigación Marcaria',
      codigo: 'IM',
      path: ''
    },
    {
      title: 'Investigación Perdida Total Hurto',
      codigo: 'PTH',
      path: ''
    },
    {
      title: 'Investigación Perdida Parcial Hurto',
      codigo: 'PPH',
      path: ''
    },
    {
      title: 'Investigación Perdida Total Daños',
      codigo: 'PTD',
      path: ''
    },
    {
      title: 'nvestigación Perdida Parcial Daños',
      codigo: 'PPD',
      path: ''
    },
    {
      title: 'Investigación Siniestros',
      codigo: 'IS',
      path: ''
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
