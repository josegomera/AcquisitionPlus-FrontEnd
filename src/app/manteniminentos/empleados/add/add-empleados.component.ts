import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UnitMeasureService } from 'src/app/core/services/unit-measure.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DepartmentService } from 'src/app/core/services/department.service';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-add-empleados',
  templateUrl: './add-empleados.component.html',
  styleUrls: ['./add-empleados.component.css']
})
export class AddEmpleadosComponent implements OnInit {
  empleadosForm: FormGroup;
  departments  = [];
  employee;
  constructor(private fb: FormBuilder, private employeeService : EmployeeService, 
    private router : Router, private actRoute : ActivatedRoute, private departmentService : DepartmentService) { }

  ngOnInit() {

    this.employee =this.actRoute.snapshot.data.employee;

    this.empleadosForm = this.fb.group({
      'name' : [null, [Validators.required]],
      'lastName' : [null, [Validators.required]],
      'identificationNumber' : [null, [Validators.required]],
      'telephoneNumber' : [null, [Validators.required]],
      'position' : [null, [Validators.required]],
      'idDepartment': [null, [Validators.required]]
    });



    this.departmentService.getDepartments().subscribe((data : [] ) => {
 
    this.departments = data.map((deps : any) => {
      return {id: deps.id, text : deps.name};
    });

    });

    if(this.employee){
      this.empleadosForm.patchValue(this.employee);
    }
  }

  save(){

    let observer = new Observable();
    if(this.employee){
      let employeeUpdated = {...this.employee, ...this.empleadosForm.value};
      observer = this.employeeService.update(employeeUpdated);
    } else {
      observer = this.employeeService.add(this.empleadosForm.value);
    }
    observer.subscribe((data) => {
     this.onQuit();
    });

  }

  onQuit(){
    if(this.employee){
      this.router.navigate(['../../'], {relativeTo: this.actRoute});
    } else {
      this.router.navigate(['../'], {relativeTo: this.actRoute});

    }
  }

}
