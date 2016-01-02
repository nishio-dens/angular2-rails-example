import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, CORE_DIRECTIVES, ControlGroup} from 'angular2/common';
import {Product} from '../../models';

const templateUrl = require('./product_form.html');

@Component({
  moduleId: module.id,
  selector: 'product-form',
  inputs: ['product', 'form'],
  templateUrl: templateUrl,
  directives: [
    FORM_DIRECTIVES,
    CORE_DIRECTIVES
  ]
})

export class ProductFormComponent {
  product: Product;
  form: ControlGroup;
}
