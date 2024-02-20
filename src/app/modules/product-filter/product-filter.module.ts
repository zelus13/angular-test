import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFilterComponent } from './product-filter.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductFilterComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ProductFilterComponent],
})
export class ProductFilterModule {}
