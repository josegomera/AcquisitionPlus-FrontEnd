import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { ProdutosListComponent } from './list/produtos-list.component';
import { ProdutosRoutigModule } from './produtos-routig.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductosAddComponent } from './add/productos-add.component';
import { NgxMaskModule } from 'ngx-mask';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [ProdutosListComponent, ProductosAddComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ProdutosRoutigModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    NgSelectModule
  ]
})
export class ProdutosModule { }
