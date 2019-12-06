import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseOrderListComponent } from './list/purchase-order-list.component';
import { PurchaseOrderResolver } from '../core/resolvers/purchaseorder.resolver';
import { PurchaceOrderAddComponent } from './add/purchace-order-add.component';
import { ListEmployeeResolver } from '../core/resolvers/listEmployees.resolver';
import { ListProductResolver } from '../core/resolvers/listProducts.resolver';


const routes: Routes = [
  {path: '', component: PurchaseOrderListComponent, resolve: {purchase: PurchaseOrderResolver }
  , runGuardsAndResolvers: 'always'},
  {path: 'add/:id', component: PurchaceOrderAddComponent, resolve: {listEmployee: ListEmployeeResolver, listProduct: ListProductResolver }}
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
export class PurchaseOrderRoutingModule { }
