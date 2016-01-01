import {Component, OnInit} from 'angular2/core';
import {FORM_DIRECTIVES, CORE_DIRECTIVES, NgForm} from 'angular2/common';
import {RouteParams, Router} from 'angular2/router';
import {ProductService} from '../../services';
import {Product} from '../../models';

const templateUrl = require('./product_detail.html');

@Component({
  moduleId: module.id,
  templateUrl: templateUrl,
  directives: [
    CORE_DIRECTIVES,
    FORM_DIRECTIVES
  ],
  providers: [
    ProductService
  ]
})

export class ProductDetailComponent implements OnInit {
  id: string;
  product: Product = new Product({});

  constructor(
    private _router: Router,
    private _routeParams: RouteParams,
    private _productService: ProductService) {
  }

  ngOnInit() {
    this.id = this._routeParams.get('id');
    this._productService
      .fetch(this.id)
      .subscribe(r => this.product = r);
  }

  onSubmit(form: NgForm) {
    console.log('submit ' + JSON.stringify(form.value));
  }
}
