import { TestBed } from '@angular/core/testing';

import { FreelanceService } from './freelance.service';

describe('FreelanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FreelanceService = TestBed.get(FreelanceService);
    expect(service).toBeTruthy();
  });
});
