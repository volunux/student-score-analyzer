import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentScoreAnalysisComponent } from './student-score-analysis.component';

describe('StudentScoreAnalysisComponent', () => {
  let component: StudentScoreAnalysisComponent;
  let fixture: ComponentFixture<StudentScoreAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentScoreAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentScoreAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
