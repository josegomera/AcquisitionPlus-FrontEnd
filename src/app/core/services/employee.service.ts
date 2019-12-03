import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get(`${environment.api}/Employees`);
  }

  getEmploye(gui) {
    return this.http.get(`${environment.api}/Employees/${gui}`);
  }

  getListEmployees() {
    return this.http.get(`${environment.api}/Employees/GetEmployees`);
  }

  add(employee) {
    return this.http.post(`${environment.api}/Employees`, employee);
  }
  
  update(employee) {
    return this.http.put(`${environment.api}/Employees`, employee);
  }
}
