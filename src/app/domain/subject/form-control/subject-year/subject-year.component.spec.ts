import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectYearComponent } from './subject-year.component';

describe('SubjectYearComponent', () => {
  let component: SubjectYearComponent;
  let fixture: ComponentFixture<SubjectYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectYearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
