import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListingComponent } from './product-listing.component';
import { BrowserModule } from '@angular/platform-browser';
import { ProductFilterModule } from 'src/app/modules/product-filter/product-filter.module';

const routes: Routes = [
  {
    path: '',
    component: ProductListingComponent,
  },
];

@NgModule({
  declarations: [ProductListingComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forChild(routes),
    ProductFilterModule,
  ],
})
export class ProductListingModule {}
