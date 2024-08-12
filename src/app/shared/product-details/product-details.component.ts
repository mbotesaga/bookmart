import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../core/books.service';
import { CartService } from '../../core/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  currentProduct: any;
  discountedPrice: any;
  isProductInCart: any;

  constructor(private activateRoute:ActivatedRoute, private booksService:BooksService, private cartService:CartService){}

  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe((res) => {
      this.currentProduct = this.booksService.getCurrentBook(res);
    });
    
  }
}
