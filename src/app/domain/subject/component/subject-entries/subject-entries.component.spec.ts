import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectEntriesComponent } from './subject-entries.component';

describe('SubjectEntriesComponent', () => {
  let component: SubjectEntriesComponent;
  let fixture: ComponentFixture<SubjectEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
