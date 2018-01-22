import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stureg',
  templateUrl: './stureg.component.html',
  styleUrls: ['./stureg.component.css']
})
export class SturegComponent implements OnInit {
  email:string ="";
  password:string ="";
  address:string="";
  city:string="";
  state:string="";
  zip:string="";
  details: Array<Object> = [{email: '', password: '',address:"",city:"",state:"",zip:"",}]; //array defining
  
  constructor() { }

  ngOnInit() {
  }

  signIn(){ //this is function 
    var data = {email: this.email, password: this.password,address:this.address,city:this.city,state:this.state,zip:this.zip};
    this.details.push(data);
    this.email="";
    this.password="";
    this.address="";
    this.city="";
    this.state="";
    this.zip="";
   // console.log(this.details);
  }
}
