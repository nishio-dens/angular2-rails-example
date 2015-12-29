import {Injectable} from 'angular2/core';
import {HTTP_PROVIDERS, Http, Request, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {Product} from '../models';

@Injectable()
export class ProductService {
  constructor(private _http: Http) {
  }

  fetch() {
    return this._http
      .get('/api/products')
      .map(r => r.json())
      .map(r => {
        let results: Array<Product> = [];
        if (r.results) {
          results = r.results.map((v: any) => new Product(v));
        }
        return { totalCount: r.totalCount, results: results };
      });
  }
}
