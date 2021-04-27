import { TestBed } from '@angular/core/testing';

import { ParaPunto3Service } from './para-punto3.service';

describe('ParaPunto3Service', () => {
  let service: ParaPunto3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParaPunto3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
