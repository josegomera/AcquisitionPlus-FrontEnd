import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { PurchaseOrderService } from "src/app/core/services/purchase-order.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-purchace-order-add",
  templateUrl: "./purchace-order-add.component.html",
  styleUrls: ["./purchace-order-add.component.css"]
})
export class PurchaceOrderAddComponent implements OnInit {
  puchaseOrderForm: FormGroup;
  listEmployee: any;
  listProduct: any;
  buttonNameDisplay: string = "Save";
  id: number;
  purchaseOrderEdit;
  constructor(
    private fb: FormBuilder,
    private purchase: PurchaseOrderService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.puchaseOrderForm = this.fb.group({
      amount: [null, [Validators.required]],
      unitCost: [null, [Validators.required]],
      idEmployee: [null, [Validators.required]],
      idProduct: [null, [Validators.required]],
      total: [{ disabled: true, value: null }]
    });
    this.actRoute.data.subscribe(data => {
      this.listEmployee = data.listEmployee;
      this.listProduct = data.listProduct;
    });

    this.id = this.actRoute.snapshot.params.id;
    if (this.id != 0) {
      this.buttonNameDisplay = "Update";
      this.purchase.getPurchaseOrderById(this.id).subscribe(data => {
        this.purchaseOrderEdit = data;
        this.puchaseOrderForm.patchValue(data);
        this.totalCalculation();
      });
    }
  }

  save() {
    let result$ = new Observable();
    if (this.id == 0) {
      result$ = this.purchase.addPurchaseOrders(this.puchaseOrderForm.value);
    } else {
      var purchaseOrderToUpdate = {
        ...this.purchaseOrderEdit,
        ...this.puchaseOrderForm.value
      };
      result$ = this.purchase.updatePurchaseOrders(purchaseOrderToUpdate);
    }

    result$.subscribe(
      data => {
        this.router.navigate(["../../"], { relativeTo: this.actRoute });
      },
      error => console.log(error)
    );
  }

  totalCalculation() {
    let amount = this.puchaseOrderForm.get("amount");
    let unitCost = this.puchaseOrderForm.get("unitCost");
    let total = +amount.value * +unitCost.value;
    this.puchaseOrderForm.get("total").setValue(total);
  }

  
}
