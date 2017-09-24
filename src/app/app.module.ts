import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule, } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EqualValidator } from './login/password.match';
import {HttpClientModule} from '@angular/common/http';
import { XSRFStrategy, CookieXSRFStrategy } from '@angular/http';
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

