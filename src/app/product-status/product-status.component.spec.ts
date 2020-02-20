import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductStatusComponent } from './product-status.component';

describe('ProductStatusComponent', () => {
  let component: ProductStatusComponent;
  let fixture: ComponentFixture<ProductStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
