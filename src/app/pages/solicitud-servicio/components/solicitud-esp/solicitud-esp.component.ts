import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Esp } from '../../interfaces/esp.interface';
import { Store } from '@ngrx/store';
import { AlmacenarEsps, CrearEsp, EditarEsp, EliminarEsp } from '../../store/actions/esp.actions';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HelperService } from '../../../../services/helper.service';
import { File } from '../../../../@models/file.interface';
import { EspState } from '../../store/state';

@Component({
  selector: 'app-servicio-esp',
  templateUrl: './solicitud-esp.component.html',
  styles: []
})
export class SolicitudEspComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private store: Store<EspState>,
    private modalService: NgbModal,
    private helper: HelperService,
  ) {}

  @ViewChild('inputFile') inputFile: ElementRef;

  form = this.fb.group({
    evaluado: this.fb.group({
      evaluado            : ['', Validators.required ],
      tipoDocumento       : ['', Validators.required ],
      documento           : ['', [ Validators.required, Validators.minLength(6) ]],
      telefono            : ['', [ Validators.required, Validators.minLength(7) ]],
      email               : ['', [ Validators.required, Validators.email ]],
      direccion           : ['', Validators.required ],
      cargo               : ['', Validators.required ],
    }),
    lugarDesarrollo     : ['', Validators.required ],
    observaciones       : ['', Validators.required ],
    anexo               : [''],
    tipoEsp             : ['', Validators.required ],
    aceptarTerminos     : [false, Validators.required],
  });

  actividades = [
    {
      codigo : 'HJ',
      nombre : 'Historial judicial',
      forName: 'Basico'
    },
    {
      codigo : 'VDS',
      nombre : 'Visita domiciliaria',
      forName: 'Basico'
    },
    {
      codigo : 'VA',
      nombre : 'Verificación académica',
      forName: 'Basico'
    },
    {
      codigo : 'VL',
      nombre : 'Verificación laboral',
      forName: 'Basico'
    },
    {
      codigo : 'PL',
      nombre : 'Poligrafía',
      forName: 'Integral'
    },
    {
      codigo : 'EF',
      nombre : 'Estudio financiero',
      forName: 'Avanzado'
    },
    {
      codigo : 'DDL',
      nombre : 'Due Dilligence',
      forName: ''
    },
    {
      codigo : 'DG',
      nombre : 'Dictamen grafológico',
      forName: ''
    },
    {
      codigo : 'Dd',
      nombre : 'Decadactilar',
      forName: ''
    },
    {
      codigo : 'PP',
      nombre : 'Prueba psicotécnica',
      forName: ''
    },
  ];

  /**
   * Basico (
   * Historial judicial, Verificacion Academica, Verificacion Laboral, Visita Domiciliaria)
   Integral (Basico + Poligrafia)
   Avanzado (Integral + Estudio financiero)
   */

  basico = [
    {  }
  ]

  control = {
    editar: false,
    id: 0
  };

  detalle: Esp;
  servicios: Esp[] = [];
  today = new Date().getTime();

  espSelect = state => state.solicitudServicio.esp;


  ngOnInit() {
    this.form.setValue(
      {
        evaluado: {
          evaluado: 'asds',
          tipoDocumento: 'cc',
          documento: 12345678,
          telefono: 3600255,
          email: 'styven21121@gmail.com',
          direccion: 'cll 16 # 20 -16',
          cargo: 'algo',
        },
        lugarDesarrollo: 'Bogota',
        observaciones: 'datos',
        tipoEsp: 'basico',
        anexo: '',
        aceptarTerminos: false
      });

    this.store.select(this.espSelect)
      .subscribe((value: Esp[]) => this.servicios = value);
  }

  obtenerServicio(index: number): Esp {
    return Object.assign({}, this.servicios[index]);
  }

  async cargarArchivo(event, editar = false) {
    const allowedExtensions = /(\.pdf|\.doc|\.docx)$/i;
    const file = event.target.files[0];

    console.log(file);

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
      ? this.detalle.anexo = data
      : this.form.get('anexo').patchValue(data);
  }

  crearServicio() {
    const data = this.form.value;

    this.store.dispatch(new CrearEsp(data));
    this.form.reset();
    this.inputFileReset();
  }

  verDetalle(content, index: number, editar: boolean = false) {
    this.control.id = index;
    this.control.editar = editar;
    this.detalle = this.obtenerServicio(index);
    this.modalService.open(content, { size: 'lg' });
  }

  guardarCambios(content) {
    const id = this.control.id;
    console.log(this.detalle);
    this.store.dispatch(new EditarEsp(this.detalle, id));
    this.resetControl();
    content.close();
  }

  eliminarServicioEsp(id: number) {
    const confirm = window.confirm('Esta seguro de eliminar este servicio?');
    if (!confirm) {
      return;
    }
    this.store.dispatch(new EliminarEsp(id));
  }

  resetControl() {
    this.control.editar = false;
    this.control.id = 0;
    this.detalle = null;
  }

  guardarServiciosEsp() {
    const confirm = window.confirm('Esta seguro de solicitar los servicios?');
    if (!confirm) {
      return;
    }
    this.store.dispatch(new AlmacenarEsps());
  }

  openMdTerminos(content) {
    this.modalService.open(content);
  }


  inputFileReset() {
    this.inputFile.nativeElement.value = '';
  }
}

