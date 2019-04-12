import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {Store} from '@ngrx/store';
import {CentroCostoState} from '../store/state';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SolicitarServiciosGuard implements CanActivate {

  constructor(private store: Store<CentroCostoState>,
              private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    return this.store.select('centroCosto').pipe(
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
