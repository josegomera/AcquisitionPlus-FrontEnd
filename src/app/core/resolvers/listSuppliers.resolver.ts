import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { ActivatedRouteSnapshot } from '@angular/router';
import { SupplierService } from '../services/supplier.service';


@Injectable({providedIn: 'root'})
export class ListSupplierResolver implements Resolve<any> {
  constructor(private supplier: SupplierService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.supplier.getListSuppliers();
  }
}
