import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EspService} from '../../../services/esp.service';
import {LoginService} from '../../../services/login.service';
import {DataService} from '../../../services/data.service';

@Component({
  selector: 'app-crear-servicio',
  templateUrl: './request.component.html',
  styles: []
})
export class RequestComponent implements OnInit {
  isOrdenCompra: boolean;

  form = new FormGroup({
    cliente          : new FormControl('', Validators.required),
    zona             : new FormControl('blanck'),
    facturar         : new FormControl(false, Validators.required),
    ordenCompra      : new FormControl(false),
    numeroOrden      : new FormControl(),
    anexo            : new FormControl()
  });

  clientes: object[];

  constructor(private router: Router,
              private espService: EspService,
              private loginService: LoginService, private dataService: DataService) {

    this.isOrdenCompra = false;

    if (loginService.rol['codigo'] === 'CLI') {
      this.clientes = [];
      this.clientes.push(loginService.user);

    } else {
      dataService.getClientes()
        .subscribe(
          (value: object[]) => this.clientes = value,
          error => console.error(error)
        );
    }
  }

  ngOnInit() {
  }

  goToSection(section: string) {
    //
  }

  filterData() {
  }

  onChageOrdenCompra(value) {
    this.isOrdenCompra = (value === 'yes');
  }

  onSolicitarServicio() {

    const data = this.buidObject();

    this.espService.centroCostoStore(data);

    this.form.reset();

    this.router.navigate(['./clientes/solicitud-servicios']);
  }

  buidObject(): object {
    const centroCosto = {
      usuarioId: this.form.get('cliente').value,
      zona: this.form.get('zona').value,
      facturar:  true
    };

    const ordenCompra = {};
    if (this.form.get('ordenCompra').value === true) {
      ordenCompra['numeroAnexo'] = this.form.get('numeroOrden').value;
      ordenCompra['anexo'] = this.form.get('anexo').value;
    }

    if (Object.entries(ordenCompra).length === 0) {
      return {
        centroCosto
      };
    }

    return {
      centroCosto,
      ordenCompra
    };
  }
}
