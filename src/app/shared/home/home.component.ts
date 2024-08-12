import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../core/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
books: any;
searchText: any;
constructor(private booksService:BooksService) {}

ngOnInit(): void {
  this.booksService.getAllBooks().subscribe((res) => {
    this.books = res;
  });
  this.booksService.sortSubject.subscribe((sortCriterion: any) => {
    this.books = this.booksService.sortBooks(sortCriterion);
  });
  this.booksService.priceFilterSubject.subscribe((price:any) => {
    this.booksService.getAllBooks().subscribe((res) => {
      this.books = res;
      this.books = this.booksService.getFilteBooksByPrice(price);
    });
  });
this.booksService.searchSubject.subscribe((searchString:any) => {
  this.searchText = searchString;
})
}
}
