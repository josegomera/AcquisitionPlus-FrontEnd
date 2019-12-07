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
      amount: [{ disabled: true, value: null }, Validators.required],
      unitCost: [{ disabled: true, value: null }],
      idEmployee: [null, [Validators.required]],
      idProduct: [null, [Validators.required]],
      total: [{ disabled: true, value: null }]
    });
    this.actRoute.data.subscribe(data => {
      this.listEmployee = data.listEmployee;
      this.listProduct = data.listProduct;
    });

    console.log(this.listProduct);

    this.setUnitCost();

    this.id = this.actRoute.snapshot.params.id;
    if (this.id != 0) {
      this.buttonNameDisplay = "Update";
      this.purchase.getPurchaseOrderById(this.id).subscribe(data => {
        console.log(data);
        this.purchaseOrderEdit = data;
        this.puchaseOrderForm.patchValue(data);
        this.totalCalculation();
      });
    }

    this.puchaseOrderForm.get('amount').valueChanges.subscribe((value) => {
      let productId = this.puchaseOrderForm.get('idProduct').value;
      let product = this.listProduct.find(p => p.id == productId);

      if(product && value > product.stock){
        this.puchaseOrderForm.get('amount').setValue('');
      }

    })

  this.puchaseOrderForm.get('idProduct').valueChanges.subscribe((value) => {
    if(value == null){
      this.puchaseOrderForm.get('amount').setValue('');
      this.puchaseOrderForm.get('amount').disable();
    }else{
      this.puchaseOrderForm.get('amount').enable();
    }
  });
  }

  setUnitCost(){
    this.puchaseOrderForm.get('idProduct').valueChanges.subscribe((idProducto) => {
      let currentProduct = this.listProduct.find((product) => {
        return product.id == idProducto;
      });

      if(currentProduct){
        this.puchaseOrderForm.patchValue({'unitCost': currentProduct.unitCost});
      }else {
        this.puchaseOrderForm.patchValue({'unitCost': 0});
      }
    });
  }

  save() {
    let result$ = new Observable();
    if (this.id == 0) {
      result$ = this.purchase.addPurchaseOrders(this.puchaseOrderForm.getRawValue());
    } else {
      var purchaseOrderToUpdate = {
        ...this.purchaseOrderEdit,
        ...this.puchaseOrderForm.getRawValue()
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
