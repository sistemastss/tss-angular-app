import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Validators, FormBuilder } from '@angular/forms';
import { Poligrafia } from '../../interfaces/poligrafia.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HelperService } from '../../../../services/helper.service';
import { File } from '../../../../@models/file.interface';
import { getPoligrafias } from '../../store/selectors';
import { AlmacenarPoligrafias, CrearPoligrafia, EditarPoligrafia, EliminarPoligrafia } from '../../store/actions/poligrafia.actions';
import { PoligrafiaState } from '../../store/state';

@Component({
  selector: 'app-solicitud-poligrafia',
  templateUrl: './solicitud-poligrafia.component.html',
  styles: ['']
})
export class SolicitudPoligrafiaComponent implements OnInit {

  @ViewChild('inputFile') inputFile: ElementRef;

  form = this.fb.group({
    evaluado: this.fb.group({
      evaluado      : [ '', Validators.required ],
      tipo_documento : [ '', Validators.required ],
      documento     : [ '', [ Validators.required, Validators.minLength(6) ] ],
      telefono      : [ '', [ Validators.required, Validators.minLength(7) ] ],
      email         : [ '', [ Validators.required, Validators.email ] ],
      cargo         : [ '', Validators.required, Validators.email],
    }),
    lugar_desarrollo : [ '', Validators.required ],
    contexto        : [ '', Validators.required ],
    tipoPoligrafia  : [ '', Validators.required ],
    anexo           : '',
  });

  control = {
    editar: false,
    id: 0
  };

  servicio: Poligrafia;
  servicios: Poligrafia[] = [];
  today = new Date().getTime();

  constructor(
    private fb: FormBuilder,
    private store: Store<PoligrafiaState>,
    private modalService: NgbModal,
    private helper: HelperService,
  ) {}

  ngOnInit() {
    this.form.setValue({
      evaluado: {
        evaluado: 'cristian',
        tipo_documento: 'cc',
        documento: 1026595856,
        telefono: 3600255,
        email: 'styven22121@gmail.com',
        cargo: 'algo',
      },
      lugar_desarrollo: 'Bogota',
      contexto: 'contexto',
      tipoPoligrafia: 'pre-empleo',
      anexo: ''
    });

    this.store.select(getPoligrafias).subscribe(
      value => this.servicios = value
    );
  }

  obtenerServicio(index: number): Poligrafia {
    return Object.assign({}, this.servicios[index]);
  }

  async cargarArchivo(event, editar = false) {
    const allowedExtensions = /(\.pdf|\.doc|\.docx)$/i;
    const file = event.target.files[0];

    if (!allowedExtensions.test(file.name)) {
      alert('Archivo no valido');
      event.target.value = '';
      return;
    }

    const base64 = await this.helper.readFile(file);

    const data: File = {
      file_name: file.name,
      blob: base64
    };

    editar
      ? this.servicio.anexo = data
      : this.form.get('anexo').patchValue(data);
  }

  crearServicio() {
    const data = this.form.value;
    this.store.dispatch(new CrearPoligrafia(data));
    this.form.reset();
    this.inputFileReset();
  }

  verDetalle(content, index: number, editar: boolean = false) {
    this.control.id = index;
    this.control.editar = editar;
    this.servicio = this.obtenerServicio(index);
    this.modalService.open(content, {size: 'lg'});
  }

  guardarCambios(modal) {
    const id = this.control.id;
    this.store.dispatch(
      new EditarPoligrafia(this.servicio, id)
    );
    modal.close();
  }

  eliminarServicio(id: number) {
    const confirm = window.confirm('Esta seguro de eliminar este servicio?');
    if (!confirm) {
      return;
    }
    this.store.dispatch(new EliminarPoligrafia(id));
  }

  guardarServicios() {
    const confirm = window.confirm('Esta seguro de solicitar los servicios?');
    if (!confirm) {
      return;
    }
    this.store.dispatch(new AlmacenarPoligrafias());
  }

  inputFileReset() {
    this.inputFile.nativeElement.value = '';
  }
}
