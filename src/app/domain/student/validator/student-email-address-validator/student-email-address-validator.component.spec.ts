import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEmailAddressValidatorComponent } from './student-email-address-validator.component';

describe('StudentEmailAddressValidatorComponent', () => {
  let component: StudentEmailAddressValidatorComponent;
  let fixture: ComponentFixture<StudentEmailAddressValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentEmailAddressValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEmailAddressValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
