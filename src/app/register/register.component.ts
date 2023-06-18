import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  hidden: boolean = false;
  membership: boolean = false;
  menubar: boolean = true;

  username = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
  ]);
  
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);

  City = new FormControl('', [Validators.required, Validators.minLength(4)]);
  number = new FormControl('', [Validators.required, Validators.minLength(11)]);

  Address = new FormControl('', [
    Validators.required,
    Validators.minLength(20),
  ]);

  firstname = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
  ]);

  nrestaurant = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  email = new FormControl('', [Validators.required, Validators.minLength(10)]);

  full: Full = new Full();
  array: Full[] = [];

  add() {
    this.array.push(this.full);
    this.full = new Full();
    console.log(this.array);
  }

  Restaurant() {
    this.hidden = true;
    this.membership = false;

    this.menubar = !this.menubar;
  }

  Member() {
    this.membership = true;
    this.hidden = false;
    this.menubar = !this.menubar;
  }
  
}

class Full {
  membername!: string;
  restaurantname!: string;
  firstname!: string;
  nrestaurant!: string;
  password!: number;
  email!: string;
  number!: number;
  Address!: string;
  City!: string;
}
