import {Component, OnInit} from 'angular2/core';
import {
FORM_DIRECTIVES,
CORE_DIRECTIVES,
FormBuilder,
ControlGroup,
Validators
} from 'angular2/common';
import {RouteParams, Router} from 'angular2/router';
import {ProductFormComponent} from '../../components';
import {ProductService} from '../../services';
import {Product} from '../../models';

const templateUrl = require('./product_create.html');

@Component({
  moduleId: module.id,
  templateUrl: templateUrl,
  directives: [
    CORE_DIRECTIVES,
    FORM_DIRECTIVES,
    ProductFormComponent
  ],
  providers: [
    ProductService
  ]
})

export class ProductCreateComponent {
  form: ControlGroup;
  product: Product = new Product({});

  constructor(
    private _router: Router,
    private _routeParams: RouteParams,
    private _productService: ProductService,
    fb: FormBuilder) {
    this.form = fb.group({
      'name': ['', Validators.required],
      'price': ['', Validators.required]
    });
  }

  onSubmit(): void {
    this._productService
      .create(this.product)
      .subscribe(_ => {
        this._router.navigate(['Products']);
      });
  }
}
