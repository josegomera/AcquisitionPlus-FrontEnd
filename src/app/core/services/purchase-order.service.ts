import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class PurchaseOrderService {
  constructor(private http: HttpClient) {}

  getPurchaseOrders() {
    return this.http.get(`${environment.api}/PurchaseOrders`);
  }

  getPurchaseOrderById(id) {
    return this.http.get(`${environment.api}/PurchaseOrders/${id}`);
  }

  addPurchaseOrders(payload) {
    return this.http.post(`${environment.api}/PurchaseOrders`, payload);
  }

  syncAccount(payload) {
    return this.http.post(`${environment.api}/PurchaseOrders/Contabilize/`, payload);
  }

  updatePurchaseOrders(payload) {
    return this.http.put(`${environment.api}/PurchaseOrders`, payload);
  }
}
