import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectTitleValidatorComponent } from './subject-title-validator.component';

describe('SubjectTitleValidatorComponent', () => {
  let component: SubjectTitleValidatorComponent;
  let fixture: ComponentFixture<SubjectTitleValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectTitleValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectTitleValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
