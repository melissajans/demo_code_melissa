import { TestBed } from '@angular/core/testing';

import { FavorietenService } from './favorieten.service';

describe('FavorietenService', () => {
  let service: FavorietenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavorietenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
