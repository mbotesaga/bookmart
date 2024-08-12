import { Component, OnInit } from '@angular/core';
import { CartService } from '../../core/cart.service';
import { BooksService } from '../../core/books.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  searchText: any;
  cartItemCount: any;
  isSortMenuVisible: boolean = false;
  criteria: any[]=['Price(Low to high)']
  constructor(private cartService:CartService,private booksService:BooksService) {}

    ngOnInit(): void{
      this.cartService.cartSubject.subscribe((cartItems: any) =>{
        this.cartItemCount = cartItems.length;
      })
    }
    sortBooks(criterion: any){

    }

    showSortMenu(){
      this.isSortMenuVisible = !this.isSortMenuVisible;
    }
    
  }

