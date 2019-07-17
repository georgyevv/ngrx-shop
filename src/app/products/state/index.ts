import * as fromRoot from '../../state/app.state';
import * as fromProducts from './product.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

// Extends the app state to include the product feature.
// This is required because products are lazy loaded.
// So the referance to ProductState cannot be added to app.state.ts dierectly.
export interface State extends fromRoot.State {
  products: fromProducts.ProductState;
}

// Selector functions
const getProductFeatureState = createFeatureSelector<fromProducts.ProductState>('products');

export const getCurrentProductId = createSelector(getProductFeatureState, state => state.currentProductId);

export const getCurrentProduct = createSelector(getProductFeatureState, getCurrentProductId, (state, currentProductId) => {
  if (currentProductId === 0) {
    return {
      id: 0,
      name: '',
      description: ''
    };
  } else {
    return currentProductId ? state.products.find(p => p.id === currentProductId) : null;
  }
});

export const getProducts = createSelector(getProductFeatureState, state => state.products);

export const getError = createSelector(getProductFeatureState, state => state.error);
