import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentHomeAddressValidatorComponent } from './student-home-address-validator.component';

describe('StudentHomeAddressValidatorComponent', () => {
  let component: StudentHomeAddressValidatorComponent;
  let fixture: ComponentFixture<StudentHomeAddressValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentHomeAddressValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentHomeAddressValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
