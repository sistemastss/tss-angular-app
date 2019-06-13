import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Esp } from '../../interfaces/esp.interface';
import { Store } from '@ngrx/store';
import { AlmacenarEsps, CrearEsp, EditarEsp, EliminarEsp } from '../../store/actions/esp.actions';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HelperService } from '../../../../services/helper.service';
import { File } from '../../../../@models/file.interface';
import { EspState } from '../../store/state';
import { ActividadService } from '../../../../shared/services/actividad.service';

@Component({
  selector: 'app-servicio-esp',
  templateUrl: './solicitud-esp.component.html',
  styles: []
})
export class SolicitudEspComponent implements OnInit {

  @ViewChild('inputFile') inputFile: ElementRef;

  form = this.fb.group({
    evaluado: this.fb.group({
      evaluado            : ['', Validators.required ],
      tipo_documento      : ['', Validators.required ],
      documento           : ['', [ Validators.required, Validators.minLength(6) ]],
      telefono            : ['', [ Validators.required, Validators.minLength(7) ]],
      email               : ['', [ Validators.required, Validators.email ]],
      direccion           : ['', Validators.required ],
      cargo               : ['', Validators.required ],
    }),
    lugar_desarrollo      : ['', Validators.required ],
    observaciones         : ['', Validators.required ],
    anexo                 : [''],
    tipo_esp              : ['', Validators.required ],
    aceptar_terminos      : [false, Validators.required],
  });

  control = {
    editar: false,
    id: 0
  };

  detalle: Esp;
  servicios: Esp[] = [];
  today = new Date().getTime();
  actividades = [];

  espSelect = state => state.solicitudServicio.esp;

  constructor(
    private fb: FormBuilder,
    private store: Store<EspState>,
    private modalService: NgbModal,
    private helper: HelperService,
    private actividadService: ActividadService,
  ) {}

  ngOnInit() {
    this.form.setValue(
      {
        evaluado: {
          evaluado: 'asds',
          tipo_documento: 'cc',
          documento: 12345678,
          telefono: 3600255,
          email: 'styven21121@gmail.com',
          direccion: 'cll 16 # 20 -16',
          cargo: 'algo',
        },
        lugar_desarrollo: 'Bogota',
        observaciones: 'datos',
        tipo_esp: 'basico',
        anexo: '',
        aceptar_terminos: false
      });

    this.store.select(this.espSelect)
      .subscribe((value: Esp[]) => this.servicios = value);

    this.actividadService.get('ESP').subscribe(response => {
      this.actividades = response;
      setTimeout(() => this.selectActividades('basico'), 500);
    });
  }

  selectActividades(type: 'basico' | 'integral' | 'avanzado') {
    const actividades$ = document.getElementsByName('actividades') as NodeList;
    actividades$.forEach(((value: any) => value.checked = false));
    switch (type) {
      case 'basico':
        const espBasico = this.actividadService.espBasico;
        actividades$.forEach((value: any) => {
          for (const item of espBasico) {
           if (value.value === item) {
             value.checked = true;
           }
          }
        });
        break;

      case 'integral':
        const espIntegral = this.actividadService.espIntegral;
        actividades$.forEach((value: any) => {
          for (const item of espIntegral) {
            if (value.value === item) {
              value.checked = true;
            }
          }
        });
        break;

      case 'avanzado':
        const espAvanzado = this.actividadService.espAvanzado;
        actividades$.forEach((value: any) => {
          for (const item of espAvanzado) {
            if (value.value === item) {
              value.checked = true;
            }
          }
        });
        break;
    }
  }

  setDefaultEsp() {
    const espBasico = document.getElementById('basico') as any;
    espBasico.checked = true;
  }

  getActividades() {
    const actividades$ = document.getElementsByName('actividades');
    const actividadesSelected = [];
    actividades$.forEach((value: any) => {
      if (value.checked) {
        actividadesSelected.push({
          actividad_id: value.id
        });
      }
    });

    return actividadesSelected;
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
      file_name: file.name,
      blob: base64
    };

    editar
      ? this.detalle.anexo = data
      : this.form.get('anexo').patchValue(data);
  }

  crearServicio() {
    const data = this.form.value;
    data.actividades = this.getActividades();

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

