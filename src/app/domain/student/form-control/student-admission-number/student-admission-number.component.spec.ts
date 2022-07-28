import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAdmissionNumberComponent } from './student-admission-number.component';

describe('StudentAdmissionNumberComponent', () => {
  let component: StudentAdmissionNumberComponent;
  let fixture: ComponentFixture<StudentAdmissionNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAdmissionNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAdmissionNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
