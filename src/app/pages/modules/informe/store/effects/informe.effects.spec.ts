import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { InformeEffects } from './informe.effects';

describe('InformeEffects', () => {
  let actions$: Observable<any>;
  let effects: InformeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        InformeEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(InformeEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
