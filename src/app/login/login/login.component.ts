import {Component, OnInit} from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { LoginService} from '../../services/login.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  returnUrl;

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private router: Router,
    public loginService: LoginService,
    private route: ActivatedRoute,
    public formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    /*const params = this.formGroup.value;
    console.log(params);
    this.login.login({
      'usuario': params.email,
      'contrasena': params.contrasena
    }).subscribe(
      res => console.log(res),
      err => console.log(err));
    */

    // this.onLogin.emit({'login': true});
    /*const login = {
      isLogin: true
    };

    localStorage.setItem('app', JSON.stringify(login));

    this.goToSection('home');

    window.location.reload();
  }

  goToSection(route) {
    this.route.navigate([route]);
  }*/

    const user = this.form.get('username').value;
    const password = this.form.get('password').value;

    this.loginService.login(user, password).subscribe(
      value => {
        this.router.navigate([this.returnUrl]).then(() => window.location.reload());
      },
      error => console.log(error)
    );
  }
}
