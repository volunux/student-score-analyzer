import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectCodeComponent } from './subject-code.component';

describe('SubjectCodeComponent', () => {
  let component: SubjectCodeComponent;
  let fixture: ComponentFixture<SubjectCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
