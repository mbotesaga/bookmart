import { TestBed } from '@angular/core/testing';

import { BookstoreLibService } from './bookstore-lib.service';

describe('BookstoreLibService', () => {
  let service: BookstoreLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookstoreLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
