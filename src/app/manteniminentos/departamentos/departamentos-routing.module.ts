import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DepartamentosListComponent } from './list/departamentos-list/departamentos-list.component';
import { DepartmentResolver } from 'src/app/core/resolvers/department.resolver';

const routes: Routes = [
  {path: '', component: DepartamentosListComponent, resolve: {department: DepartmentResolver }}
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

export class DepartamentosRoutingModule { }
