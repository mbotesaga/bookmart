import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
baseUrl = 'api/books';
books: any[] = [];
constructor(private http:HttpClient) {}

  getAllBooks(){
    return this.http.get(this.baseUrl).pipe(map((book: any) => {
      console.log("Hello");
      this.books = book;
      return book;
    }));
  }
}
