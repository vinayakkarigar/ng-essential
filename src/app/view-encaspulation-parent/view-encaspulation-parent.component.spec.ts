import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEncaspulationParentComponent } from './view-encaspulation-parent.component';

describe('ViewEncaspulationParentComponent', () => {
  let component: ViewEncaspulationParentComponent;
  let fixture: ComponentFixture<ViewEncaspulationParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEncaspulationParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEncaspulationParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
