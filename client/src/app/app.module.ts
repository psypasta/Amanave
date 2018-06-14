import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestPageComponent } from './test-page/test-page.component';
import { SignUpComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import {ProductService} from './service/product.service';
import { TokenInterceptor} from './token-interceptor';
import { AppRoutingModule } from './/app-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    TestPageComponent,
    SignUpComponent,
    LoginComponent,
    ProductsComponent,
    TestPageComponent,
    UserListComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [ProductService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
