import {Component, OnInit} from '@angular/core';

import { FormBuilder, Validators} from '@angular/forms';
import { LoginService} from '../../services/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = this.fb.group({
    email: ['', Validators.email],
    password: '',
  }, Validators.required);

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public loginService: LoginService,
  ) {}

  ngOnInit() {
  }

  onSubmit() {
    const credentials = this.form.value;

    this.loginService.login(credentials).subscribe(
      () => this.router.navigate(['/']),
      () => swal(
        'ocurrio un error!',
        'Datos incorrectos o el usuario no existe!',
        'error'
      )
    );
  }
}
