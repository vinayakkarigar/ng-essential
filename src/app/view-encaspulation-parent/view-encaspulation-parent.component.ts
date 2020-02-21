import { Component, OnInit, ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'app-view-encaspulation-parent',
  template: `<div>
                  <h1>{{title}}</h1>
              <div>
              <app-view-encapsulation-child></app-view-encapsulation-child>`,
  styleUrls: ['./view-encaspulation-parent.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ViewEncaspulationParentComponent implements OnInit {

  title = 'I am view encapsulation parent';
  constructor() { }

  ngOnInit(): void {
  }

}
