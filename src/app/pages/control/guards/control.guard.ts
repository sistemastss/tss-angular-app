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
      case 'CLS':
        this.router.navigate(['./dashboard/1']);
        return true;

      case 'FRCE':
        this.router.navigate(['./dashboard/2']);
        return true;

      case 'AESP':
        this.router.navigate(['./dashboard/2']);
        return true;

    }

    this.router.navigate(['./login']);
    return false;
  }
}
