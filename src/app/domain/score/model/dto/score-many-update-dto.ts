import { DtoUtil } from '../../../../shared/shared-model/dto-util';
import { SubjectScoreUpdateDto } from './subject-score-update-dto';

export class ScoreManyUpdateDto {

  private studentId: number;
  private subjectScores: SubjectScoreUpdateDto[];

  constructor(data?: any) {
    if (data) {
      this.studentId = data.studentId || 0;
      this.subjectScores = DtoUtil.createDtos(data.scores, SubjectScoreUpdateDto);
    }
  }

  public getStudentId(): number {
    return this.studentId;
  }

  public getSubjectScores(): SubjectScoreUpdateDto[] {
   return this.subjectScores; 
  }

  public setStudentId(studentId: number): void {
    this.studentId = studentId;
  }

  public setSubjectScores(subjectScoreUpdateDto: SubjectScoreUpdateDto[]): void {
    this.subjectScores = subjectScoreUpdateDto;
  }
}
