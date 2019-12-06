import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
const routes: Routes = [
  {path: 'orders', loadChildren: () => import('./purchase-order/purchase-order.module').then(p => p.PurchaseOrderModule)},
  {path: 'maintanances', loadChildren: () => import('./manteniminentos/mantenimiento.module').then(p => p.MantenimientoModule)}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
     routes,
     {scrollPositionRestoration: 'top', onSameUrlNavigation: 'reload'}
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
