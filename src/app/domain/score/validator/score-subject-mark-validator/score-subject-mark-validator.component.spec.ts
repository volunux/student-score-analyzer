import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreSubjectMarkValidatorComponent } from './score-subject-mark-validator.component';

describe('ScoreSubjectMarkValidatorComponent', () => {
  let component: ScoreSubjectMarkValidatorComponent;
  let fixture: ComponentFixture<ScoreSubjectMarkValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreSubjectMarkValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreSubjectMarkValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
