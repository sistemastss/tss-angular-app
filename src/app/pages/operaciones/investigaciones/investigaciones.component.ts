import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Investigacion} from '../../../@models/Investigacion';
import {InvestigacionService} from '../../../services/investigaciones/investigacion.service';
import {NgxPermissionsService} from 'ngx-permissions';

@Component({
  selector: 'app-investigaciones',
  templateUrl: './investigaciones.component.html',
  styleUrls: ['./investigaciones.component.css']
})
export class InvestigacionesComponent implements OnInit {
  
  form = new FormGroup({
    CL  : new FormControl(false),
    IC  : new FormControl(false),
    IM  : new FormControl(false),
    PTH : new FormControl(false),
    PPH : new FormControl(false),
    PTD : new FormControl(false),
    PPD : new FormControl(false),
    IS  : new FormControl(false),
  }, Validators.required);
  
  showError: any;
  permissions: any;
  toggle: boolean;
  options: any;
  data: any;

  constructor(private _store: Store<Investigacion[]>,
              private _investigacion: InvestigacionService,
              private _permission: NgxPermissionsService) {
  }

  ngOnInit() {
    this.permissions = this._permission.getPermissions();
    this._investigacion.obtenerInvestigaciones().subscribe(value => this.data = value.data);
  }


  eliminarInvestigacion(id: any) {
    
  }

  abrirModal(item: any) {
    this.toggle = true;
  }

  notificarDirectorOperacion(item: any) {
    
  }

  notificarClienteAndFacturacion(item: any) {
    
  }

  cerrarModal() {
    this.toggle = false;
  }

  guardarActividades() {
    console.log(this.filtrarActividades());
    const actividades = this.filtrarActividades();
    actividades.forEach(value => {
      this._investigacion.aplicarActividades()
    })

  }

  filtrarServicios(value: string, value2: string) {

  }

  filtrarActividades() {

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

    const actividades = this.form.value as object[];
    const actividadesChecked = [];

    for (const actividad in actividades) {
      if (actividades[actividad]) {
        actividadesChecked.push({actividadCodigo: actividad});
      }
    }
    return actividadesChecked;
  }
}
