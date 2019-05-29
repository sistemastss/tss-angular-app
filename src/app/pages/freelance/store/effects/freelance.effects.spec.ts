import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { FreelanceEffects } from './freelance.effects';

describe('FreelanceEffects', () => {
  let actions$: Observable<any>;
  let effects: FreelanceEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FreelanceEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(FreelanceEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
