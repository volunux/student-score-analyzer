import { Injectable } from '@angular/core';
import { ValidatorFn, Validators } from "@angular/forms";
import { isNumber } from '../../../shared/shared-validators/form-validators.service';
import { ScoreServiceImpl } from './score-service-impl';

@Injectable()
export class ScoreEntityValidationService {

  constructor(protected scoreService: ScoreServiceImpl) { }

  public getStudentId(): ValidatorFn[] {
    return [Validators.required, isNumber()];
  }

  public getSubjectId(): ValidatorFn[] {
    return [Validators.required, isNumber()];
  }

  public getScoreId(id: number | null): ValidatorFn[] {
    if (id == null) {
      return [];
    }
    else {
      return [Validators.required, isNumber()];      
    }
  }

  public getOverallMark(): ValidatorFn[] {
    return [Validators.required, Validators.min(0), Validators.max(100), isNumber()];
  }

  public getSubjectTitle(): ValidatorFn[] {
    return [Validators.required, Validators.minLength(1), Validators.maxLength(150)];
  }

  public getSubjectCode(): ValidatorFn[] {
    return [Validators.required, Validators.minLength(6), Validators.maxLength(6)];
  }

}
