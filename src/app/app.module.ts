import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
<<<<<<< HEAD
import { HttpModule, } from '@angular/http';
=======
import { HttpModule } from '@angular/http';
>>>>>>> 34bf2ec2de4e6b1b88b7b42737bfc9f4300fa22c

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EqualValidator } from './login/password.match';
import {HttpClientModule} from '@angular/common/http';
<<<<<<< HEAD
import { XSRFStrategy, CookieXSRFStrategy } from '@angular/http';
=======

>>>>>>> 34bf2ec2de4e6b1b88b7b42737bfc9f4300fa22c
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EqualValidator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
<<<<<<< HEAD
    HttpClientModule,
  ],
  providers: [
  // {
  //           provide: XSRFStrategy,
  //           useValue: new CookieXSRFStrategy('csrftoken', 'X-CSRFToken')
  //       }
       ],

  bootstrap: [AppComponent]
})


export class AppModule { }

=======
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
>>>>>>> 34bf2ec2de4e6b1b88b7b42737bfc9f4300fa22c
