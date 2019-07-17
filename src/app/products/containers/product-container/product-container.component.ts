import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as fromProduct from './../../state';
import * as productActions from './../../state/product.actions';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.scss']
})
export class ProductContainerComponent implements OnInit {
  public products$: Observable<Product[]>;
  public selectedProduct$: Observable<Product>;
  public errorMessage$: Observable<string>;

  constructor(private store: Store<fromProduct.State>) {}

  public ngOnInit(): void {
    this.store.dispatch(new productActions.Load());

    this.products$ = this.store.pipe(select(fromProduct.getProducts));
    this.selectedProduct$ = this.store.pipe(select(fromProduct.getCurrentProduct));
    this.errorMessage$ = this.store.pipe(select(fromProduct.getError));
  }

  public newProduct(): void {
    this.store.dispatch(new  productActions.InitializeNewProduct());
  }

  public onSave(product: Product): void {
    this.store.dispatch(new productActions.CreateProduct(product));
    this.store.dispatch(new productActions.ClearCurrentProduct());
  }

  public onCancel(): void {
    this.store.dispatch(new productActions.ClearCurrentProduct());
  }
}
