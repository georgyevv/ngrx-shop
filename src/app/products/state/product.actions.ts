import { Action } from '@ngrx/store';
import { Product } from '../models/product.model';

export enum ProductActionTypes {
  InitializeNewProduct = '[Product] Initialize New Product',
  ClearCurrentProduct = '[Product] Clear Current Product',
  CreateProduct = '[Product] Create Product',
  CreateProductSuccess = '[Product] Create Product Success',
  CreateProductFail = '[Product] Create Product Fail',
  Load = '[Product] Load',
  LoadSuccess = '[Product] Load Success',
  LoadFail = '[Product] Load Fail'
}

export class InitializeNewProduct implements Action {
  readonly type = ProductActionTypes.InitializeNewProduct;
}

export class ClearCurrentProduct implements Action {
  readonly type = ProductActionTypes.ClearCurrentProduct;
}

export class CreateProduct implements Action {
  readonly type = ProductActionTypes.CreateProduct;

  constructor(public payload: Product) {}
}
export class CreateProductSuccess implements Action {
  readonly type = ProductActionTypes.CreateProductSuccess;

  constructor(public payload: Product) {}
}
export class CreateProductFail implements Action {
  readonly type = ProductActionTypes.CreateProductFail;

  constructor(public payload: string) {}
}

export class Load implements Action {
  readonly type = ProductActionTypes.Load;
}
export class LoadSuccess implements Action {
  readonly type = ProductActionTypes.LoadSuccess;

  constructor(public payload: Product[]) {}
}
export class LoadFail implements Action {
  readonly type = ProductActionTypes.LoadFail;

  constructor(public payload: string) {}
}

export type ProductActions =
  | InitializeNewProduct
  | ClearCurrentProduct
  | CreateProduct
  | CreateProductSuccess
  | CreateProductFail
  | Load
  | LoadSuccess
  | LoadFail;
