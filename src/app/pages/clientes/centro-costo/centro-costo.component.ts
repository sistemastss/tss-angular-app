import {Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EspService } from '../../../services/esp/esp.service';
import { LoginService } from '../../../services/login.service';
import { DataService } from '../../../services/data.service';
import { Store } from '@ngrx/store';
import { CentroCostoState } from '../../../store/state';
import { CrearCentroCosto } from '../../../store/actions';

@Component({
  selector: 'app-centro-costo',
  templateUrl: './centro-costo.component.html',
  styles: []
})
export class CentroCostoComponent implements OnInit {

  form = new FormGroup({
    clienteId               : new FormControl('', Validators.required),
    solicitante             : new FormControl('', Validators.required),
    telefonoSolicitante     : new FormControl('', Validators.required),
    emailSolicitante        : new FormControl('', Validators.required),
    destinoFactura          : new FormControl('', Validators.required),
    tipoSociedad            : new FormControl('', Validators.required),
    tipoIdentificacion      : new FormControl('', [Validators.required, Validators.min(0)]),
    numeroIdentificacion    : new FormControl('', [Validators.required, Validators.min(0)]),
    telefonoFactura         : new FormControl('', [Validators.required, Validators.min(0)]),
    emailFactura            : new FormControl('', [Validators.required, Validators.email])
  });

  ordenCompra = false;
  clientes = [];

  constructor(
    private router: Router,
    private espService: EspService,
    private loginService: LoginService,
    private dataService: DataService,
    private store: Store<CentroCostoState>
  ) {}

  ngOnInit() {
    /*this.form.setValue({
        clienteId: '6',
        solicitante: '12',
        telefonoSolicitante: 32,
        emailSolicitante: 's@g.c',
        destinoFactura: 'cristian',
        tipoSociedad: 'juridico',
        tipoIdentificacion: 'juridico',
        numeroIdentificacion: 12345,
        telefonoFactura: 33243,
        emailFactura: 'sty@g.co'
      }
    );*/

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

  cargarArchivo(event) {
    const file = event.target.files[0];
    this.form.get('anexo').patchValue(file.name);
  }

  switchOrdenCompra(ordenCompra: boolean) {
    this.ordenCompra = ordenCompra;
    this.mostrarOrdenCompra();
  }

  mostrarOrdenCompra(): void {
    if (!this.ordenCompra) {
      if (this.form.get('numeroOrden') && this.form.get('anexo')) {
        this.form.removeControl('numeroOrden');
        this.form.removeControl('anexo');
      }
      return;
    }

    const numeroOrden = new FormControl('', [Validators.required, Validators.min(0)]);
    const anexo = new FormControl('', Validators.required);

    this.form.addControl('numeroOrden', numeroOrden);
    this.form.addControl('anexo', anexo);
  }

  solicitarServicio() {
    const data = this.form.value;
    this.store.dispatch(new CrearCentroCosto(data));
    this.router.navigate(['./clientes/solicitud-servicios']);
  }
}
