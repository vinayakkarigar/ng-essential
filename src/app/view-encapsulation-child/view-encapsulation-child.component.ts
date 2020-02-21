import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation-child',
  template: `<h1>{{title}}<h1>`,
  styleUrls: ['./view-encapsulation-child.component.css']
})
export class ViewEncapsulationChildComponent implements OnInit {

  title = '!!!!! I am child for view encapsulation !!!!!'
  constructor() { }

  ngOnInit(): void {
  }

}
