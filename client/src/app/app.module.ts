import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestPageComponent } from './test-page/test-page.component';
import { AuthService } from './service/auth.service';
import { UserService } from './service/user.service';
import { Interceptor } from "./app.interceptor";
import { TokenStorage } from "./storage/token.storage";
import { SignUpComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TestPageComponent,
    SignUpComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
  ],

  providers: [UserService, AuthService, TokenStorage, TokenStorage,
  {provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi : true} ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
