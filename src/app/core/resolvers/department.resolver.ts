import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { ActivatedRouteSnapshot } from '@angular/router';
import { DepartmentService } from '../services/department.service';


@Injectable({providedIn: 'root'})
export class DepartmentResolver implements Resolve<any> {
  constructor(private department: DepartmentService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.department.getDepartments();
  }
}