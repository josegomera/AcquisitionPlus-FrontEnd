import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { ActivatedRouteSnapshot } from '@angular/router';
import { ProductService } from '../services/product.service';


@Injectable({ providedIn: 'root' })
export class ProductResolver implements Resolve<any> {
    constructor(private product: ProductService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.product.getProducts();
    }
}