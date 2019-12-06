import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { ActivatedRoute, Router } from "@angular/router";
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";
import { FormControl, FormGroup } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { filter } from "rxjs/operators";
import { PurchaseOrderService } from 'src/app/core/services/purchase-order.service';

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
  amount: number = 0;


  constructor(private actRoute: ActivatedRoute,
    private purchase: PurchaseOrderService,
    private router : Router
    ) {}

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.actRoute.data.subscribe(data => {
      this.dataSource = new MatTableDataSource(data.purchase);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

      this.dataSource.filterPredicate = (data, filter) => {
        if (this.fromDate && this.toDate) {
          this.pipe = new DatePipe("en");
          let orderDate = this.pipe.transform(data.orderDate, "yyyy-MM-dd");
          let fromDateInternal = this.pipe.transform(this.fromDate, "yyyy-MM-dd");
          let toDateInternal = this.pipe.transform(this.toDate, "yyyy-MM-dd");
          let Isinterval = orderDate >= fromDateInternal && orderDate <= toDateInternal;
      
          return Isinterval ;
        }
        return true;
      };     
    }); 
  }

  filterForm = new FormGroup({
    fromDate: new FormControl(),
    toDate: new FormControl()
  });

  syncForm = new FormGroup({
    total: new FormControl(),
    description: new FormControl()
  });

  syncAccounting(){
    let amount = +this.amount;
    let description = this.syncForm.get("description").value;
    let purchaseOrders = this.dataSource.filteredData;

    let asiento = {
      description,
      amount,
      purchaseOrders
    }
    console.log(asiento);

    this.purchase.syncAccount(asiento).subscribe(data => { 
      console.log(data);
      this.router.navigate([this.router.url]);
    }, (error) => {
      console.log(error);
    });

    this.syncForm.reset();

  }

  get fromDate() {
    return this.filterForm.get("fromDate").value;
  }
  get toDate() {
    return this.filterForm.get("toDate").value;
  }

  applyFilter() {
    this.amount = 0;
    this.dataSource.filter = "" + Math.random();
     for (let d of this.dataSource.filteredData) {
       this.amount += d.total;     };
     this.syncForm.setValue({ total: this.amount, description: "" });
    this.filterForm.reset();
  }
}
