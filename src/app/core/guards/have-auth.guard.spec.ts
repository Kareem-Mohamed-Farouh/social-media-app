import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { haveAuthGuard } from './have-auth.guard';

describe('haveAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => haveAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
