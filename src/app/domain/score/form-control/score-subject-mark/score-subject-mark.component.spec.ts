import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreSubjectMarkComponent } from './score-subject-mark.component';

describe('ScoreSubjectMarkComponent', () => {
  let component: ScoreSubjectMarkComponent;
  let fixture: ComponentFixture<ScoreSubjectMarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreSubjectMarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreSubjectMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
