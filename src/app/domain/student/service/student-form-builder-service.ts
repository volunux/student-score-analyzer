import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EntityFormBuilderService } from '../../../shared/shared-service/impl/entity-form-builder-service';
import { StudentEntityValidationService } from './student-entity-validation-service';
import { StudentServiceImpl } from './student-service-impl';

@Injectable()
export class StudentFormBuilderService extends EntityFormBuilderService {

  constructor(private formBuilder: FormBuilder, protected studentValidatorService: StudentEntityValidationService, protected studentService: StudentServiceImpl) {
    super();
  }

  protected getDefaultForm(): FormGroup {
    
    return this.formBuilder.group({
      'admissionNumber': ['', this.studentValidatorService.getAdmissionNumber()],
      'firstName': ['' , this.studentValidatorService.getFirstName()],
      'lastName': ['' , this.studentValidatorService.getLastName()],
      'emailAddress': ['', { 
        'validators': this.studentValidatorService.getEmailAddress(),
        'asyncValidators': this.studentValidatorService.getEmailAddressAsync(),
        'onBlur': true
        }],
      'homeAddress': ['' , this.studentValidatorService.getHomeAddress() ]
    });
  }

}
