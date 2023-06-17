import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  Disappearance: boolean = true;
  form: boolean =false;
  
  constructor(private loginservics: LoginService) {}
  username = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);
  login() {
    this.loginservics.login(this.username.value ?? '', this.password.value ?? '');
    this.Disappearance = !this.Disappearance;
    this.form=!this.form;
  }
  loginII() {
    this.Disappearance = !this.Disappearance;
  }
}