import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProdutosListComponent } from './list/produtos-list.component';
import { ProductResolver } from 'src/app/core/resolvers/product.resolver';
import { ProductosAddComponent } from './add/productos-add.component';
import { ListSupplierResolver } from 'src/app/core/resolvers/listSuppliers.resolver';
import { ListUnitOfMeasureResolver } from 'src/app/core/resolvers/listUnits.resolver';


const routes: Routes = [
  {path: '', component: ProdutosListComponent, resolve: {product: ProductResolver }},
  {path: 'add/:id', component: ProductosAddComponent, resolve: {listSupplier: ListSupplierResolver, listUnit: ListUnitOfMeasureResolver }}
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
export class ProdutosRoutigModule { }
