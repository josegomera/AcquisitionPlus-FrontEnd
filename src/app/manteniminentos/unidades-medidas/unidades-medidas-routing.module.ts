import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnidadesMedidasListComponent } from './list/unidades-medidas-list.component';
import { RouterModule, Routes } from '@angular/router';
import { UnidadesMedidasAddComponent } from './add/unidades-medidas-add.component';
import { UnitOfMeasureResolver } from 'src/app/core/resolvers/unitOfMeasure.resolver';
import { UnidadesMedidaEditComponent } from './edit/unidades-medida-edit.component';
import { DataUnitOfMeasureResolver } from 'src/app/core/resolvers/dataUnitOfMeasure.resolver';


const routes: Routes = [
  {path: '', component: UnidadesMedidasListComponent, resolve: {units: UnitOfMeasureResolver}},
  {path: 'add', component: UnidadesMedidasAddComponent},
  {path: 'edit/:id', component: UnidadesMedidaEditComponent, resolve : { unit : DataUnitOfMeasureResolver}}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(
     routes
    )
  ],
  exports: [RouterModule]
})

export class UnidadesMedidasRoutingModule { }
