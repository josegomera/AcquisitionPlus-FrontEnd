import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get(`${environment.api}/Employees`);
  }

  getListEmployees() {
    return this.http.get(`${environment.api}/Employees/GetEmployees`);
  }
}
