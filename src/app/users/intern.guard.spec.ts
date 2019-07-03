import { TestBed, async, inject } from '@angular/core/testing';

import { InternGuard } from './intern.guard';

describe('InternGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InternGuard]
    });
  });

  it('should ...', inject([InternGuard], (guard: InternGuard) => {
    expect(guard).toBeTruthy();
  }));
});
