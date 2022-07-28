import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreSubjectTitleComponent } from './score-subject-title.component';

describe('ScoreSubjectTitleComponent', () => {
  let component: ScoreSubjectTitleComponent;
  let fixture: ComponentFixture<ScoreSubjectTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreSubjectTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreSubjectTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
