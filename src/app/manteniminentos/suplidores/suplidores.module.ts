import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuplidoresListComponent } from './list/suplidores-list.component';
import { MaterialModule } from 'src/app/material/material.module';
import { SuplidoresRoutingModule } from './suplidores-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SupplierComponent } from './add/supplier/supplier.component';



@NgModule({
  declarations: [SuplidoresListComponent, SupplierComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SuplidoresRoutingModule,
    ReactiveFormsModule
  ]
})
export class SuplidoresModule { }
