import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { ActivatedRouteSnapshot } from '@angular/router';
import { UnitMeasureService } from '../services/unit-measure.service';

@Injectable({providedIn: 'root'})
export class DataUnitOfMeasureResolver implements Resolve<any> {
  constructor(private unitOfMeasure: UnitMeasureService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.unitOfMeasure.getUnitOfMeasure(route.params.id);
  }
}