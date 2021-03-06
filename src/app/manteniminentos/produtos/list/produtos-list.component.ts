import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { ActivatedRoute } from "@angular/router";
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: "app-produtos-list",
  templateUrl: "./produtos-list.component.html",
  styleUrls: ["./produtos-list.component.css"]
})
export class ProdutosListComponent implements OnInit {
  displayedColumns: string[] = [
    "number",
    "description",
    "brand",
    "unitCost",
    "stock",
    "creationDate",
    "Action"
  ];
  dataSource = new MatTableDataSource([]);
  constructor(private actRoute: ActivatedRoute) {}

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.actRoute.data.subscribe(data => {
      this.dataSource = new MatTableDataSource(data.product);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
