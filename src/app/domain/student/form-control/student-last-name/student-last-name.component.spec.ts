import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLastNameComponent } from './student-last-name.component';

describe('StudentLastNameComponent', () => {
  let component: StudentLastNameComponent;
  let fixture: ComponentFixture<StudentLastNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentLastNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentLastNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
