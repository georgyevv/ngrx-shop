import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductContainerComponent } from './containers/product-container/product-container.component';
import { ProductsRootComponent } from './products-root.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsRootComponent,
    children: [
      {
        path: '',
        component: ProductContainerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
