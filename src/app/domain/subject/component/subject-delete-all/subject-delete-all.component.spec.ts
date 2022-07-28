import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectDeleteAllComponent } from './subject-delete-all.component';

describe('SubjectDeleteAllComponent', () => {
  let component: SubjectDeleteAllComponent;
  let fixture: ComponentFixture<SubjectDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectDeleteAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
