/// <reference path="../../typings/tsd.d.ts" />

import {ViewEncapsulation, Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {ROUTER_DIRECTIVES, Router, RouteConfig, Location, Instruction} from 'angular2/router';

import {HelloComponent, ProductsComponent} from './components';
import {ProductService} from './services';

const templateUrl = require('./app.html');

@Component({
  moduleId: module.id,
  selector: 'app',
  encapsulation: ViewEncapsulation.Emulated,
  templateUrl: templateUrl,
  directives: [
    CORE_DIRECTIVES,
    ROUTER_DIRECTIVES
  ]
})

@RouteConfig([
  {path: '/', name: 'Hello', component: HelloComponent},
  {path: '/products', name: 'Products', component: ProductsComponent}
])

export class App {

  router: Router;
  location: Location;

  constructor(router: Router, location: Location) {
    this.router = router;
    this.location = location;
  }
}
