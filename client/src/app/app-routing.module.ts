import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {MainpageComponent} from "./mainpage/mainpage.component";


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'home', component: MainpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})

export class AppRoutingModule { }
