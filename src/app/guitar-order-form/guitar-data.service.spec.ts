import { TestBed } from '@angular/core/testing';

import { GuitarDataService } from './guitar-data.service';

describe('GuitarDataService', () => {
  let service: GuitarDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuitarDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
