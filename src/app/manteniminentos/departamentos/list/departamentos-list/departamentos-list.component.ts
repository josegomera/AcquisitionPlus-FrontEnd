import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-departamentos-list',
  templateUrl: './departamentos-list.component.html',
  styleUrls: ['./departamentos-list.component.css']
})
export class DepartamentosListComponent implements OnInit {
  displayedColumns: string[] = ['number','name','creationDate','accion'];
  dataSource = new MatTableDataSource([]);
  constructor(private actRoute : ActivatedRoute) { }

  ngOnInit() {
    this.actRoute.data.subscribe((data) => {
      this.dataSource = new MatTableDataSource(data.department);
     })
  }
  

}
