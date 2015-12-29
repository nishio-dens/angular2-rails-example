import {ViewEncapsulation, Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {ProductService} from '../../services';
import {Product} from '../../models';

const templateUrl = require('./products.html');

@Component({
  moduleId: module.id,
  templateUrl: templateUrl,
  directives: [
    CORE_DIRECTIVES
  ],
  providers: [
    ProductService
  ]
})

export class ProductsComponent {
  products: Product[];
  totalCount: number = 0;

  constructor(private _productService: ProductService) {
    this.getProducts();
  }

  getProducts() {
    this._productService
      .fetch()
      .subscribe(d => {
        this.products = d.results;
        this.totalCount = d.totalCount;
      });
  }
}
