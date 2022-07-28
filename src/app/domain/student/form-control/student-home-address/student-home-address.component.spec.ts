import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentHomeAddressComponent } from './student-home-address.component';

describe('StudentHomeAddressComponent', () => {
  let component: StudentHomeAddressComponent;
  let fixture: ComponentFixture<StudentHomeAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentHomeAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentHomeAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
