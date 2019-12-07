import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatInputModule, MatPaginatorModule, MatNativeDateModule, MatDatepickerModule } from '@angular/material';
import { PersonalIdValidationDirective } from '../core/directives/personal-id-validation.directive';




@NgModule({
  declarations: [PersonalIdValidationDirective],
  imports: [
    CommonModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatDatepickerModule


  ],
  exports: [
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatDatepickerModule,
    PersonalIdValidationDirective
  ]
})
export class MaterialModule { }
