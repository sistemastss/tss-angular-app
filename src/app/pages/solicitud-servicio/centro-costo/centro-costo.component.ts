import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EspService } from '../../../services/esp/esp.service';
import { LoginService } from '../../../services/login.service';
import { DataService } from '../../../services/data.service';
import { Store } from '@ngrx/store';
import { CentroCostoState } from '../../../store/state';
import { CrearCentroCosto } from '../../../store/actions';
import {Helper} from '../../../@classes';

@Component({
  selector: 'app-centro-costo',
  templateUrl: './centro-costo.component.html',
  styles: []
})
export class CentroCostoComponent implements OnInit {

  @ViewChild('fileInput') fileInput: ElementRef;

  form = new FormGroup({
    clienteId               : new FormControl(''),
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
    this.form.setValue({
        clienteId: '6',
        solicitante: 'alguien',
        telefonoSolicitante: 12334323,
        emailSolicitante: 'styven21121@gmail.com',
        destinoFactura: 'alguien',
        tipoSociedad: 'juridico',
        tipoIdentificacion: 'cedula',
        numeroIdentificacion: 123123412,
        telefonoFactura: 123123,
        emailFactura: 'styven21121@gmail.com'
      }
    );

    this.form.valueChanges.subscribe(
      value => console.log(value)
    );
    if (this.loginService.rol.codigo === 'CLI') {
      this.clientes = [];
      this.clientes.push(this.loginService.user);
      const userId = 6;
      this.form.get('clienteId').patchValue(userId);

    } else {
      this.dataService.getClientes()
        .subscribe(
          (value: object[]) => this.clientes = value,
          error => console.error(error)
        );
    }
  }

  async cargarArchivo(event) {
    const allowedExtensions = /(\.pdf|\.doc|\.docx)$/i;
    const file = event.target.files[0];

    if (!allowedExtensions.test(file.name)) {
      alert('Archivo no valido');
      this.fileInput.nativeElement.value = '';
      return;
    }
    const base64 = await Helper.readFile(file);

    this.form.get('anexo').patchValue({
      name: file.name,
      payload: base64
    });
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
    this.router.navigate(['./nuevo-servicio/solicitud-servicios']);
  }
}
