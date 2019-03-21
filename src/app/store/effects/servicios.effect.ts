import { ServiciosActionTypes, CargarServicios } from './../actions/servicios.action';
import {InvestigacionActionTypes, AlmacenarInvestigaciones} from './../actions/investigacion.action';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {withLatestFrom, map, mergeMap, tap, switchMap} from 'rxjs/operators';
import {DataService} from '../../services/data.service';
import {CentroCostoActionTypes, RemoverCentroCosto, Servicios} from '../actions/centro-costo-action';
import {Store} from '@ngrx/store';
import {AlmacenarServiciosEsp, RemoverServiciosEsp, ServicioEspActionTypes} from '../actions/servicio-esp.action';
import {RemoverInvestigaciones} from '../actions/investigacion.action';
import { EMPTY } from 'rxjs';

@Injectable()
export class ServiciosEffect {

  @Effect()
  centroCosto$ = this.actions$.pipe(
    ofType(CentroCostoActionTypes.ALMACENAR),
    map((payload: any) => payload.payload),
    withLatestFrom(this.store.select(state => state.centroCosto)),
    mergeMap(([type, data]) => this.dataService.almacenarCentroCosto(data).pipe(
      map((response: any) => response.data.id),
      map((centroCostoId) => {
        console.log('when centro costo saved', centroCostoId);
        if (type === Servicios.ESP) {
          return new AlmacenarServiciosEsp(centroCostoId);
        } else {
          return new AlmacenarInvestigaciones(centroCostoId);
        }
      })
    ))
  );

  @Effect()
  servicioEsp$ = this.actions$.pipe(
    ofType(ServicioEspActionTypes.ALMACENAR),
    map((payload: any) => payload.centroCostoId),
    withLatestFrom(this.store.select(state => state.servicioEsp)),
    mergeMap(([centroCostoId, payload]) => this.dataService.almacenarEsp(centroCostoId, payload).pipe(
      tap(() => {
        console.log('after "esps" were saved');
        this.router.navigate(['../servicios']);
      })
    )),
    switchMap(() => this.limpiarStore())
  );

  @Effect()
  investigaciones$ = this.actions$.pipe(
    ofType(InvestigacionActionTypes.ALMACENAR),
    map((payload: any) => payload.centroCostoId),
    withLatestFrom(this.store.select(state => state.investigacion)),
    mergeMap(([centroCostoId, payload]) => this.dataService.almacenarInvestigaciones(centroCostoId, payload).pipe(
      tap(() => {
        console.log('after "investigaciones" were saved');
        this.router.navigate(['../servicios']);
      })
    )),
    switchMap(() => this.limpiarStore())
  );

  @Effect()
  servicios$ = this.actions$.pipe(
    ofType(ServiciosActionTypes.SOLICITAR),
    withLatestFrom(this.dataService.cargarEsps()),
    withLatestFrom(this.dataService.cargarInvestigaciones()),
    map(([data, investigaciones]) => data[1].concat(investigaciones)),
    map((data: any[]) => new CargarServicios(data))
  );

  constructor(
    private actions$: Actions,
    private dataService: DataService,
    private store: Store<any>,
    private router: Router
  ) {}

  limpiarStore() {
    console.log('clear store');
    return [
      new RemoverCentroCosto(),
      new RemoverServiciosEsp(),
      new RemoverInvestigaciones()
    ];
  }
}
