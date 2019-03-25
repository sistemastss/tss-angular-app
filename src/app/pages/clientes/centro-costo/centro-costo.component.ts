import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EspService} from '../../../services/esp.service';
import {LoginService} from '../../../services/login.service';
import {DataService} from '../../../services/data.service';
import {Store} from '@ngrx/store';
import {CentroCostoState} from '../../../store/state';
import {CrearCentroCosto} from '../../../store/actions/centro-costo-actions';
import {CentroCosto} from '../../../@models/centro-costo';

@Component({
  selector: 'app-centro-costo',
  templateUrl: './centro-costo.component.html',
  styles: []
})
export class CentroCostoComponent implements OnInit {

  ordenCompra = false;

  form = new FormGroup({
    clienteId               : new FormControl('', Validators.required),
    solicitante             : new FormControl('', Validators.required),
    telefonoSolicitante     : new FormControl('', Validators.required),
    emailSolicitante        : new FormControl('', Validators.required),
    tieneOrdenCompra        : new FormControl(false),
    numeroOrden             : new FormControl(''),
    anexo                   : new FormControl(''),
    destinoFactura          : new FormControl('', Validators.required),
    tipoSociedad            : new FormControl('', Validators.required),
    tipoIdentificacion      : new FormControl('', [Validators.required, Validators.min(0)]),
    numeroIdentificacion    : new FormControl('', [Validators.required, Validators.min(0)]),
    telefonoFactura         : new FormControl('', [Validators.required, Validators.min(0)]),
    emailFactura            : new FormControl('', [Validators.required, Validators.email])
  });

  clientes: object[];

  constructor(private router: Router,
              private espService: EspService,
              private loginService: LoginService,
              private dataService: DataService,
              private store: Store<CentroCostoState>) {}

  ngOnInit() {
    this.form.setValue({
        clienteId: '6',
        solicitante: '12',
        telefonoSolicitante: 32,
        emailSolicitante: 's@g.c',
        tieneOrdenCompra: true,
        numeroOrden: '',
        anexo: '',
        destinoFactura: 'cristian',
        tipoSociedad: 'juridico',
        tipoIdentificacion: 'juridico',
        numeroIdentificacion: 12345,
        telefonoFactura: 33243,
        emailFactura: 'sty@g.co'
      }
    );

    this.form.valueChanges.subscribe(
      value => console.log(value)
    );
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
    this.validarOrdenCompra();
  }

  validarOrdenCompra() {
    const numeroOrden = this.form.get('numeroOrden');
    const anexo = this.form.get('anexo');

    this.form.get('tieneOrdenCompra').valueChanges.subscribe(value => {
      if (value) {
        numeroOrden.setValidators([Validators.required]);
        anexo.setValidators([Validators.required]);
      } else {
        numeroOrden.setValidators([]);
        anexo.setValidators([]);
      }
    });
  }

  solicitarServicio() {
    const data = this.construirObjeto();
    this.store.dispatch(new CrearCentroCosto(data));
    this.espService.centroCostoStore(data);
    this.router.navigate(['./clientes/solicitud-servicios']).then();
  }

  construirObjeto(): CentroCosto {
    const data = Object.assign({}, this.form.value);
    if (!this.ordenCompra) {
      delete data.tieneOrdenCompra;
      delete data.numeroOrden;
      delete data.anexo;
    }
    return data;
  }
}
