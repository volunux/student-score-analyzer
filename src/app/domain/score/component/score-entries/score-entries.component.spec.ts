import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreEntriesComponent } from './score-entries.component';

describe('ScoreEntriesComponent', () => {
  let component: ScoreEntriesComponent;
  let fixture: ComponentFixture<ScoreEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
