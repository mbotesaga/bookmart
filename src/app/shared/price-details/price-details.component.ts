import { Component, OnInit } from '@angular/core';
import { CartService } from '../../core/cart.service';

@Component({
  selector: 'app-price-details',
  templateUrl: './price-details.component.html',
  styleUrl: './price-details.component.css'
})
export class PriceDetailsComponent implements OnInit {
  cartItems: any[] = [];
  cartItemsPrice: any;
  cartItemsDiscount: any;
  deliveryCharge: any;
  
  constructor(private cartService:CartService){}

ngOnInit(): void {
  this.cartItems = this.cartService.getAllCartItems();
  this.getBillingDetails();
  this.cartService.cartSubject.subscribe((items:any) => {
    this.cartItems = items;
    this.getBillingDetails();
  })
}

getBillingDetails(){
  let billingDetails = this.cartService.getBilling(this.cartItems);
  this.cartItemsPrice = billingDetails.price;
  this.cartItemsDiscount = billingDetails.discount;
  this.deliveryCharge = billingDetails.delivery;
}
}
