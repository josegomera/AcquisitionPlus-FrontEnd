import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.css']
})
export class ProdutosListComponent implements OnInit {
  displayedColumns: string[] = ['number','description','brand','stock','creationDate','accion'];
  dataSource = new MatTableDataSource([]);
  constructor(private actRoute : ActivatedRoute) { }


  ngOnInit() {
    this.actRoute.data.subscribe((data) => {
      console.log(data);
      this.dataSource = new MatTableDataSource(data.product);
     })
  }
  

}
