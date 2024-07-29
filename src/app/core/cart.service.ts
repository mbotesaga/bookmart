import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProducts: any[] = [];
  cartSubject = new Subject();
  constructor() { }

  addProductToCart(product:any){
    let currentBook = {...product, count: 1};
    this.cartProducts.push(currentBook);
    this.cartSubject.next(this.cartProducts);
  }
}
