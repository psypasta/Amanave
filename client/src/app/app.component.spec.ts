import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TestPageComponent } from './test-page/test-page.component';
import { SignUpComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { UserListComponent } from './user-list/user-list.component';
import { CategoryComponent } from './category/category.component';
import { OrdersComponent } from './orders/orders.component';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ProductService } from './service/product.service';
import { OrderService } from './service/order.service';
import { TokenInterceptor } from './token-interceptor';
import { APP_BASE_HREF } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
      ],
      imports: [
        BrowserModule,
        HttpClientModule,
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        RouterTestingModule
      ],
      providers: [{provide: APP_BASE_HREF, useValue: '/' }, ProductService, OrderService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptor,
          multi: true
        }
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    // expect(compiled.querySelector('h1').textContent).toContain('Welcome to client!');
  }));
});
