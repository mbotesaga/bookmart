import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
baseUrl = 'https://bookmart-json.vercel.app/books';
books: any[] = [];
filteredBooks: any;
sortCriterion: any;
sortSubject = new Subject();
priceFilter: any;
priceFilterSubject = new Subject();

constructor(private http:HttpClient) {}

  getAllBooks(){
    return this.http.get(this.baseUrl).pipe(map((book: any) => {
      this.books = book;
      this.filteredBooks = this.books;
      return book;
    }));
  }

  getSortCriterion(criterion: any){
    this.getSortCriterion = criterion;
    this.sortSubject.next(this.sortCriterion);
  }

  sortBooks(criteria: any){
    switch (criteria){
      case 'Price(Low to High)':
        this.filteredBooks.sort((a: any,b: any) => {
          if (a.price<b.price){
            return -1;
          }
          if(a.price > b.price){
            return 1
          }
          return 0
        });
        break;
    }
    return this.filteredBooks;
  }

getPriceFilter(price:any){
  this.priceFilter = price;
  this.priceFilterSubject.next(this.priceFilter);
}

getFilteBooksByPrice(price:any){
  return this.filteredBooks = this.books.filter((book:any) => {
    return book.price <= price;
  })
}
}
