import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentScoreMenuComponent } from './student-score-menu.component';

describe('StudentScoreMenuComponent', () => {
  let component: StudentScoreMenuComponent;
  let fixture: ComponentFixture<StudentScoreMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentScoreMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentScoreMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
