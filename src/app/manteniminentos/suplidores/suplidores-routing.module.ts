import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuplidoresListComponent } from './list/suplidores-list.component';
import { Routes, RouterModule } from '@angular/router';
import { SupplierResolver } from 'src/app/core/resolvers/supplier.resolver';
import { SupplierComponent } from './add/supplier/supplier.component';

const routes: Routes = [
  {path: '', component: SuplidoresListComponent, resolve: {supplier: SupplierResolver }},
  {path: 'add/:id', component: SupplierComponent}
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

export class SuplidoresRoutingModule { }
