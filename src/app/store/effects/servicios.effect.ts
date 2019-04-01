import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { withLatestFrom, map, mergeMap, tap, switchMap } from 'rxjs/operators';
import { ServiciosActionTypes, CargarServicios, AlmacenarPoligrafia, PoligrafiaActionTypes } from '../actions';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { InvestigacionActionTypes, AlmacenarInvestigaciones } from '../actions';
import { CentroCostoActionTypes, RemoverCentroCosto, Servicios } from '../actions';
import { AlmacenarServiciosEsp, RemoverServiciosEsp, ServicioEspActionTypes } from '../actions';
import { RemoverInvestigaciones } from '../actions';
import { Servicio } from '../../@models/servicio';
import { RemoverPoligrafia } from '../actions';

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
      })
    )),
    switchMap(() => this.limpiarStore())
  );

  @Effect()
  servicios$ = this.actions$.pipe(
    ofType(ServiciosActionTypes.SOLICITAR),
    withLatestFrom(this.dataService.cargarInvestigaciones()),
    map(([payload, inv]) => inv),
    withLatestFrom(this.dataService.cargarEsps()),
    map(([inv, esp]) => inv.concat(esp)),
    withLatestFrom(this.dataService.cargarPoligrafias()),
    map(([invEsp, pol]) => invEsp.concat(pol)),
    tap(() => console.log('before load data')),
    map((data: Servicio[]) => new CargarServicios(data)),
    tap(() => console.log('before load data'))
  );

  constructor(
    private actions$: Actions,
    private dataService: DataService,
    private store: Store<any>,
    private router: Router
  ) {}

  limpiarStore() {
    this.router.navigate(['./'])
      .then(() => window.location.reload());

    return [
      new RemoverCentroCosto(),
      new RemoverServiciosEsp(),
      new RemoverInvestigaciones(),
      new RemoverPoligrafia()
    ];
  }
}
