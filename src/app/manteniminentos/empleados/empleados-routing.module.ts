import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadosListComponent } from './list/empleados-list.component';
import { EmployeeResolver } from 'src/app/core/resolvers/employee.resolver';


const routes: Routes = [
  {path: '', component: EmpleadosListComponent, resolve: {employee: EmployeeResolver }}
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

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class EmpleadoRoutingModule { }
