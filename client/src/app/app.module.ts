import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {AppComponent} from './app.component';
import {TestPageComponent} from './test-page/test-page.component';
import {SignUpComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {ProductsComponent} from './products/products.component';
import {ProductService} from './service/product.service';
import {TokenInterceptor} from './token-interceptor';
import {AppRoutingModule} from './/app-routing.module';
import {UserListComponent} from './user-list/user-list.component';
import {CategoryComponent} from './category/category.component';
import {OrdersComponent} from './orders/orders.component';
import {OrderService} from './service/order.service';
import {MaterialModule} from './material';
import {MatToolbarModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { TopBarComponent } from './top-bar/top-bar.component';
import {DataService} from './data.service';
import { APP_BASE_HREF } from '@angular/common';

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
    OrdersComponent,
    CategoryComponent,
    LoginComponent,
    TopBarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    NoopAnimationsModule,
    MatTableModule,
  ],
  exports: [LoginComponent], // oklart -
  providers: [{provide: APP_BASE_HREF, useValue: '/' },
    DataService, ProductService, OrderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
