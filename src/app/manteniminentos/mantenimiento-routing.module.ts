import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MantenimientosListComponent } from './list/mantenimientos-list.component';



const routes: Routes = [
  {path: '', component: MantenimientosListComponent},
  {path: 'employees', loadChildren: () => import('./empleados/empleados.module').then(p => p.EmpleadosModule)},
  {path: 'departments', loadChildren: () => import('./departamentos/departamentos.module').then(p => p.DepartamentosModule)},
  {path: 'products', loadChildren: () => import('./produtos/produtos.module').then(p => p.ProdutosModule)},
  {path: 'suppliers', loadChildren: () => import('./suplidores/suplidores.module').then(p => p.SuplidoresModule)},
  {path: 'units', loadChildren: () => import('./unidades-medidas/unidades-medidas.module').then(p => p.UnidadesMedidasModule)}
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
export class MantenimientoRoutingModule { }
