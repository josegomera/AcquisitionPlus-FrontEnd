import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierService } from 'src/app/core/services/supplier.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  suplidoresForm: FormGroup;
  id: number;
  buttonNameDisplay: string = "Save";
  supplierEdit;
  types: any[] = [
    {id: 1, type: "Cedula"},
    {id: 2, type: "RNC"}
  ];

  constructor(private fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private supplier: SupplierService,
    private router: Router,) { }

  ngOnInit() {
    this.suplidoresForm = this.fb.group({
      identificationType:[null, [Validators.required]],
      identification: [null, [Validators.required]],
      name: [null, [Validators.required]],
    });

    this.id = this.actRoute.snapshot.params.id;
    if (this.id != 0) {
      this.buttonNameDisplay = "Update";

      this.supplier.getSuppliersById(this.id).subscribe(data => {
        console.log(data);
        this.supplierEdit = data;
        this.suplidoresForm.patchValue(data);
      });
    }
  }

  save() {
    let result$ = new Observable();
    if (this.id == 0) {
      result$ = this.supplier.addSupplier(this.suplidoresForm.getRawValue());
    } else {
      var supplierToUpdate = {
        ...this.supplierEdit,
        ...this.suplidoresForm.getRawValue()
      };
      result$ = this.supplier.updatesupplier(supplierToUpdate);
    }

    result$.subscribe(
      data => {
        this.router.navigate(["../../"], { relativeTo: this.actRoute });
      },
      error => console.log(error)
    );
  }

  getCedulaFromPadron(){
    var cedula = this.suplidoresForm.get("identification").value;

    if(cedula){
      this.supplier.getCedulaByNumber(cedula).subscribe((data) => {
        console.log(data);
      },
      (err) => { console.log(err) }
      );
    }
  }

}
