import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EntityFormBuilderService } from '../../../shared/shared-service/impl/entity-form-builder-service';
import { SubjectEntityValidationService } from './subject-entity-validation-service';
import { SubjectServiceImpl } from './subject-service-impl';

@Injectable()
export class SubjectFormBuilderService extends EntityFormBuilderService {

  constructor(private formBuilder: FormBuilder, protected subjectValidatorService: SubjectEntityValidationService, protected subjectService: SubjectServiceImpl) {
    super();
  }

  protected getDefaultForm(): FormGroup {

    return this.formBuilder.group({
      'title': ['', this.subjectValidatorService.getTitle()],
      'year': ['', this.subjectValidatorService.getYear()],
      'code': ['', {
        'validators': this.subjectValidatorService.getCode(),
        'asyncValidators': this.subjectValidatorService.getCodeAsync(),
        'onBlur': true
      }],
    });
  }

}
