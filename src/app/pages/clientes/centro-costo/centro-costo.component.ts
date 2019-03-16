import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EspService} from '../../../services/esp.service';
import {LoginService} from '../../../services/login.service';
import {DataService} from '../../../services/data.service';
import {Store} from '@ngrx/store';
import {CentroCostoState} from '../../../store/state';
import {CrearCentroCosto} from '../../../store/actions/centro-costo-action';
import {CentroCosto} from '../../../@models/centro-costo';
import {throttleTime} from 'rxjs/operators';

@Component({
  selector: 'app-centro-costo',
  templateUrl: './centro-costo.component.html',
  styles: []
})
export class CentroCostoComponent implements OnInit {

  ordenCompra = false;

  form = new FormGroup({
    clienteId           : new FormControl('', Validators.required),
    solicitante         : new FormControl('', Validators.required),
    correoSolicitante   : new FormControl('', Validators.required),
    numeroOrden         : new FormControl(),
    anexo               : new FormControl()
  });

  clientes: object[];

  constructor(private router: Router,
              private espService: EspService,
              private loginService: LoginService,
              private dataService: DataService,
              private store: Store<CentroCostoState>) {}

  ngOnInit() {
    if (this.loginService.rol.codigo === 'CLI') {
      this.clientes = [];
      this.clientes.push(this.loginService.user);

    } else {
      this.dataService.getClientes()
        .subscribe(
          (value: object[]) => this.clientes = value,
          error => console.error(error)
        );
    }
  }

  switchOrdenCompra(ordenCompra: boolean) {
    this.ordenCompra = ordenCompra;
  }

  onSolicitarServicio() {
    const data = this.construirObjeto();
    this.store.dispatch(new CrearCentroCosto(data));
    this.espService.centroCostoStore(data);
    // this.router.navigate(['./clientes/solicitud-servicios']);
  }

  construirObjeto(): CentroCosto {
    const form = Object.assign({}, this.form.value);
    if (!this.ordenCompra) {
      delete form.numeroOrden;
      delete form.anexo;
    }
    return form;
  }
}
