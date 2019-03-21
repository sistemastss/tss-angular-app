import { AlmacenarCentroCosto, Servicios } from './../../../store/actions/centro-costo-action';
import { CrearServicioEsp, EditarServicioEsp, EliminarServicioEsp } from './../../../store/actions/servicio-esp.action';
import { Router } from '@angular/router';
import { EspService } from './../../../services/esp.service';
import { DataService } from './../../../services/data.service';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud-poligrafia',
  templateUrl: './solicitud-poligrafia.component.html',
  styleUrls: ['./solicitud-poligrafia.component.css']
})
export class SolicitudPoligrafiaComponent implements OnInit {

  form = new FormGroup({
    nombre              : new FormControl('', Validators.required),
    documento           : new FormControl('', [Validators.required, Validators.minLength(6)]),
    correo              : new FormControl('', [Validators.required, Validators.email]),
    telefono            : new FormControl('', [Validators.required, Validators.minLength(7)]),
    descripcion         : new FormControl(),
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

  serviciosEsp = [];


  constructor(private store: Store<any>,
    private dataService: DataService,
    private espService: EspService,
    private router: Router) {}



  ngOnInit() {
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
