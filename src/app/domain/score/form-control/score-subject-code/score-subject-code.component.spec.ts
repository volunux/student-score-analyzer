import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreSubjectCodeComponent } from './score-subject-code.component';

describe('ScoreSubjectCodeComponent', () => {
  let component: ScoreSubjectCodeComponent;
  let fixture: ComponentFixture<ScoreSubjectCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreSubjectCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreSubjectCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
