import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Investigacion } from '../../interfaces/Investigacion.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InvestigacionState } from '../../store/state';
import { getInvestigaciones } from '../../store/selectors';
import {
  AlmacenarInvestigaciones,
  CrearInvestigacion,
  EditarInvestigacion,
  EliminarInvestigacion
} from '../../store/actions/investigacion.actions';
import { File } from '../../../../@models/file.interface';
import { HelperService } from '../../../../services/helper.service';

@Component({
  selector: 'app-request-investigacion',
  templateUrl: './solicitud-investigacion.component.html',
  styles: ['']
})
export class SolicitudInvestigacionComponent implements OnInit {

  @ViewChild('inputFile') inputFile: ElementRef;

  form = this.fb.group({
    lugarDesarrollo : ['', Validators.required ],
    descripcion     : ['', Validators.required ],
    anexo           : '',
  });

  control = {
    editar: false,
    id: 0
  };

  servicios: Investigacion[] = [];
  servicio: Investigacion;
  today = new Date().getTime();

  constructor(
    private store: Store<InvestigacionState>,
    private modalService: NgbModal,
    private helper: HelperService,
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.store.select(getInvestigaciones).subscribe(
      (value: Investigacion[]) => this.servicios = value
    );
  }

  obtenerServicio(index: number): Investigacion {
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
      fileName: file.name,
      blob: base64
    };

    editar
      ? this.servicio.anexo = data
      : this.form.get('anexo').patchValue(data);
  }

  crearServicio() {
    const data = this.form.value;
    this.store.dispatch(new CrearInvestigacion(data));
    this.form.reset();
    this.inputFileReset();
  }

  verDetalle(content, index: number, editar: boolean = false) {
    this.control.id = index;
    this.control.editar = editar;
    this.servicio = this.obtenerServicio(index);
    this.modalService.open(content);
  }

  guardarCambios(modal) {
    const id = this.control.id;
    this.store.dispatch(
      new EditarInvestigacion(this.servicio, id)
    );
    modal.close();
  }

  eliminarServicio(id: number) {
    const confirm = window.confirm('Esta seguro de eliminar este servicio?');

    if (!confirm) {
      return;
    }

    this.store.dispatch(new EliminarInvestigacion(id));
  }

  guardarServicios() {
    const confirm = window.confirm('Esta seguro de solicitar los servicios?');

    if (!confirm) {
      return;
    }

    this.store.dispatch(new AlmacenarInvestigaciones());
  }

  inputFileReset() {
    this.inputFile.nativeElement.value = '';
  }
}
