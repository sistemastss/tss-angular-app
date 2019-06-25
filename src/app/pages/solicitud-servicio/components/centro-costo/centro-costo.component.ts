import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { HelperService } from '../../../../services/helper.service';
import { CrearCentroCosto } from '../../store/actions/centro-costo.actions';
import { CentroCostoState } from '../../store/reducers/centro-costo.reducer';
import { AuthService } from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-centro-costo',
  templateUrl: './centro-costo.component.html',
  styles: []
})
export class CentroCostoComponent implements OnInit {

  @ViewChild('fileInput') fileInput: ElementRef;

  form = this.fb.group({
    usuario_id               : '',
    solicitante              : [ '', Validators.required ],
    telefono_solicitante     : [ '', Validators.required ],
    email_solicitante        : [ '', Validators.required ],
    destino_factura          : [ '', Validators.required ],
    tipo_sociedad            : [ '', Validators.required ],
    tipo_documento           : [ '', [ Validators.required, Validators.min(0) ] ],
    documento                : [ '', [ Validators.required, Validators.min(0) ] ],
    telefono_factura         : [ '', [ Validators.required, Validators.min(0) ] ],
    email_factura            : [ '', [ Validators.required, Validators.email ] ],
  });

  ordenCompra = false;
  clientes = [];

  constructor(
    private router: Router,
    private store: Store<CentroCostoState>,
    private authService: AuthService,
    private helper: HelperService,
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.form.setValue({
        usuario_id: '6',
        solicitante: 'alguien',
        telefono_solicitante: 12334323,
        email_solicitante: 'styven21121@gmail.com',
        destino_factura: 'alguien',
        tipo_sociedad: 'juridico',
        tipo_documento: 'cedula',
        documento: 123123412,
        telefono_factura: 123123,
        email_factura: 'styven21121@gmail.com'
      }
    );

    const userId = this.authService.getUser().user.id;
    this.form.get('usuario_id').patchValue(userId);
  }

  async cargarArchivo(event) {
    const allowedExtensions = /(\.pdf|\.doc|\.docx)$/i;
    const file = event.target.files[0];

    if (!allowedExtensions.test(file.name)) {
      alert('Archivo no valido');
      event.target.value = '';
      return;
    }

    const base64 = await this.helper.readFile(file);

    this.form.get('anexo').patchValue({
      file_name: file.name,
      blob: base64
    });
  }

  switchOrdenCompra(ordenCompra: boolean) {
    this.ordenCompra = ordenCompra;
    this.mostrarOrdenCompra();
  }

  mostrarOrdenCompra(): void {
    if (!this.ordenCompra) {
      if (this.form.get('numero_orden') && this.form.get('anexo')) {
        this.form.removeControl('numero_orden');
        this.form.removeControl('anexo');
      }
      return;
    }

    const numeroOrden = this.fb.control('', [Validators.required, Validators.min(0)]);
    const anexo = this.fb.control('');

    this.form.addControl('numero_orden', numeroOrden);
    this.form.addControl('anexo', anexo);
  }

  solicitarServicio() {
    const data = this.form.value;
    this.store.dispatch(new CrearCentroCosto(data));
    this.router.navigate(['./nuevo-servicio/solicitud-servicios']);
  }
}
