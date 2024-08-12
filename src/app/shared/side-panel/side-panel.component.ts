import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../core/books.service';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrl: './side-panel.component.css'
})
export class SidePanelComponent implements OnInit {
  isPriceFiltersVisible: boolean = false;
priceFilters = [500];

constructor(private booksService:BooksService){}

ngOnInit(): void{
}

showPriceFilters(){
  this.isPriceFiltersVisible = !this.isPriceFiltersVisible;
}
filterBooksByPrice(priceFilter:any){
  this.booksService.getPriceFilter(priceFilter);
}
}
