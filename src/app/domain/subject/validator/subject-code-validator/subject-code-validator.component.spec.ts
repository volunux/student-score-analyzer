import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectCodeValidatorComponent } from './subject-code-validator.component';

describe('SubjectCodeValidatorComponent', () => {
  let component: SubjectCodeValidatorComponent;
  let fixture: ComponentFixture<SubjectCodeValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectCodeValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectCodeValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
