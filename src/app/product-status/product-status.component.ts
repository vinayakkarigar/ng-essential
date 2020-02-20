import { Component, OnInit, OnChanges, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-status',
  templateUrl: './product-status.component.html',
  styleUrls: ['./product-status.component.css']
})
export class ProductStatusComponent implements OnChanges {

  updatedQtyvalue: number;
  @Input() productId: number;
  @Input() qty: number;
  @Output() qtyChange = new EventEmitter();

  color = '';
  constructor() { }

  qtyChanged() {
    console.log('Qty value changed !');
    this.qtyChange.emit({id: this.productId, updatedQtyvalue: this.updatedQtyvalue});
    this.updatedQtyvalue = null;
  }


  ngOnChanges(): void {
    if (this.qty > 20) {
      this.color = 'green';
    } else {
      this.color = 'red';
    }

  }

}
