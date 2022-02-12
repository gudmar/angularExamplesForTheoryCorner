import { TestBed } from '@angular/core/testing';

import { RandomDataProviderService } from './random-data-provider.service';

describe('RandomDataProviderService', () => {
  let service: RandomDataProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomDataProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
