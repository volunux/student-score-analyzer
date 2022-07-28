import { StudentSubjectScoreUpdateDto } from "./student-subject-score-update-dto";
import { BaseEntity } from '../../../../shared/shared-model/base-entity';
import { DtoUtil } from '../../../../shared/shared-model/dto-util';

export class ScoreUpdateDto extends BaseEntity {

  private studentId: number;
  private scores: StudentSubjectScoreUpdateDto[];

  constructor(data?: any) {
    super(data);
    if (data) {
      this.studentId = data.studentId;
      this.scores = DtoUtil.createDtos<StudentSubjectScoreUpdateDto>(data.subjectScoreToUpdateDtos, StudentSubjectScoreUpdateDto);
    }
  }

  public getStudentId(): number {
    return this.studentId;
  }

  public getScores(): StudentSubjectScoreUpdateDto[] {
    return this.scores;
  }

  public setStudentId(studentId: number): void {
    this.studentId = studentId;
  }

  public setScores(scores: StudentSubjectScoreUpdateDto[]): void {
    this.scores = scores;
  }

}
