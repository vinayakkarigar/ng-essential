import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  message = 'I am child';

  sayChildHello(){
    console.log('I am clicked in the child component');
  }

  ngOnInit(): void {
  }

}
