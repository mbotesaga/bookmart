import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookstoreLibComponent } from './bookstore-lib.component';

describe('BookstoreLibComponent', () => {
  let component: BookstoreLibComponent;
  let fixture: ComponentFixture<BookstoreLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookstoreLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookstoreLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
