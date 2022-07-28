import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLastNameValidatorComponent } from './student-last-name-validator.component';

describe('StudentLastNameValidatorComponent', () => {
  let component: StudentLastNameValidatorComponent;
  let fixture: ComponentFixture<StudentLastNameValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentLastNameValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentLastNameValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
