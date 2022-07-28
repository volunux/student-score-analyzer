import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAdmissionNumberValidatorComponent } from './student-admission-number-validator.component';

describe('StudentAdmissionNumberValidatorComponent', () => {
  let component: StudentAdmissionNumberValidatorComponent;
  let fixture: ComponentFixture<StudentAdmissionNumberValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAdmissionNumberValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAdmissionNumberValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
