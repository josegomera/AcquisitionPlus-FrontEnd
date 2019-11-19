import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuplidoresListComponent } from './list/suplidores-list.component';
import { Routes, RouterModule } from '@angular/router';
import { SupplierResolver } from 'src/app/core/resolvers/supplier.resolver';

const routes: Routes = [
  {path: '', component: SuplidoresListComponent, resolve: {supplier: SupplierResolver }}
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
export class SuplidoresRoutingModule { }
