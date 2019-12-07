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

  getSuppliersById(id) {
    return this.http.get(`${environment.api}/Suppliers/${id}`);
  }

  addSupplier(payload) {
    return this.http.post(`${environment.api}/Suppliers`, payload);
  }

  updatesupplier(payload) {
    return this.http.put(`${environment.api}/Suppliers`, payload);
  }

  getCedulaByNumber(payload) {
    return this.http.get(`https://previseguros-beta.azurewebsites.net/api/Clientes/GetByNoIdentificacion/${payload}`);
  }
  getRNCByNumber(payload) {
    return this.http.post(`https://previseguros-beta.azurewebsites.net/api/Empresa/GetByRnc/${payload}`, '');
  }
}
