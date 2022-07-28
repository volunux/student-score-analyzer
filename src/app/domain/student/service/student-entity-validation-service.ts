import { Injectable } from '@angular/core';
import { ValidatorFn, Validators } from "@angular/forms";
import { emailAddressPattern } from '../../../shared/shared-validators/form-validators.service';
import { VerifyEmailService } from '../../../shared/shared-validators/verify-email.service';
import { StudentServiceImpl } from './student-service-impl';

@Injectable()
export class StudentEntityValidationService {

  constructor(protected studentService: StudentServiceImpl) { }

  private emailAddressValidationPattern: RegExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  public getAdmissionNumber(): ValidatorFn[] {
    return [Validators.required, Validators.minLength(1), Validators.maxLength(60)];
  }

  public getFirstName(): ValidatorFn[] {
    return [Validators.required, Validators.minLength(1), Validators.maxLength(20)];
  }

  public getLastName(): ValidatorFn[] {
    return [Validators.required, Validators.minLength(1), Validators.maxLength(20)];
  }

  public getEmailAddress(): ValidatorFn[] {
    return [Validators.required, Validators.minLength(1), Validators.maxLength(50), emailAddressPattern(this.emailAddressValidationPattern)];
  }

  public getEmailAddressAsync(): ValidatorFn[] {
    return [VerifyEmailService.getValidator(this.studentService)];
  }

  public getHomeAddress(): ValidatorFn[] {
    return [Validators.required, Validators.minLength(1), Validators.maxLength(300)];
  }

}
