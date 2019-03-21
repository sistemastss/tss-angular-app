import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EspService} from '../../../services/esp.service';
import {Router} from '@angular/router';
import {MailServiceService} from '../../../services/mail-service.service';
import {DataService} from '../../../services/data.service';
import {Observable} from 'rxjs';
import {ServicioEsp} from '../../../@models/servicio-esp';
import {Store} from '@ngrx/store';
import {ServicioEspState} from '../../../store/state';
import {CrearServicioEsp, EditarServicioEsp, EliminarServicioEsp, FiltrarServicioEsp} from '../../../store/actions/servicio-esp.action';
import {AlmacenarCentroCosto, RemoverCentroCosto, Servicios} from '../../../store/actions/centro-costo-action';
import {map, mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-servicio-esp',
  templateUrl: './solicitud-esp.component.html',
  styles: []
})
export class SolicitudEspComponent implements OnInit {

  /**
   *  1. recuperar el centro de costo de localstorage
   *  2. crear servicio esp en el centro de costo
   *  2.1. editarServicioEsp el servicio esp
   *  2.2. eliminar el servicio esp
   *  3. guardar centro de costo en la db
   */

  form = new FormGroup({
    nombre              : new FormControl('', Validators.required),
    documento           : new FormControl('', [Validators.required, Validators.minLength(6)]),
    departamento        : new FormControl('', Validators.required),
    ciudad              : new FormControl('', Validators.required),
    telefono            : new FormControl('', [Validators.required, Validators.minLength(7)]),
    correo              : new FormControl('', [Validators.required, Validators.email]),
    ciudadDesarrollo    : new FormControl('', Validators.required),
    anexo               : new FormControl('hv.docx'),
    descripcion         : new FormControl(),
    aceptarTerminos     : new FormControl(false, Validators.required),
    actividades         : new FormGroup({
      HJ                      : new FormControl(),
      VDS                     : new FormControl(),
      VA                      : new FormControl(),
      VL                      : new FormControl(),
      DG                      : new FormControl(),
      Dd                      : new FormControl(),
      PL                      : new FormControl(),
      EF                      : new FormControl(),
      PP                      : new FormControl(),
    })
  });

  controlEsp = {
    editar: false,
    id: 0
  };

  serviciosEsp: any[] = [];

  constructor(private store: Store<ServicioEspState>,
              private dataService: DataService,
              private espService: EspService,
              private router: Router) {}

  ngOnInit() {
    this.form.setValue(
      {
        nombre: 'cristian',
        documento: 1026595856,
        departamento: 'cundinamarca',
        ciudad: 'Bogota',
        telefono: 2,
        correo: 'styven21121@gmail.com',
        ciudadDesarrollo: 'Bogota',
        anexo: 'hojavida.docx',
        descripcion: 'ninguna',
        aceptarTerminos: false,
        actividades: {
          HJ  : true,
          VDS : true,
          VA  : true,
          VL  : true,
          DG  : true,
          Dd  : true,
          PL  : true,
          EF  : true,
          PP  : true,
        }
      }
    );
    this.store.select(state => state.servicioEsp)
      .subscribe((value: ServicioEsp[]) => this.serviciosEsp = value);
  }

  establecerFormularioEsp(id: number) {
    window.scrollTo(0, 0);
    this.controlEsp.editar = true;
    this.controlEsp.id = id;
    const servicioEsp = this.serviciosEsp.filter(((value, index) => index === id))[0];
    this.form.setValue(servicioEsp);
  }

  crearServicioEsp() {
    const data = this.form.value;
    this.form.reset();
    this.store.dispatch(new CrearServicioEsp(data));
  }

  editarServicioEsp() {
    const id = this.controlEsp.id;
    const data = this.form.value;
    this.store.dispatch(new EditarServicioEsp(data, id));
    this.form.reset();
    this.controlEsp.editar = false;
    this.controlEsp.id = 0;
  }

  eliminarServicioEsp(id: number) {
    const confirm = window.confirm('Esta seguro de eliminar este servicio?');
    if (!confirm) {
      return;
    }
    this.store.dispatch(new EliminarServicioEsp(id));
  }


  guardarServiciosEsp() {
    this.store.dispatch(new AlmacenarCentroCosto(Servicios.ESP));
  }

}

