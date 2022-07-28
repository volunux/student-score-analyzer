import { Student } from '../../../student/model/student';
import { ScoreSubjectDto } from './score-subject-dto';
import { DtoUtil } from '../../../../shared/shared-model/dto-util';
export class ScoreDto {

  private meanScore: number;
  private medianScore: number;
  private modeScore: number;
  private student: Student;
  private totalScore: number;
  private scores: ScoreSubjectDto[];

  constructor(data?: any) {
    if (data) {
      this.meanScore = data.meanScore || 0;
      this.medianScore = data.medianScore || 0;
      this.modeScore = data.modeScore || 0;
      this.student = new Student(data.student) || new Student({});
      this.totalScore = data.totalScore || 0;
      this.scores = DtoUtil.createDtos<ScoreSubjectDto>(data.subjectsScore, ScoreSubjectDto);
    }
  }

  public getMeanScore(): number {
    return this.meanScore;
  }

  public getMedianScore(): number {
    return this.medianScore;
  }

  public getModeScore(): number {
    return this.modeScore;
  }

  public getStudent(): Student {
    return this.student;
  }

  public getTotalScore(): number {
    return this.totalScore;
  }

  public getScores(): ScoreSubjectDto[] {
    return this.scores;
  }

  public setMeanScore(meanScore: number): void {
    this.meanScore = meanScore;
  }

  public setMedianScore(medianScore: number): void {
    this.medianScore = medianScore;
  }

  public setModeScore(modeScore: number): void {
    this.modeScore = modeScore;
  }

  public setStudent(student: Student): void {
    this.student = student;
  }

  public setTotalScore(totalScore: number): void {
    this.totalScore = totalScore;
  }

  public setScores(scores: ScoreSubjectDto[]): void {
    this.scores = scores;
  }



    /**
     * Getter $meanScore
     * @return {number}
     */
	public get $meanScore(): number {
		return this.meanScore;
	}

    /**
     * Getter $medianScore
     * @return {number}
     */
	public get $medianScore(): number {
		return this.medianScore;
	}

    /**
     * Getter $modeScore
     * @return {number}
     */
	public get $modeScore(): number {
		return this.modeScore;
	}

    /**
     * Getter $student
     * @return {Student}
     */
	public get $student(): Student {
		return this.student;
	}

    /**
     * Getter $totalScore
     * @return {number}
     */
	public get $totalScore(): number {
		return this.totalScore;
	}

    /**
     * Getter $scores
     * @return {ScoreSubjectDto[]}
     */
	public get $scores(): ScoreSubjectDto[] {
		return this.scores;
	}


}
