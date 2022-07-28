import { AbstractControl, FormArray } from '@angular/forms';
import { ParamMap } from '@angular/router';
import { EntityControllerService } from '../../../shared/shared-service/impl/entity-controller-service';
import { Newable } from '../../../shared/shared-service/newable';
import { ScoreManyUpdateDto } from '../model/dto/score-many-update-dto';
import { ScoreUpdateDto } from '../model/dto/score-update-dto';
import { StudentSubjectScoreUpdateDto } from '../model/dto/student-subject-score-update-dto';
import { SubjectScoreUpdateDto } from '../model/dto/subject-score-update-dto';
import { Score } from '../model/score';
import { ScoreFormBuilderService } from '../service/score-form-builder-service';
import { ScoreService } from '../service/score-service';
import { ScoreDto } from '../model/dto/score-dto';

export abstract class ScoreController extends EntityControllerService<Score> {

  protected efbs: ScoreFormBuilderService;
  protected entityBasePath: string = "/score";
  protected EntityDomain: Newable<any> = Score;
  protected service: ScoreService;
  public override $entry: Score | ScoreManyUpdateDto | any | null = null;
  public entityTitle: string = "Score";
  public studentEntityId: number = 0;
  public $scoreUpdateDto: ScoreUpdateDto | null = null;

  constructor() {
    super();
  }

  get id(): AbstractControl | null {
    return this.getEntityForm().get('id');
  }

  get studentId(): AbstractControl | null {
    return this.getEntityForm().get('studentId');
  }

  get scores(): FormArray | null {
    return this.getEntityForm().get('scores') as FormArray;
  }

  protected override setEntry(data?: ScoreUpdateDto) {
    this.entityForm.get('studentId')?.setValue(data?.getStudentId());
    data?.getScores().forEach((dto: StudentSubjectScoreUpdateDto) => {
      (<FormArray>this.entityForm.get('scores')).push(this.efbs.buildSubjectScoreFormGroup(dto));
    });
  }

  protected override initAddComponent(): void {
    this.route.paramMap.subscribe((param: ParamMap): any => {
      this.studentEntityId = Number(param.get('studentId'));
      this.entityId = this.studentEntityId;

      this.service.updateScore(this.studentEntityId)
        .subscribe({
          'next': (entry: ScoreUpdateDto | null): void => {
            this.$scoreUpdateDto = entry;
            this.setEntry(<ScoreUpdateDto>entry);
          },
          'error': (error: any) => {
            this.errStr = error.message || error.code;
          },
          'complete': (() => "")
        });
    });
  }

  public override initDetailComponent(detailAlt?: string): void {
    this.route.paramMap.subscribe((param) => {
      const id = Number(param.get('studentId'));
      this.service.findOne(id, detailAlt)
        .subscribe({
          'next': (entry: ScoreDto | null) => {
            this.$entry = entry;
            console.log(this.$entry)
          },
          'error': (error: any) => {
            this.errStr = error.message;
          },
          'complete': () => console.log('Complete')
        });
    });

  }

  public override onUpdateEntity(data: any): void {
      this.$entry = new ScoreManyUpdateDto(data);

      (<ScoreManyUpdateDto>this.$entry).getSubjectScores()
        .forEach((subjectScoreUpdateDto: SubjectScoreUpdateDto) => {
          subjectScoreUpdateDto.prepareUpdate();
        });
      this.$onUpdateEntity(this.$entry);
  }

}
