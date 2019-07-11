import { TestBed, async, inject } from '@angular/core/testing';

import { NewInternshipGuard } from './new-internship.guard';

describe('NewInternshipGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewInternshipGuard]
    });
  });

  it('should ...', inject([NewInternshipGuard], (guard: NewInternshipGuard) => {
    expect(guard).toBeTruthy();
  }));
});
