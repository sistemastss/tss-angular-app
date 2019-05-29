import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { CentroCostoState } from '../store/reducers/centro-costo.reducer';

@Injectable({
  providedIn: 'root'
})
export class SolicitarServiciosGuard implements CanActivate {

  // selector
  centroCosto = state => state.solicitudServicio.centroCosto;

  constructor(private store: Store<CentroCostoState>,
              private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    return this.store.select(this.centroCosto).pipe(
      map(value => {
        if (value) {
          return true;
        }
        this.router.navigate(['../nuevo-servicio/solicitud']);
        return false;
      })
    );
  }
}
