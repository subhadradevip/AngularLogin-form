import { Component } from '@angular/core';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent  {
email:string ="";
password:string ="";
details: Array<Object> = [{email: '', password: ''}]; //array defining


constructor() { }

ngOnInit() {
}

signIn(){ //this is function 
  var data = {email: this.email, password: this.password};
  this.details.push(data);
  this.email="";
  this.password="";
  //console.log(this.details);
}

}
