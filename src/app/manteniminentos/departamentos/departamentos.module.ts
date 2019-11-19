import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { DepartamentosRoutingModule } from './departamentos-routing.module';
import { DepartamentosListComponent } from './list/departamentos-list/departamentos-list.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [DepartamentosListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    DepartamentosRoutingModule,
    ReactiveFormsModule
  ]
})
export class DepartamentosModule { }
