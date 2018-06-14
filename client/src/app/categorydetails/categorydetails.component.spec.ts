import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorydetailsComponent } from './categorydetails.component';

describe('CategorydetailsComponent', () => {
  let component: CategorydetailsComponent;
  let fixture: ComponentFixture<CategorydetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorydetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
