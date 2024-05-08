import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { mapPointGuard } from './map-point.guard';

describe('mapPointGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => mapPointGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
