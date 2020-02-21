import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEncapsulationChildComponent } from './view-encapsulation-child.component';

describe('ViewEncapsulationChildComponent', () => {
  let component: ViewEncapsulationChildComponent;
  let fixture: ComponentFixture<ViewEncapsulationChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEncapsulationChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEncapsulationChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
