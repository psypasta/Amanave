import { CommonModule } from '@angular/common';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";

import {TestPageComponent} from "./test-page/test-page.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'test', component: AppComponent },
  { path: 'dashboard', component: TestPageComponent },
  { path: 'login', component: LoginComponent},
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
