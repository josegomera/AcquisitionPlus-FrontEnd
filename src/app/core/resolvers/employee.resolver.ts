import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { ActivatedRouteSnapshot } from '@angular/router';
import { EmployeeService } from '../services/employee.service';


@Injectable({providedIn: 'root'})
export class EmployeeResolver implements Resolve<any> {
  constructor(private employee: EmployeeService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.employee.getEmployees();
  }
}