import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreDeleteAllComponent } from './score-delete-all.component';

describe('ScoreDeleteAllComponent', () => {
  let component: ScoreDeleteAllComponent;
  let fixture: ComponentFixture<ScoreDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreDeleteAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
