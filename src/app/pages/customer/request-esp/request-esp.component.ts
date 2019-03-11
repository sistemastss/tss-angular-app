import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EspService} from '../../../services/esp.service';
import {Router} from '@angular/router';
import {MailServiceService} from '../../../services/mail-service.service';
import {DataService} from '../../../services/data.service';
import {Observable} from 'rxjs';
import {ServicioEsp} from '../../../@models/servicio-esp';
import {Store} from '@ngrx/store';
import {ServicioEspState} from '../../../store/state';

@Component({
  selector: 'app-servicio-esp',
  templateUrl: './request-esp.component.html',
  styles: []
})
export class RequestEspComponent implements OnInit, OnDestroy {

  /**
   *  1. recuperar el centro de costo de localstorage
   *  2. crear servicio esp en el centro de costo
   *  2.1. actualizar el servicio esp
   *  2.2. eliminar el servicio esp
   *  3. guardar centro de costo en la db
   */

  form = new FormGroup({
    nombre              : new FormControl('', Validators.required),
    documento           : new FormControl('', [Validators.required, Validators.minLength(6)]),
    departamento        : new FormControl('', Validators.required),
    ciudad              : new FormControl('', Validators.required),
    telefono            : new FormControl('', [Validators.required, Validators.minLength(7)]),
    correo              : new FormControl('', [Validators.required, Validators.email]),
    ciudadDesarrollo    : new FormControl('', Validators.required),
    anexo               : new FormControl('hv.docx'),
    observaciones       : new FormControl(),
    // notificarCliente    : new FormControl(),
    actividades         : new FormGroup({
      HJ       : new FormControl(),
      VDS      : new FormControl(),
      VA     : new FormControl(),
      VL  : new FormControl(),
      DG           : new FormControl(),
      Dd       : new FormControl(),
      PL   : new FormControl(),
      EF              : new FormControl(),
      dicatamenGrafolofico    : new FormControl(),
      decadactilar            : new FormControl(),
      PP      : new FormControl(),
    })
  });

  colums = [
    'fecha',
    'evaluado',
    'ciudadDesarrollo',
    'acciones'
  ];

  updateServicioEsp = {
    update: false,
    id: 0
  };



  readonly servicioEsp$: Observable<ServicioEsp[]>;

  constructor(private store: Store<ServicioEspState>,
              private espService: EspService,
              protected _data: DataService,
              private router: Router, private mailService: MailServiceService ) {
    this.servicioEsp$ = this.store.select('servicioEsp');
  }

  ngOnInit() {
    this.servicioEsp$.subscribe(value => console.log(value));
  }

  ngOnDestroy(): void {
    // this.espService.removeCentroCostoStore();
  }

  formatDataTable() {
    const serviciosEsp = this.espService.getServiciosEsp();

    return serviciosEsp.map((key, index) => {
      return {
        'fecha'             : new Date().getTime(),
        'evaluado'          : key['nombre'],
        'ciudadDesarrollo'  : key['ciudadDesarrollo']
      };
    });
  }

  onRollback(id: number) {
    // set the form whit an object of the _store
    window.scrollTo(0, 0);

    this.updateServicioEsp.update = true;
    this.updateServicioEsp.id = id;

    const servicioEsp = this.espService.getServicioEsp(id);

    this.form.setValue(servicioEsp);
  }

  onCreateServiceEsp() {
    this.espService.crearServicioEsp(this.buildObject());
    this.espService.addServicioEsp(this.buildObject());
    this.form.reset();
  }

  onUpdate(id) {
    this.espService.updateServicioEsp(this.buildObject(), id);
    this.form.reset();

    this.updateServicioEsp.update = false;
    this.updateServicioEsp.id = 0;
  }

  onDelete(id: number) {
    this.espService.deleteServicioEsp(id);
  }


  onSaveServicesEsp() {

    this.espService.saveCentroCosto().subscribe(
      (value: any) => {

        const data = {
          mailTo: 'analistaEspToCliente',
          mailData: {
            to: 'styven21121@gmail.com', // value.data[0].centroCosto.cliente.correo,
            personaDestino: value.data.clienteId,
            centroCostoId: value.data.id,
          }
        };

        this.mailService.sendMail(data).subscribe(val => console.log(val));




        const serviciosEsp = this.espService.getCentroCostoStore().serviciosEsp;


        serviciosEsp.forEach(item => {
          item.centroCostoId = value.data.id;
          this.espService.saveServicioEsp(item)
            .subscribe(null, err => console.log(err));
        });

        this.router.navigate(['operaciones/esp'])
          .then(// () => //this.espService.removeCentroCostoStore());
          );
      },
      error => console.log(error)
      );

    //
  }

  buildObject(): object {
    const form = Object.assign({}, this.form.value);
    const email = form.correo;
    form.actividades = this.filterActividades();

    form.email = email;

    delete form.correo;

    return form;
  }

  filterActividades() {

    /* const actividadesMap = [
      'historialJudicial',
      'visitaDomiciliaria',
      'verificacionLaboral',
      'dueDilligence',
      'estudioFinanciero',
      'verificacionAcademica',
      'poligrafia',
      'dicatamenGrafolofico',
      'decadactilar',
      'pruebaPsicotecnica',
    ];*/

    const actividades = this.form.get('actividades').value as object[];
    const actividadesChecked = [];

    for (const actividad in actividades) {
      if (actividades[actividad]) {
        actividadesChecked.push({actividadCodigo: actividad});
      }
    }
    return actividadesChecked;
  }
}
