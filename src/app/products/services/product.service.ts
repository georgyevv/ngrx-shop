import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public getProducts(): Observable<Product[]> {
    return of([
      {
        id: 1,
        name: 'Tesla Model S',
        description: 'Super cool car'
      } as Product,
      {
        id: 2,
        name: 'Tesla Model 3',
        description: 'Super car'
      } as Product,
      {
        id: 3,
        name: 'Tesla Model X',
        description: 'Cool car'
      } as Product
    ]);
  }

  public createProduct(product: Product): Observable<Product> {
    return of({
      id: 40,
      name: product.name,
      description: product.description
    } as Product);
  }
}
