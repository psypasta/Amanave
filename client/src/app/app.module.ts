import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { TestPageComponent } from './test-page/test-page.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS} from "@angular/common/http";
import { TokenInterceptor} from "./token-interceptor";
import {AuthService} from "./service/auth.service";
import { JwtHelperService } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    TestPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
