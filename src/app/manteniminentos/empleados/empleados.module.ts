import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { EmpleadosListComponent } from './list/empleados-list.component';
import { EmpleadoRoutingModule } from './empleados-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [EmpleadosListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    EmpleadoRoutingModule,
    ReactiveFormsModule
  ]
})
export class EmpleadosModule { }
