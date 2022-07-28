import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFirstNameValidatorComponent } from './student-first-name-validator.component';

describe('StudentFirstNameValidatorComponent', () => {
  let component: StudentFirstNameValidatorComponent;
  let fixture: ComponentFixture<StudentFirstNameValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentFirstNameValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFirstNameValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
