import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActividadesService} from '../../../services/actividades.service';
import {DataService} from '../../../services/data.service';

@Component({
  selector: 'app-consolidado',
  templateUrl: './consolidado.component.html',
  styleUrls: ['./consolidado.component.css']
})
export class ConsolidadoComponent implements OnInit {

  form = new FormGroup({
    antecedentes                  : new FormControl(false, Validators.required),
    antecedentesObs               : new FormControl('', Validators.required),
    poligrafia                    : new FormControl(false, Validators.required),
    poligrafiaObs                 : new FormControl('', Validators.required),
    financiero                    : new FormControl(false, Validators.required),
    financieroObs                 : new FormControl('', Validators.required),
    comparendos                   : new FormControl('', Validators.required),
    licenciaConduccionGr          : new FormGroup({
      isLicencia              : new FormControl(false, Validators.required),
      cat                     : new FormControl(false, Validators.required),
      vigencia                : new FormControl('', Validators.required)
    }),
    historial                     : new FormControl('', Validators.required),
    cedula                        : new FormControl(false, Validators.required),
    libretaMilitar                : new FormControl(false, Validators.required),
    licenciaConduccion            : new FormControl(false, Validators.required),
    tarjetaProfecional            : new FormControl(false, Validators.required),
    diplomaBachiller              : new FormControl(false, Validators.required),
    diplomatecnico                : new FormControl(false, Validators.required),
    diplomaTecnologico            : new FormControl(false, Validators.required),
    diplomaPregrado               : new FormControl(false, Validators.required),
    diplomaPostgrado              : new FormControl(false, Validators.required),
    diplomaCursos                 : new FormControl(false, Validators.required),
    observaciones                 : new FormControl(false, Validators.required),
    datosInforme                  : new FormGroup({
      encabezado              : new FormControl(false, Validators.required),
      fotoEval                : new FormControl(false, Validators.required),
      logoCliente             : new FormControl(false, Validators.required),
      nucleoFamiliar          : new FormControl(false, Validators.required),
      verificacionAcademica   : new FormControl(false, Validators.required),
      verificacionLaboral     : new FormControl(false, Validators.required),
      referenciasBancarias    : new FormControl(false, Validators.required),
      capitalDeuda            : new FormControl(false, Validators.required),
      EstudioFinanciero       : new FormControl(false, Validators.required),
      historialJudicial       : new FormControl(false, Validators.required),
      evaluacionSeguridad     : new FormControl(false, Validators.required),
    }),
    firma                         : new FormControl('', Validators.required),
    conclusion                    : new FormControl(false, Validators.required),
    observacion                   : new FormControl('', Validators.required)
  });

  // actividad component
  actividad: object;

  // funcionario actividad asignada
  funcionario: string;

  constructor(private actividadesService: ActividadesService,
              private dataService: DataService) {
    this.setActividad();
    // this.setValue();
  }

  ngOnInit() {
  }

  setActividad() {
    this.actividad = this.actividadesService.getActividad('HJ');
  }

  setFuncionario(funcionarioId) {
    /*this.actividadesService.getFuncionario(funcionarioId)
      .subscribe(value => this.funcionario = value['nombre']);*/
  }

  asignarFuncionario(event: any) {

    // id del analista asignado
    const funcionario = event['funcionario'] as number;

    // id de la actividad
    const actividadId = this.actividad['id'];

    // id persona evaluada
    const personaEvaluadaId = this.actividadesService.getServicioEsp()['id'];

    // codigo de la actividad
    const codigoActividad = this.actividad['actividad']['codigo'];

    // body de peticion post
    const data = {
      actividadId,
      funcionario,
      personaEvaluadaId
    };

    this.dataService.asignarFuncionario(data).subscribe(
      value => {
        console.log(value);
        this.actividadesService.setEstadoActividad(codigoActividad, 'asignado');
        this.setFuncionario(funcionario);
        this.setActividad();
      },
      err => console.log(err)
    );

  }


  onSubmit() {
    const data = this.form.value;
    data['personaEvaluadaId'] = this.actividadesService.getServicioEsp()['persona_evaluada']['id'];

  }

  setValue() {
    const personaEvaluadaId = this.actividadesService.getServicioEsp()['persona_evaluada']['id'];
    this.dataService.getHistorialJudicial(personaEvaluadaId).subscribe(
      value => {
        this.form.setValue({
          pJuridico:            value['proceso_juridico'],
          pProcuraduria:        value['proceso_procuraduria'],
          pContraloria:         value['proceso_contraloria'],
          pFiscalia:            value['proceso_fiscalia'],
          pPolicia:             value['proceso_policia'],
          pTransito:            value['proceso_transito'],
          pVerificacion:        value['verificacion'],
          pCapturaInter:        value['orden_captura_internacional'],
          prSancionesPenales:   value['sanciones_penales'],
          prDelito:             value['delito_procuraduria'],
          prInhabilidades:      value['inhabilidades_procuraduria'],
          prFecha:              value['fecha_inhabilidad'],
          cgAntecedentesFisc:   value['antecedentes_fiscales'],
          cgFecha:              value['fecha_antecedente'],
          csClaseProceso:       value['clase_proceso'],
          csDatosSentencia:     value['datos_sentencia'],
          csDelitos:            value['delito_judicial'],
          csSituacionJuridica:  value['situacion_juridica'],
          fgn_ns:               value['f_g_n_ns'],
          listaOfac:            value['lista_ofac'],
          listaOnu:             value['lista_onu'],
          subversion:           value['vinculos_subversion'],
          antecedentesPolicia:  value['antecedentes_policia'],
          vinculosParamilitar:  value['paramilitarismo'],
          simit:                value['movilidad'],
          totalAdecuado:        value['total_acuerdo'],
          observaciones:        value['observaciones'],
        });
      },
      err => console.error(err)
    );
  }

  notificarAdmin() {

  }
}
