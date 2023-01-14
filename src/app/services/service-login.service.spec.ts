import { TestBed } from '@angular/core/testing';

import {AirLineService } from './airline.service';

describe('ServiceLoginService', () => {
  let service: AirLineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirLineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
