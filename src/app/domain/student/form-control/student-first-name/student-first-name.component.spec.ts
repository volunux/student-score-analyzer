import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFirstNameComponent } from './student-first-name.component';

describe('StudentFirstNameComponent', () => {
  let component: StudentFirstNameComponent;
  let fixture: ComponentFixture<StudentFirstNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentFirstNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFirstNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
