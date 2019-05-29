import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { HelperService } from '../../../../services/helper.service';
import { CrearCentroCosto } from '../../store/actions/centro-costo.actions';
import { CentroCostoState } from '../../store/reducers/centro-costo.reducer';

@Component({
  selector: 'app-centro-costo',
  templateUrl: './centro-costo.component.html',
  styles: []
})
export class CentroCostoComponent implements OnInit {

  @ViewChild('fileInput') fileInput: ElementRef;

  form = this.fb.group({
    clienteId               : [ '' ],
    solicitante             : [ '', Validators.required ],
    telefonoSolicitante     : [ '', Validators.required ],
    emailSolicitante        : [ '', Validators.required ],
    destinoFactura          : [ '', Validators.required ],
    tipoSociedad            : [ '', Validators.required ],
    tipoDocumento           : [ '', [ Validators.required, Validators.min(0) ] ],
    documento               : [ '', [ Validators.required, Validators.min(0) ] ],
    telefonoFactura         : [ '', [ Validators.required, Validators.min(0) ] ],
    emailFactura            : [ '', [ Validators.required, Validators.email ] ],
  });

  ordenCompra = false;
  clientes = [];

  constructor(
    private router: Router,
    private store: Store<CentroCostoState>,
    private helper: HelperService,
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.form.setValue({
        clienteId: '6',
        solicitante: 'alguien',
        telefonoSolicitante: 12334323,
        emailSolicitante: 'styven21121@gmail.com',
        destinoFactura: 'alguien',
        tipoSociedad: 'juridico',
        tipoDocumento: 'cedula',
        documento: 123123412,
        telefonoFactura: 123123,
        emailFactura: 'styven21121@gmail.com'
      }
    );


    const userId = 6;
    this.form.get('clienteId').patchValue(userId);
  }

  async cargarArchivo(event) {
    const allowedExtensions = /(\.pdf|\.doc|\.docx)$/i;
    const file = event.target.files[0];

    if (!allowedExtensions.test(file.name)) {
      alert('Archivo no valido');
      event.targert.value = '';
      return;
    }

    const base64 = await this.helper.readFile(file);

    this.form.get('anexo').patchValue({
      fileName: file.name,
      blob: base64
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

    const numeroOrden = this.fb.control('', [Validators.required, Validators.min(0)]);
    const anexo = this.fb.control('', Validators.required);

    this.form.addControl('numeroOrden', numeroOrden);
    this.form.addControl('anexo', anexo);
  }

  solicitarServicio() {
    const data = this.form.value;
    this.store.dispatch(new CrearCentroCosto(data));
    this.router.navigate(['./nuevo-servicio/solicitud-servicios']);
  }
}
