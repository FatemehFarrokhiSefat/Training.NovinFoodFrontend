import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hidden:boolean=false;
  membership:boolean=false;

  full:Full=new Full;
  array:Full[]=[];
  add(){
    this.array.push(this.full);
    this.full=new Full;
    console.log(this.array);
  }
  Restaurant(){
    this.hidden=true;
    this.membership=false;
  }
  Member(){
    this.membership=true;
    this.hidden=false;
  }
  
}
class Full{
 membername!:string;
 restaurantname!:string;
  firstname!:string;
  nrestaurant!:string;
  password!:number;
  email!:string;
  number!:number;
  Address!:string;
  City!:string;
}
