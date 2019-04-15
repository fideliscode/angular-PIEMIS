import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInternshipComponent } from './new-internship.component';

describe('NewInternshipComponent', () => {
  let component: NewInternshipComponent;
  let fixture: ComponentFixture<NewInternshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewInternshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
