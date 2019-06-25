import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../../../../services/login.service';
import { AuthService } from '../../../../services/auth/auth.service';
import { Store } from '@ngrx/store';
import { RemoveServicios } from '../../store/actions/servicios.actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: []
})
export class MainComponent implements OnInit, OnDestroy {

  rol: string;

  constructor(
    private authService: AuthService,
    private loginService: LoginService,
    private store: Store<any>
  ) { }

  ngOnInit() {
    // this.rol = this.loginService.rol.codigo;
    this.rol = this.authService.getUser().user.rol.codigo;
    console.log(this.rol);
  }

  ngOnDestroy() {
    this.store.dispatch(new RemoveServicios());
  }

  

}
