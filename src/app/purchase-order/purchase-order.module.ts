import { NgModule } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";
import { PurchaseOrderListComponent } from "./list/purchase-order-list.component";
import { MaterialModule } from "../material/material.module";
import { PurchaseOrderRoutingModule } from "./purchase-order-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PurchaceOrderAddComponent } from "./add/purchace-order-add.component";
import { NgxMaskModule } from "ngx-mask";
import { NgSelectModule } from "@ng-select/ng-select";


@NgModule({
  declarations: [PurchaseOrderListComponent, PurchaceOrderAddComponent],
  imports: [
    CommonModule,
    MaterialModule,
    PurchaseOrderRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    NgSelectModule
  ],
  providers: [DatePipe],
})
export class PurchaseOrderModule {}
