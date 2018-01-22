import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  visible :boolean=false;
  imagepath:string='http://www.vishnu.edu.in/uploadnews/newlogo.bmp';
  Show()
  {
    this.visible = !this.visible
  
  }
}
