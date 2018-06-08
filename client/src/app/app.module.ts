import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { TestPageComponent } from './test-page/test-page.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import {MainpageComponent} from "./mainpage/mainpage.component";


@NgModule({
  declarations: [
    AppComponent,
    TestPageComponent,
    MainpageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent, MainpageComponent]
})
export class AppModule { }
