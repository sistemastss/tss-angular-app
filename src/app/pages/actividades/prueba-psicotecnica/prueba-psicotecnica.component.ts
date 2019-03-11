import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActividadesService} from '../../../services/actividades.service';
import {DataService} from '../../../services/data.service';
import {NgxPermissionsService} from 'ngx-permissions';
import {ActividadClass} from '../../../@classes/actividad.class';

@Component({
  selector: 'app-prueba-psicotecnica',
  templateUrl: './prueba-psicotecnica.component.html',
  styleUrls: ['./prueba-psicotecnica.component.css']
})
export class PruebaPsicotecnicaComponent extends ActividadClass implements OnInit {

  form = new FormGroup({
    adjunto             : new FormControl('', Validators.required),
    conclusion          : new FormControl('', Validators.required)
  });


  constructor(public actividadesService: ActividadesService,
              public dataService: DataService,
              public ngxPermissionsService: NgxPermissionsService) {

    super(actividadesService);
  }


  ngOnInit() {

    this.codigo = 'DG';

    this.permissions = this.ngxPermissionsService.getPermissions();

    this.servicioEsp = this.actividadesService.getServicioEsp();

    this.getValue();

    if (this.actividad.estado === 'proceso' || this.actividad.estado === 'notificado' || this.actividad.estado === 'completado') {
      // this.getValue();
      console.log('estado: proceso');
    }
  }


  protected getValue(): void {
    const servicioEspId = this.servicioEsp;

    // Solicitud get al servidor que retorna el historial judicial del servicio esp
    this.dataService.getVerificacionLaboral(servicioEspId)
      .subscribe(
        (value: any) => {

          console.log(value);

          const data = this.transformResponse(value.data);

          this.form.setValue(data);


        },
        () => alert('Ocurrio un error inesperado al tratar de recuperar los datos')
      );
  }

  protected onSubmit() {
    const data = this.form.value;

    const servicioEspId = this.servicioEsp;

    this.dataService.setVerificacionLaboral(servicioEspId, data)
      .subscribe(
        (value: any) => {
          console.log(value);

          this.setEstado('proceso');

          // this.currentActivityId = value.data.id;

          const dat = this.transformResponse(value.data);

          this.form.setValue(dat);

          alert('Se han guardado los datos exitosamente');

        },
        err => alert('Ocurrio un error inesperado. Intentelo de nuevo')
      );
  }


  protected onUpdate(): void {
    const data = this.form.value;
    this.dataService.updateVerificacionLaboral(this.servicioEsp, data)
      .subscribe(
        (value: any) => {
          console.log(value);

          if (this.permissions.FRCE) {
            this.setEstado('proceso');
          }

          alert('Se han actualizado los datos exitosamente');


          // this.form.setValue(this.transformResponse(value.data));

        },
        err => alert(err.error.message)
      );
  }


  protected transformResponse(response: any): any {

    const data = [];

    response.forEach((value, index) => {

      data.push(value);

      delete data[index].timestamps;

      delete data[index].estado;

      delete data[index].links;

    });

    return data;

  }

}
