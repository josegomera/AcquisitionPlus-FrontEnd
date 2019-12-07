import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { EmpleadosListComponent } from './list/empleados-list.component';
import { EmpleadoRoutingModule } from './empleados-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEmpleadosComponent } from './add/add-empleados.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [EmpleadosListComponent, AddEmpleadosComponent],
  imports: [
    CommonModule,
    MaterialModule,
    EmpleadoRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgxMaskModule.forRoot(),
  ],
})
export class EmpleadosModule { }
