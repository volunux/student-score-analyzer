import { Injectable } from '@angular/core';
import { ValidatorFn, Validators } from "@angular/forms";
import { isNumber, subjectCodePattern } from '../../../shared/shared-validators/form-validators.service';
import { VerifySubjectCodeService } from '../../../shared/shared-validators/verify-subject-code.service';
import { SubjectServiceImpl } from './subject-service-impl';

@Injectable()
export class SubjectEntityValidationService {

  constructor(protected subjectService: SubjectServiceImpl) { }

  private subjectCodeValidationPattern: RegExp = /^[a-zA-Z]{3}[0-9]{3}$/;

  public getTitle(): ValidatorFn[] {
    return [Validators.required, Validators.minLength(1), Validators.maxLength(150)];
  }

  public getCode(): ValidatorFn[] {
    return [Validators.required, Validators.minLength(6), Validators.maxLength(6), subjectCodePattern(this.subjectCodeValidationPattern)];
  }

  public getCodeAsync(): ValidatorFn[] {
    return [VerifySubjectCodeService.getValidator(this.subjectService)];
  }

  public getYear(): ValidatorFn[] {
    return [Validators.required, Validators.minLength(4), Validators.maxLength(4), isNumber()];
  }
  

}
