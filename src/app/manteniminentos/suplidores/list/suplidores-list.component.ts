import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-suplidores-list',
  templateUrl: './suplidores-list.component.html',
  styleUrls: ['./suplidores-list.component.css']
})
export class SuplidoresListComponent implements OnInit {
  displayedColumns: string[] = ['number','identification_Rnc','name','creationDate','accion'];
  dataSource = new MatTableDataSource([]);
  constructor(private actRoute : ActivatedRoute) { }

  ngOnInit() {
    this.actRoute.data.subscribe((data) => {
      console.log(data);
      this.dataSource = new MatTableDataSource(data.supplier);
     })
     
  }

}
