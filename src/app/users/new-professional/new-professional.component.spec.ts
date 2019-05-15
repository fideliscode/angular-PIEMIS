import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProfessionalComponent } from './new-professional.component';

describe('NewProfessionalComponent', () => {
  let component: NewProfessionalComponent;
  let fixture: ComponentFixture<NewProfessionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProfessionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
