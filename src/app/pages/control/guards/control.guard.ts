import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControlGuard implements CanActivate {

  constructor(
    private rolService: any,
    private router: Router,
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const rol = this.rolService.rol;

    switch (rol) {
      case 'cls':
        this.router.navigate(['./dashboard/cls']);
        return true;

      case 'frce':
        this.router.navigate(['./dashboard/frce']);
        return true;

    }

    this.router.navigate(['./login']);
    return false;
  }
}
