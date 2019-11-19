import { Component, OnInit, ViewChild } from "@angular/core";
import { UnitMeasureService } from "src/app/core/services/unit-measure.service";
import { ActivatedRoute } from "@angular/router";
import { MatTableDataSource } from "@angular/material/table";

import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: "app-unidades-medidas-list",
  templateUrl: "./unidades-medidas-list.component.html",
  styleUrls: ["./unidades-medidas-list.component.css"]
})
export class UnidadesMedidasListComponent implements OnInit {
  displayedColumns: string[] = [
    "number",
    "description",
    "creationDate",
    "accion"
  ];
  dataSource = new MatTableDataSource([]);
  constructor(private actRoute: ActivatedRoute) {}

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.actRoute.data.subscribe(data => {
      this.dataSource = new MatTableDataSource(data.units);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
