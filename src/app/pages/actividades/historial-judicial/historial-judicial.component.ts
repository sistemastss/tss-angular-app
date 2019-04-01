import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActividadesService} from '../../../services/actividades.service';
import {NgxPermissionsService} from 'ngx-permissions';
import {HistorialJudicialService} from '../../../services/esp/actividades/historial-judicial.service';
import {ActividadClass} from '../../../@classes/actividad.class';

@Component({
  selector: 'app-historial-judicial',
  templateUrl: './historial-judicial.component.html',
  styleUrls: ['./historial-judicial.component.css']
})

export class HistorialJudicialComponent extends ActividadClass implements OnInit {

  form = new FormGroup({
    id                          : new FormControl(),
    procesoJuridico             : new FormControl(false, Validators.required),
    procesoProcuraduria         : new FormControl(false, Validators.required),
    procesoContraloria          : new FormControl(false, Validators.required),
    procesoFiscalia             : new FormControl(false, Validators.required),
    procesoPolicia              : new FormControl(false, Validators.required),
    procesoTransito             : new FormControl(false, Validators.required),
    verificacion                : new FormControl(false, Validators.required),
    ordenCapturaInternacional   : new FormControl(false, Validators.required),
    sancionesPenales            : new FormControl('', Validators.required),
    delitoProcuraduria          : new FormControl('', Validators.required),
    inhabilidadesProcuraduria   : new FormControl('', Validators.required),
    fechaInhabilidad            : new FormControl('', Validators.required),
    antecedentesFiscales        : new FormControl(false, Validators.required),
    fechaAntecedente            : new FormControl('', Validators.required),
    claseProceso                : new FormControl('', Validators.required),
    datosSentencia              : new FormControl('', Validators.required),
    delitoJudicial              : new FormControl('', Validators.required),
    situacionJuridica           : new FormControl('', Validators.required),
    fgnNs                       : new FormControl('', Validators.required),
    listaOfac                   : new FormControl(false, Validators.required),
    listaOnu                    : new FormControl(false, Validators.required),
    vinculosSubversion          : new FormControl(false, Validators.required),
    antecedentesPolicia         : new FormControl(false, Validators.required),
    paramilitarismo             : new FormControl(false, Validators.required),
    movilidad                   : new FormControl('', Validators.required),
    totalAdeudado               : new FormControl('', [Validators.required, Validators.min(0)]),
    observaciones               : new FormControl('', Validators.required)
  });

  /**
   * codigo de la actividad
   */

  readonly codigo = 'HJ';


  constructor(protected _actividades: ActividadesService,
              protected _ngxPermissions: NgxPermissionsService,
              protected _histJudicial: HistorialJudicialService) {
    super(_actividades);
  }


  ngOnInit() {
    this.permissions = this._ngxPermissions.getPermissions();
    this.actividad = this._actividades.actividadProxy(this.codigo);

    // console.log(this.actividad);
    if (this._actividades.canLoadResource(this.actividad)) {
      this.getValue();
    }
  }


  onSubmit(): void {

    const data = this.form.value;

    this._histJudicial.postHistorialJudicial(this.servicioEsp, data)
      .subscribe(
      (value: any) => {

          this.form.setValue(this._actividades.transformResponse(value.servicios));

          this.setEstado('proceso');

          alert('Se han guardado los datos exitosamente');

        },
        this._actividades.handleError
    );

  }

  /**
   * actuializar informacion
   */
  onUpdate() {
    const histJudicial = this.form.get('id').value;
    const data = this.form.value;

    // se actualiza la informacion
    this._histJudicial.putHistorialJudicial(this.servicioEsp, histJudicial, data)
      .subscribe(
        (value: any) => {

          if (this.permissions.FRCE) {
            this.setEstado('proceso');
          }

          this.form.setValue(this._actividades.transformResponse(value.servicios));

          alert('Se han actualizado los datos exitosamente');


        },
        this._actividades.handleError
      );
  }


  /**
   * solicitud de datos al servidor si el estado
   * de la actividad es asignado
   */
  getValue(): void {
    this._histJudicial.getHistorialJudicial(this.servicioEsp)
      .subscribe(
        (response: any) => {
          this.form.setValue(this._actividades.transformResponse(response.servicios));
        },
        this._actividades.handleError
      );
  }

  notificarAnalista(): void {
    super.notificarAnalista();
  }


  reportarCliente() {
    const confirm = window.confirm('Esta seguro de alertar al evaluado?');

    if (! confirm) {
      return;
    }

    this.setEstado('alerta', () => {
      alert('Alerta enviada al analista Esp');
    });
  }


}
