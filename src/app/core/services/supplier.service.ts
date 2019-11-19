import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class SupplierService {
  constructor(private http: HttpClient) {}

  getSuppliers() {
    return this.http.get(`${environment.api}/Suppliers`);
  }

  getListSuppliers() {
    return this.http.get(`${environment.api}/Suppliers/GetSuppliers`);
  }
}
