import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectYearValidatorComponent } from './subject-year-validator.component';

describe('SubjectYearValidatorComponent', () => {
  let component: SubjectYearValidatorComponent;
  let fixture: ComponentFixture<SubjectYearValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectYearValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectYearValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
