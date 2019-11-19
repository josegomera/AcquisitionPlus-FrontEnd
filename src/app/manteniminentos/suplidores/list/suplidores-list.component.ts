import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { ActivatedRoute } from "@angular/router";
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: "app-suplidores-list",
  templateUrl: "./suplidores-list.component.html",
  styleUrls: ["./suplidores-list.component.css"]
})
export class SuplidoresListComponent implements OnInit {
  displayedColumns: string[] = [
    "number",
    "identification_Rnc",
    "name",
    "creationDate",
    "accion"
  ];
  dataSource = new MatTableDataSource([]);
  constructor(private actRoute: ActivatedRoute) {}

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.actRoute.data.subscribe(data => {
      console.log(data);
      this.dataSource = new MatTableDataSource(data.supplier);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
