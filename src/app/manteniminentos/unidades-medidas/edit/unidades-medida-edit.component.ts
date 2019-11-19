import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UnitMeasureService } from 'src/app/core/services/unit-measure.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-unidades-medida-edit',
  templateUrl: './unidades-medida-edit.component.html',
  styleUrls: ['./unidades-medida-edit.component.css']
})
export class UnidadesMedidaEditComponent implements OnInit {
  unitMeasureForm: FormGroup;
  unitOfMeasureToEdit;
  constructor(private fb: FormBuilder, private unitOfMeasureService : UnitMeasureService, 
    private router : Router, private actRoute : ActivatedRoute) { }

  ngOnInit() {

    this.actRoute.data.subscribe((data) => {
     this.unitOfMeasureToEdit = data.unit;
    })

    this.unitMeasureForm = this.fb.group({
      'description' : [null, [Validators.required]],
      'status': [null, [Validators.required]]
    });

    this.unitMeasureForm.patchValue({...this.unitOfMeasureToEdit});
  }

  save(){
    let unitToBeEdit = {...this.unitOfMeasureToEdit, ...this.unitMeasureForm.value};
    this.unitOfMeasureService.updateUnitMeasure(unitToBeEdit).subscribe((data) => {
      this.router.navigate(['../../'], {relativeTo: this.actRoute});
    });
  
  }

}
