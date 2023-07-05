import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  Disappearance: boolean = true;
  form: boolean =true;

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
    this.loginservics.login(this.username.value ?? '',this.password.value ?? '' );
   this.Disappearance=false;
  }

  loginII() {
    this.Disappearance = !this.Disappearance;
  }
}
