import { Store } from '@ngrx/store';
import { Servicio } from './../../../@models/servicio';
import {Component, OnInit} from '@angular/core';
import {EspService} from '../../../services/esp/esp.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../../services/data.service';
import {LoginService} from '../../../services/login.service';
import {NgxPermissionsService} from 'ngx-permissions';
import {ActividadesService} from '../../../services/actividades.service';
import * as moment from 'moment';
import {MailServiceService} from '../../../services/mail-service.service';
import { SolicitarServicios } from 'src/app/store/actions/servicios.actions';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './esp.component.html',
  styles: []
})

export class EspComponent implements OnInit {

  constructor(
    private store: Store<any>,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    private espService: EspService,
    private dataService: DataService,
    private actividadesService: ActividadesService,
    private mailService: MailServiceService,
    private ngxPermissionsService: NgxPermissionsService) {
  }

  /**
   * carga todos los servicios esp
   */
  data: any[];


  /**
   * controla la visivilidad del modal
   */
  toggle = false;


  /**
   * se cargaran las actividades que se
   * mostrara en el modal
   */
  actividades: any;


  /**
   * se almacenara temporalmente el servicio esp
   * al momento de abrir el modal
   */
  servicioEsp: any;


  /**
   * carga rol del usuario
   */
  permissions: any;


  /**
   * flag
   * controla el mensaje de error
   */
  showError: boolean;


  options = [
    { title: 'sin filtro', value: 'sinFiltro' },
    { title: 'centro de costo', value: 'centroCosto' },
    { title: 'ciudad', value: 'ciudad' },
    { title: 'nombre del clientes', value: 'cliente' },
    { title: 'identificacion de evaluado', value: 'identificacion' },
  ];


  auxData: any;



  ngOnInit() {
    this.store.select('servicio').subscribe(data => {
      this.data = data;
    });

    this.store.dispatch(new SolicitarServicios());
    this.permissions = this.ngxPermissionsService.getPermissions();
    // this.loadServiciosEsp();
    this.showError = false;
  }

  sortData(data: Servicio[]) {
    return data.sort((a: Servicio, b: Servicio) => {
      const A = new Date(a.fechaCreacion).getDate;
      const B = new Date(b.fechaCreacion).getDate;
      if (A === B) {
        return 0;
      }
      return (A > B) ? 1 : -1;
    });
  }


  loadServiciosEsp(): void {
    // servicios esp para administrador general y analista esp
    /*if (this.permissions.ADG || this.permissions.AESP || this.permissions.DOPE) {

      this.dataService.cargarEsps().subscribe(
        (value: Servicio[]) => this.servicios = this.sortData(value),
        (err: any) => console.error(err.error.message)
      );

      // servicios esp para clientes
    } else if (this.permissions.CLI) {

      const clienteId = this.loginService.user.id;

      this.dataService.cargarEsps().subscribe(
        (value: Servicio[]) => this.servicios = this.sortData(value),
        (err: any) => this.showError = true
      );

      // servicios esp para freelance
    } else if (this.permissions.FRCE) {

      const freelanceId = this.loginService.user.id;

      this.dataService.getFreelanceServiciosEsp(freelanceId).subscribe(
        (value: any) => this.servicios = value.servicios,
        (err: any) => console.error(err.error.message)
      );

    }*/
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

            this.actividades = value.servicios;

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



  filterServicesEsp(minDate: any, maxDate: any): void {

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

    const values = this.data
      .filter((el: any) =>
        moment(el.timestamps.fechaCreacion.date).unix() >= minDateTimestamp &&
        moment(el.timestamps.fechaCreacion.date).unix() <= maxDateTimestamp
      );

    if (!values) {
      alert('No existen servicios Esp en el rango de fechas seleccionado');

    }

    this.data = values;

  }



  notificarDirectorOperacion(item: any) {
    const notificar = confirm('Desea notificar el servicio esp al director de operaciones?')

    if (notificar) {
      const estado = 'notificado';

      this.dataService.updateEstadoServicioEsp(item.id, {estado})
        .subscribe((value: any) => window.location.reload());
    }
  }



  notificarClienteAndFacturacion(item: any) {
    const notificar = confirm('Desea notificar el servicio a facturacion y al clientes?');

    if (notificar) {
      const estado = 'finalizado';


      const mailFacturacion = {
        mailTo: 'directorOperacionesToFacturacion',
        mailData: {
          to: "styven21121@gmail.com",
          centroCostoId: item.centroCosto.id,
          cliente: item.centroCosto.cliente.nombre,
          contacto: ' ',
          numeroContacto: 1234323,
          nombreEvaluado: item.personaEvaluada.nombre,
          actividades: [
            {
              nombreActividad: "visita domiciliaria",
              fechaCreacion: "8/10/2019",
              fechaCulminada: "10/1/2019"

            },
            {
              nombreActividad: "visita segurida",
              fechaCreacion: "8/10/2019",
              fechaCulminada: "10/1/2019"

            }
          ]
        }
      }


      this.dataService.updateEstadoServicioEsp(item.id, {estado})
        .subscribe((value: any) => {
          this.mailService.sendMail(mailFacturacion).subscribe(() => window.location.reload());

        });
    }

  }

  filtrarServicios(filtro: string, query: any) {

    let dataFiltered: any;

    if (this.auxData == null) {
      this.auxData = this.data;

      console.log('aux initialization');
    }

    if (query === '' && filtro !== 'sinFiltro') {
      window.alert('Por favor ingrese un valor a buscar');
      return;
    }

    if (filtro === 'sinFiltro') {
      this.loadServiciosEsp();
      return;

    }

    if (filtro === 'centroCosto') {
      this.data = this.auxData;
      dataFiltered = this.data
        .filter((el: any) => !el.centroCosto.id.toString().search(query));
    }

    if (filtro === 'ciudad') {
      this.data = this.auxData;
      dataFiltered = this.data
        .filter((el: any) => !el.ciudadDesarrollo.toLowerCase().search(query));
    }

    if (filtro === 'cliente') {
      this.data = this.auxData;
      dataFiltered = this.data
        .filter((el: any) => !el.personaEvaluada.nombre.toLowerCase().search(query));
    }

    if (filtro === 'identificacion') {
      this.data = this.auxData;
      dataFiltered = this.data
        .filter((el: any) => !el.personaEvaluada.documento.toString().search(query));
    }

    if (dataFiltered.length === 0) {
      window.alert('No se han encontrado resultados');
      return;

    } else {
      this.data = dataFiltered;
    }

  }
}
