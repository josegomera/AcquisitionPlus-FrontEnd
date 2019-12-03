import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { ActivatedRoute } from "@angular/router";
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";
import { FormControl, FormGroup } from "@angular/forms";
import { DatePipe } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: "app-purchase-order-list",
  templateUrl: "./purchase-order-list.component.html",
  styleUrls: ["./purchase-order-list.component.css"]
})
export class PurchaseOrderListComponent implements OnInit {
  displayedColumns: string[] = [
    "orderNumber",
    "amount",
    "orderDate",
    "unitCost",
    "total",
    "accion"
  ];
  dataSource = new MatTableDataSource([]);
  pipe: DatePipe;

  constructor(private actRoute: ActivatedRoute) {  }

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.actRoute.data.subscribe(data => {
      this.dataSource = new MatTableDataSource(data.purchase);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.dataSource.filterPredicate = (data, filter) => {
        if (this.fromDate && this.toDate) {
          let orderDate = new Date(data.orderDate);
          return orderDate >= this.fromDate && orderDate <= this.toDate;
        }
        return true;
      }
    });
  }

  filterForm = new FormGroup({
    fromDate: new FormControl(),
    toDate: new FormControl()
  });

  get fromDate() {
    return this.filterForm.get("fromDate").value;
  }
  get toDate() {
    return this.filterForm.get("toDate").value;
  }

  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue;
  // }

  applyFilter() {
    this.dataSource.filter = '' + Math.random();
    this.filterForm.reset();
  }
}
