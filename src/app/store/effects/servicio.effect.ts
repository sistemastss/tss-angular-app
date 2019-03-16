import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {EMPTY} from 'rxjs';
import {DataService} from '../../services/data.service';
import {Cargar, ServiciosActionTypes, Solicitar} from '../actions/servicios.action';
import {Servicio} from '../../@models/servicio';

@Injectable()
export class ServicioEffect {

  @Effect()
  cargarServicios$ = this.actions$
    .pipe(
      ofType(ServiciosActionTypes.SOLICITAR),
      mergeMap(() => this.dataService.obtenerServicios()
        .pipe(
          map((servicios: Servicio[]) => new Cargar(servicios)),
          catchError(() => EMPTY)
        )
      )
    );

  constructor(
    private actions$: Actions,
    private dataService: DataService
  ) {}
}
