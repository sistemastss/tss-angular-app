import {ActividadesService} from '../services/actividades.service';
import {FormGroup} from '@angular/forms';


/**
 * clase que controla el comportamiento de las vistas de  los formularios
 * de las actividades
 * TODO quitar herencia y convertir la clase en un servicio
 */
export class ActividadClass {

  protected form: FormGroup;



  /**
   * codigo de la actividad
   */
  protected codigo: string;



  /**
   * cargar permisos del usuario
   */
  protected permissions: any;



  /**
   * servicio esp
   */
  protected servicioEsp: number;



  /**
   *  almacena la actividad actual
   */
  protected actividad: any;




  protected constructor(protected _actividades: ActividadesService) {
    this.servicioEsp = this._actividades.getServicioEsp().id;
  }



  /**
   * asignacion de freelance
   */
  asignarFuncionario(event: any): void {

    const actividad = this.actividad.id;
    const usuarioId = event.funcionario;
    const estado = 'asignado';

    const data = {
      usuarioId,
      estado
    };

    // asignar actividad al freelance
    this._actividades.postAsignarActividad(actividad, data)
      .subscribe(
        (response: any) => {
          this.actividad.actividadAsignada = response.data;
          this.setEstado(estado);
        },
        this._actividades.handleError
      );
  }



  onAceptarActividad(): void {
    this.setEstado('aceptado');
  }



  /**
   *Notificar una vez se ha finalizado la actividad
   */
  notificarAnalista(): void {
    const confirm = window.confirm('Esta seguro de notificar al analista Esp?');

    if (! confirm) {
      return;
    }

    this.setEstado('notificado', () => {
      alert('Notificacion enviada al analista Esp');
    });
  }



  /**
   * actualiza el estado de la actividad en la base de datos y en el localstorage
   */
  setEstado(estado: string, callback = () => {}) {

    const id = this.actividad.id;
    const data = { estado };

    this.actividad.estado = estado;

    this._actividades.putEstadoActividad(id, data)
      .subscribe(callback, this._actividades.handleError);
  }



  /**
   * guardar informacion de la actividad
   */
  protected onSubmit(): void {}



  /**
   * actualizar informacion almacenada
   */
  protected onUpdate(): void {}



  /**
   * solicitud de datos al servidor si el estado
   * de la actividad es asignado
   */
  protected getValue(): void {}



  /**
   *transformacion de la respuesta
   */
  protected transformResponse(response: any): any {}
}
