import {Component, OnInit} from '@angular/core';
import {ActividadesService} from '../../../services/actividades.service';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {

  servicioEsp: any;

  constructor(protected _actividades: ActividadesService) { }

  ngOnInit() {
    this.servicioEsp = this._actividades.getServicioEsp();
  }
}
