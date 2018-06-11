import { Injectable } from '@angular/core';
import {MainpageComponent} from "./mainpage/mainpage.component";
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class MainpageServiceService {

  private mainpageurl = 'api/mainpage';

  constructor(private mainpage: MainpageComponent) { }

}
