import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  constructor() { }

  names: any[];
  getNames() {
    return [{ name: 'vinayak karigar' },
    { name: 'rachana bekkinkeri' },
    { name: 'geeta karigar' },
    { name: 'samarth amit karigar' },
    { name: 'swarnika amit karigar' }
    ];
  }
  ngOnInit(): void {
    this.names = this.getNames();
  }

}
