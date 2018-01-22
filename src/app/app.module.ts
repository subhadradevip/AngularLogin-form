import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';
import{Routes,RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { SturegComponent } from './stureg/stureg.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    SturegComponent
  ],
    imports: [
    BrowserModule,FormsModule,
    RouterModule.forRoot([
      { path:'loginform',component:LoginformComponent},
      { path:'stureg',component:SturegComponent}
      ])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
