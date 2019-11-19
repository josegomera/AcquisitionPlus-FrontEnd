import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empleados-list',
  templateUrl: './empleados-list.component.html',
  styleUrls: ['./empleados-list.component.css']
})
export class EmpleadosListComponent implements OnInit {
  displayedColumns: string[] = ['number', 'name', 'lastname', 'identificationNumber', 'telefone', 'position', 'creationDate', 'accion'];
  dataSource = new MatTableDataSource([]);
  constructor(private actRoute : ActivatedRoute) { }

  ngOnInit() {
    this.actRoute.data.subscribe((data) => {
      this.dataSource = new MatTableDataSource(data.employee);
     })
  }

}


