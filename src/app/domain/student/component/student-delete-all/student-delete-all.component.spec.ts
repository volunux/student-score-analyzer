import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDeleteAllComponent } from './student-delete-all.component';

describe('StudentDeleteAllComponent', () => {
  let component: StudentDeleteAllComponent;
  let fixture: ComponentFixture<StudentDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDeleteAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
