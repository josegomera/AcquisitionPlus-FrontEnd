import { Component, OnInit } from '@angular/core';
import { UnitMeasureService } from 'src/app/core/services/unit-measure.service';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-unidades-medidas-list',
  templateUrl: './unidades-medidas-list.component.html',
  styleUrls: ['./unidades-medidas-list.component.css']
})
export class UnidadesMedidasListComponent implements OnInit {
  displayedColumns: string[] = ['number', 'description','creationDate','accion'];
  dataSource = new MatTableDataSource([]);
  constructor(private actRoute : ActivatedRoute) { }

  ngOnInit() {
  this.actRoute.data.subscribe((data) => {
   this.dataSource = new MatTableDataSource(data.units);
  })
  }

}
