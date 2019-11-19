import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UnitMeasureService } from 'src/app/core/services/unit-measure.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-unidades-medidas-add',
  templateUrl: './unidades-medidas-add.component.html',
  styleUrls: ['./unidades-medidas-add.component.css']
})
export class UnidadesMedidasAddComponent implements OnInit {
  unitMeasureForm: FormGroup;
  constructor(private fb: FormBuilder, private unitOfMeasureService : UnitMeasureService, 
    private router : Router, private actRoute : ActivatedRoute) { }

  ngOnInit() {
    this.unitMeasureForm = this.fb.group({
      'Description' : [null, [Validators.required]]
    });
  }

  save(){
    this.unitOfMeasureService.addUnitOfMeasure(this.unitMeasureForm.value).subscribe((data) => {
    this.router.navigate(['../'], {relativeTo: this.actRoute});
    });
  }

}
