import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentScoreDetailComponent } from './student-score-detail.component';

describe('StudentScoreDetailComponent', () => {
  let component: StudentScoreDetailComponent;
  let fixture: ComponentFixture<StudentScoreDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentScoreDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentScoreDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
