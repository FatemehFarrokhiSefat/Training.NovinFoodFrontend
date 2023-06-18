import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hidden:boolean=false;
  membership:boolean=false;
  Restaurant(){
    this.hidden=!this.hidden;
  }
  Member(){
    this.membership=!this.membership;
  }
  
}
