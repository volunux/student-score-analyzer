import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EntityFormBuilderService } from '../../../shared/shared-service/impl/entity-form-builder-service';
import { ScoreEntityValidationService } from './score-entity-validation-service';
import { ScoreServiceImpl } from './score-service-impl';
import { StudentSubjectScoreUpdateDto } from '../model/dto/student-subject-score-update-dto';

@Injectable()
export class ScoreFormBuilderService extends EntityFormBuilderService {

  constructor(private formBuilder: FormBuilder, protected scoreValidatorService: ScoreEntityValidationService, protected scoreService: ScoreServiceImpl) {
    super();
  }

  protected getDefaultForm(): FormGroup {

    return this.formBuilder.group({
      'studentId': ['', this.scoreValidatorService.getStudentId()],
      'scores': this.formBuilder.array([])
    });
  }

  public buildSubjectScoreFormGroup(dto: StudentSubjectScoreUpdateDto): FormGroup {
    
    return this.formBuilder.group({
      'scoreId': [dto.getScoreId(), this.scoreValidatorService.getScoreId(dto.getScoreId())],
      'subjectId': [dto.getSubjectId(), this.scoreValidatorService.getSubjectId()],
      'subjectTitle': [dto.getSubjectTitle(), this.scoreValidatorService.getSubjectTitle()],
      'subjectCode': [dto.getSubjectCode(), this.scoreValidatorService.getSubjectCode()],
      'overallMark': [dto.getOverallMark(), this.scoreValidatorService.getOverallMark()]
    });

  }

}
