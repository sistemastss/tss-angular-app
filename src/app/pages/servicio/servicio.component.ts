import {Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { LoginService } from '../../services/login.service';
import { NgxPermissionsService } from 'ngx-permissions';
import { ActividadesService } from '../../services/actividades.service';
import { Store } from '@ngrx/store';
import { Servicio } from '../../@models/servicio';
import * as moment from 'moment';
import {ModalService} from '../../services/modal/modal.service';

@Component({
  selector: './app-servicio',
  templateUrl: 'servicio.component.html',
  styles: []
})

export class ServicioComponent implements OnInit, OnDestroy {

  servicios: Servicio[] = [];
  toggle = false;
  actividades: any;
  servicioEsp: any;
  permissions: any;
  showError: boolean;
  servicios$ = this.store.select(state => state.solicitudServicio.esp);

  filtro = [
    { title: 'sin filtro', value: 'false' },
    { title: 'centro de costo', value: 'centroCosto' },
    { title: 'Ciudad', value: 'ciudad' },
    { title: 'Solicicitante', value: 'solicitante' },
    { title: 'evaluado', value: 'Evaluado' },
  ];
  detalle: Servicio;
  control = {
    type: ''
  };

  constructor(
    private store: Store<any>,
    private router: Router,
    private loginService: LoginService,
    private dataService: DataService,
    private actividadesService: ActividadesService,
    private modalService: ModalService,
    private ngxPermissionsService: NgxPermissionsService
  ) {
      this.servicios$.subscribe(data => {
        this.servicios = data
      });
  }

  static sortData(data: Servicio[]) {
    return data.sort((a: Servicio, b: Servicio) => {
      const A = a.centroCosto.id; // new Date(a.fechaCreacion).getDate;
      const B = b.centroCosto.id; // new Date(b.fechaCreacion).getDate;
      if (A === B) {
        return 0;
      }
      return (A < B) ? 1 : -1;
    });
  }

  ngOnInit() {
    // this.store.dispatch(new SolicitarServicios());
    this.permissions = this.ngxPermissionsService.getPermissions();
    this.loadServiciosEsp();
    this.showError = false;
  }

  ngOnDestroy(): void {
    // this.store.dispatch(new RemoverServicios());
  }


  loadServiciosEsp(): void {
    // this.store.dispatch(new SolicitarServicios());
    // servicios esp para administrador general y analista esp
    if (this.permissions.ADG || this.permissions.AESP || this.permissions.DOPE) {

      // this.store.dispatch(new SolicitarServicios());

      // servicios esp para solicitud-servicio
    } else if (this.permissions.CLI) {

      const clienteId = this.loginService.user.id;

      /*this.dataService.cargarEsps().subscribe(
        (value: Servicio[]) => this.servicios = ServicioComponent.sortData(value),
        (err: any) => this.showError = true
      );*/

      // this.store.dispatch(new SolicitarServicios());


      // servicios esp para freelance
    } else if (this.permissions.FRCE) {

      const freelanceId = this.loginService.user.id;

      this.dataService.cargarEsps()
      .subscribe(value => {
        this.servicios = value;
      });
      /*this.dataService.getFreelanceServiciosEsp(freelanceId).subscribe(
        (value: any) => {
          console.log(value);
          this.servicios = value.servicios;
        },
        (err: any) => console.error(err.error.message)
      );*/

    }
  }



  onShowModal(data: any): void {

    const permissions = this.ngxPermissionsService.getPermissions();
    this.servicioEsp = data;

     // cargar actividades dependiendo del rol
    if (permissions.ADG || permissions.AESP || permissions.CLI || permissions.DOPE) {

      const actividadesUrl = this.servicioEsp.links.actividades;
      // se cargan actividades y se muestra el modal
      this.dataService.httpGet(actividadesUrl, false)
        .subscribe(
          (value: any) => {

            console.log(value);

            this.actividades = value.data;

            this.toggle = true;

          },
          () => alert('Este servicio no tiene actividades')
        );

    } else if (permissions.FRCE) {

      const usuarioId = this.loginService.user.id;

      // id del servicio esp asignado al freelance
      const servicioEspId = this.servicioEsp.id;


      /**
       *  se solicita al servidor las actividades del servicio esp
       *  que se le han asignado y se muestra en el modal
       */
      this.dataService.getFreelanceActividadesServicioEsp(usuarioId, servicioEspId)
        .subscribe(
          (value: any) => {

            console.log(value);

            this.actividades = value.servicios;

            this.toggle = true;
          }
        );

    }

  }



  onCloseModal(): void {
    this.toggle = false;
  }



  loadActividades(actividad: any): void {

    const actividadCodigo = actividad.codigo;

    // mapa de actividades disponibles
    const actividades = this.dataService.actividades;

    // foreach loop del mapa de actividades
    actividades.forEach(value => {

      /**
       * si la actividad pasada por parametro coincide con
       * algun valor del mapa de actividades entonces se procede
       * a cargar las actividades en el localstorage se cambia de vista
       * utilizando la url del actual valor del mapa de actividades
       */
      if (actividadCodigo === value.codigo) {

        if (this.permissions.ADG  ||
            this.permissions.AESP ||
            this.permissions.DOPE ||
            this.permissions.CLI) {


          const actividadesUrl = this.servicioEsp.links.actividades;

          /**
           * se guarda en localstorage el servicio esp
           * se guarda en localstorage las actividades del servicio esp
           * se cambia la vista a la actividad seleccionada
           */
          this.dataService.httpGet(actividadesUrl, false)
            .subscribe((response: any) => {

                this.actividadesService.storeServicioEsp(this.servicioEsp);

                ActividadesService.storeActividades(response.servicios);

                this.router.navigate([value.path]);
              }
            );

        } else if (this.permissions.FRCE) {

          const usuarioId = this.loginService.user.id;


          /**
           * id del servicio esp que pertenece al freelance
           */
          const servicioEspId = this.servicioEsp.id;


          /**
           * se guarda en localstorage el servicio esp
           * se guarda en localstorage las actividades del servicio esp
           * se cambia la vista a la actividad seleccionada
           */
          this.dataService.getFreelanceActividadesServicioEsp(usuarioId, servicioEspId)
            .subscribe(
              (response: any) => {

                this.actividadesService.storeServicioEsp(this.servicioEsp);

                ActividadesService.storeActividades(response.servicios);

                console.log(value.path);
                this.router.navigate([value.path]);
              }
            );
        }
      }
    });
  }

  filtrarServicios(filtro: string, query: any) {

    let dataFiltered: any;

    if (filtro === 'false') {
      this.loadServiciosEsp();
      return;

    }

    if (query === '' && filtro !== 'false') {
      window.alert('Por favor ingrese un valor a buscar');
      return;
    }

    if (filtro === 'centroCosto') {
      dataFiltered = this.servicios
        .filter((el: any) => !el.centroCosto.id.toString().search(query));
    }

    if (filtro === 'ciudad') {
      dataFiltered = this.servicios
        .filter((el: any) => !el.ciudad.toLowerCase().search(query));
    }

    if (filtro === 'solicitante') {
      dataFiltered = this.servicios
        .filter((el: any) => !el.centroCosto.solicitante.toLowerCase().search(query));
    }


    if (filtro === 'evaluado') {
      dataFiltered = this.servicios
        .filter((el: any) => !el.evaluado.toLowerCase().search(query));
    }

    if (filtro === 'date') {
      this.filtrarPorFecha(query);
      return;
    }

    if (dataFiltered.length === 0) {
      window.alert('No se han encontrado resultados');
      return;

    } else {
      this.servicios = dataFiltered;
    }

  }

  filtrarPorFecha(query) {
    const dates = query.date;
    const [minDate, maxDate] = dates;


    console.log(minDate, maxDate);

    if (!minDate && !maxDate) {
      alert('Por favor seleccionar una fecha minima y una fecha maxima');
      return;

    } else if (!minDate || !maxDate) {

      if (!minDate) {
        alert('Por favor seleccionar una fecha minima');

      } else {
        alert('Por favor seleccionar una fecha maxima');

      }

      return;

    }

    if (minDate > maxDate) {
      alert('La fecha minima no puede ser mayor que la fecha maxima');
      return;

    }

    const minDateTimestamp = moment(minDate).unix();
    const maxDateTimestamp = moment(maxDate).unix();

    const values = this.servicios
      .filter((el: any) =>
        moment(el.timestamps.fechaCreacion.date).unix() >= minDateTimestamp &&
        moment(el.timestamps.fechaCreacion.date).unix() <= maxDateTimestamp
      );

    if (!values) {
      alert('No existen servicios EspInterface en el rango de fechas seleccionado');

    }

    this.servicios = values;

  }



  notificarDirectorOperacion(item: any) {
    const notificar = confirm('Desea notificar el servicio esp al director de operaciones?')

    if (notificar) {
      const estado = 'notificado';

      this.dataService.updateEstadoServicioEsp(item.id, {estado})
        .subscribe((value: any) => window.location.reload());
    }
  }

  abrirVentana(servicio: Servicio) {
    this.detalle = servicio;
    this.modalService.open();
  }

  cerrarVentana() {
    this.modalService.close();
    this.detalle = null;
  }

  reiniciar() {
    // this.store.dispatch(new RemoverServicios());
    // this.store.dispatch(new SolicitarServicios());
  }
}
