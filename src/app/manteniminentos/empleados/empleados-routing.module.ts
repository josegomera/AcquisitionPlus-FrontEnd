import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadosListComponent } from './list/empleados-list.component';
import { EmployeeResolver } from 'src/app/core/resolvers/employee.resolver';
import { AddEmpleadosComponent } from './add/add-empleados.component';
import { EmployeeDataResolver } from 'src/app/core/resolvers/employee-data.resolver';


const routes: Routes = [
  {path: '', component: EmpleadosListComponent, resolve: {employee: EmployeeResolver }},
  {path: 'add', component: AddEmpleadosComponent},
  {path: 'edit/:id', component: AddEmpleadosComponent, resolve : {employee : EmployeeDataResolver}}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(
     routes
    )
  ],
  exports: [RouterModule]
})

export class EmpleadoRoutingModule { }
