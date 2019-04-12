import { RemoverPoligrafia } from './../actions/poligrafia.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { withLatestFrom, map, mergeMap, tap, switchMap } from 'rxjs/operators';
import { ServiciosActionTypes, CargarServicios, AlmacenarPoligrafia, PoligrafiaActionTypes } from '../actions';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { InvestigacionActionTypes, AlmacenarInvestigaciones } from '../actions';
import { CentroCostoActionTypes, RemoverCentroCosto, Servicios } from '../actions';
import { AlmacenarServiciosEsp, RemoverServiciosEsp, ServicioEspActionTypes } from '../actions';
import { RemoverInvestigaciones } from '../actions';

@Injectable()
export class ServiciosEffect {

  @Effect()
  centroCosto$ = this.actions$.pipe(
    ofType(CentroCostoActionTypes.ALMACENAR),
    map((payload: any) => payload.payload),
    withLatestFrom(this.store.select(state => state.centroCosto)),
    mergeMap(([type, data]) => this.dataService.almacenarCentroCosto(data).pipe(
      map((centroCostoId) => {
        console.log('when centro costo saved', centroCostoId);
        switch (type) {
          case Servicios.ESP:
            return new AlmacenarServiciosEsp(centroCostoId);

          case Servicios.INVESTIGACION:
            return new AlmacenarInvestigaciones(centroCostoId);

          case Servicios.POLIGRAFIA:
            return new AlmacenarPoligrafia(centroCostoId);
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
        this.router.navigate(['../control']);
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
        this.router.navigate(['../control']);
      })
    )),
    switchMap(() => this.limpiarStore())
  );

  @Effect()
  poligrafia$ = this.actions$.pipe(
    ofType(PoligrafiaActionTypes.ALMACENAR),
    map((payload: any) => payload.centroCostoId),
    withLatestFrom(this.store.select(state => state.poligrafia)),
    mergeMap(([centroCostoId, payload]) => this.dataService.almacenarPoligrafias(centroCostoId, payload).pipe(
      tap(() => {
        console.log('after "poligrafias" were saved');
        this.router.navigate(['../control']);
      })
    )),
    switchMap(() => this.limpiarStore())
  );

  /*@Effect()
  servicios$ = this.actions$.pipe(
    ofType(ServiciosActionTypes.SOLICITAR),
    withLatestFrom(this.dataService.cargarEsps()),
    withLatestFrom(this.dataService.cargarInvestigaciones()),
    withLatestFrom(this.dataService.cargarPoligrafias()),
    tap(([data, investigaciones]) => console.log(data, investigaciones)),
    map(([data, investigaciones]) => data[1].concat(investigaciones)),
    map((data: any[]) => new CargarServicios(data))
  );*/

  constructor(
    private actions$: Actions,
    private dataService: DataService,
    private store: Store<any>,
    private router: Router
  ) {}

  limpiarStore() {
    return [
      new RemoverCentroCosto(),
      new RemoverServiciosEsp(),
      new RemoverInvestigaciones(),
      new RemoverPoligrafia()
    ];
  }
}
