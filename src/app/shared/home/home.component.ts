import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../core/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
books: any;
constructor(private booksService:BooksService) {}

ngOnInit(): void {
  this.booksService.getAllBooks().subscribe((res) => {
    console.log(res);
    this.books = res;
  });
}
}
