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
import { CreateUserComponent } from './create-user/create-user.component';
import {
  MatInputModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatDialog
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';

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
    CreateUserComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    TopBarComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
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
    MatInputModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatTableModule,
  ],
  entryComponents: [CreateUserComponent, UpdateUserComponent, DeleteUserComponent],
  providers: [{provide: APP_BASE_HREF, useValue: '/' },
    DataService, MatDialog, ProductService, OrderService,
              {
                provide: HTTP_INTERCEPTORS,
                useClass: TokenInterceptor,
                multi: true
              }
             ],
  bootstrap: [AppComponent]
})
export class AppModule { }
