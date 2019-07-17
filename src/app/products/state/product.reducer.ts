import { ProductActions, ProductActionTypes } from './product.actions';
import { Product } from '../models/product.model';

export interface ProductState {
  currentProductId: number | null;
  products: Product[];
  error: '';
}

const initialState: ProductState = {
  currentProductId: null,
  products: [],
  error: ''
};

export function reducer(state: ProductState = initialState, action: ProductActions): ProductState {
  switch (action.type) {
    case ProductActionTypes.InitializeNewProduct:
      return {
        ...state,
        currentProductId: 0
      } as ProductState;

    case ProductActionTypes.ClearCurrentProduct:
      return {
        ...state,
        currentProductId: null,
      } as ProductState;

    case ProductActionTypes.CreateProductSuccess:
      return {
        ...state,
        products: [...state.products, action.payload],
        currentProductId: action.payload.id,
        error: ''
      } as ProductState;

    case ProductActionTypes.CreateProductFail:
      return {
        ...state,
        error: action.payload
      } as ProductState;

    case ProductActionTypes.LoadSuccess:
      return {
        ...state,
        products: action.payload,
        error: ''
      } as ProductState;

    case ProductActionTypes.LoadFail:
      return {
        ...state,
        products: [],
        error: action.payload
      } as ProductState;

    default:
      return state;
  }
}
