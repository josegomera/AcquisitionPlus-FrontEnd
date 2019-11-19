import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { ActivatedRouteSnapshot } from '@angular/router';
import { PurchaseOrderService } from '../services/purchase-order.service';


@Injectable({providedIn: 'root'})
export class PurchaseOrderResolver implements Resolve<any> {
  constructor(private purchase: PurchaseOrderService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.purchase.getPurchaseOrders();
  }
}