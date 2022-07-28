import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEmailAddressComponent } from './student-email-address.component';

describe('StudentEmailAddressComponent', () => {
  let component: StudentEmailAddressComponent;
  let fixture: ComponentFixture<StudentEmailAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentEmailAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEmailAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
