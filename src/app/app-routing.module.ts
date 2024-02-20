import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListingComponent } from './views/product-listing/product-listing.component';

const routes: Routes = [
  {
    path: 'product-listing',
    component: ProductListingComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
