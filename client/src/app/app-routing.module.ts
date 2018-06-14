import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignUpComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { TestPageComponent } from './test-page/test-page.component';
import { AppComponent } from './app.component';
import {UserListComponent} from './user-list/user-list.component';
import {ProductPageComponent} from './product-page/product-page.component';
import {CategoryComponent} from './category/category.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'test', component: AppComponent },
  { path: 'dashboard', component: TestPageComponent },
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'usersList', component: UserListComponent},
  { path: 'products', component: ProductPageComponent},
  { path: 'category', component: CategoryComponent}
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
