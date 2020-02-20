import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  title: string;
  products: any[];

  constructor() { }

  getProduct(){
    return [
      {id: '1', description: 'mobile', price: '10000', quantity: 10},
      {id: '2', description: 'charger', price: '2000', quantity: 20},
      {id: '3', description: 'powerbank', price: '5000', quantity: 30},
      {id: '4', description: 'cover', price: '2000', quantity: 40},
      {id: '5', description: 'screengaurd', price: '60', quantity: 50},
    ];
  }

  ngOnInit(): void {
    this.title = 'Product List';
    this.products = this.getProduct();
  }

  changeQty(p){
    const qtyToUpdate = this.products.find(this.findProduct, [p.id]);
    qtyToUpdate.quantity += p.updatedQtyvalue;

  }

  findProduct(p){
    return p.id === this[0];
  }

}
