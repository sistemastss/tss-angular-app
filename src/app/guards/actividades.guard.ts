import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActividadesGuard implements CanActivate {


  constructor(private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const servicio = localStorage.getItem('servicio');
    const actividades = ['servicio_esp']['actividades'] as object[];
    let flag = true;

    /*actividades.forEach(value => {
      if (value['estado'] == 'cargado') {
        this.router.navigate(['/'], { queryParams: { returnUrl: state.url }});
        flag = false;
      }
    });*/

    return flag;
  }
}
