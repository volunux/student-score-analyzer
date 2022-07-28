import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityValidationErrorComponent } from './entity-validation-error.component';

describe('EntityValidationErrorComponent', () => {
  let component: EntityValidationErrorComponent;
  let fixture: ComponentFixture<EntityValidationErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityValidationErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityValidationErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
