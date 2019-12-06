import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-productos-add',
  templateUrl: './productos-add.component.html',
  styleUrls: ['./productos-add.component.css']
})
export class ProductosAddComponent implements OnInit {
  productForm: FormGroup;
  listSupplier;
  listUnit;
  buttonNameDisplay: string = "Save";
  productOrderEdit;
  id: number;
  constructor(
    private product: ProductService,
    private fb: FormBuilder,
    private router: Router,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.productForm = this.fb.group({
      brand: [null, [Validators.required]],
      description: [null, [Validators.required]],
      unitCost: [null, [Validators.required]],
      stock: [null, [Validators.required]],
      idSupplier: [null, [Validators.required]],
      idUnitOfMeasurement: [null, [Validators.required]]
    });
    

    this.actRoute.data.subscribe(data => {
      this.listSupplier = data.listSupplier;
      this.listUnit = data.listUnit;
    });

    this.id = this.actRoute.snapshot.params.id;
    if (this.id != 0) {
      this.buttonNameDisplay = "Update";
      this.product.getProductById(this.id).subscribe(data => {
        this.productOrderEdit = data;
        this.productForm.patchValue(data);
      });
    }
  }

  save() {
    let result$ = new Observable();
    if (this.id == 0) {
      result$ = this.product.addProduct(this.productForm.value);
    } else {
      var productToUpdate = {
        ...this.productOrderEdit,
        ...this.productForm.value
      };
      result$ = this.product.UpdateProduct(productToUpdate);
    }

    result$.subscribe(
      data => {
        this.router.navigate(["../../"], { relativeTo: this.actRoute });
      },
      error => console.log(error)
    );
  }


}
