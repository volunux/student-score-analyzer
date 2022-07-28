
export class StudentSubjectScoreUpdateDto {
  private scoreId: number;
  private subjectId: number;
  private subjectCode: string;
  private subjectTitle: string;
  private overallMark: number;

  constructor(data?: any) {
    if (data) {
      this.scoreId = data.scoreId || null;
      this.subjectId = data.subjectId || null;
      this.subjectCode = data.subjectCode || null;
      this.subjectTitle = data.subjectTitle || null;
      this.overallMark = data.overallMark || 0;
    }
  }

  public getScoreId(): number {
    return this.scoreId;
  }

  public getSubjectId(): number {
    return this.subjectId;
  }

  public getSubjectCode(): string {
    return this.subjectCode;
  }

  public getSubjectTitle(): string {
    return this.subjectTitle;
  }

  public getOverallMark(): number {
    return this.overallMark;
  }

  public setScoreId(scoreId: number): void {
    this.scoreId = scoreId;
  }

  public setSubjectId(subjectId: number): void {
    this.subjectId = subjectId;
  }

  public setSubjectCode(subjectCode: string): void {
    this.subjectCode = subjectCode;
  }

  public setSubjectTitle(subjectTitle: string): void {
    this.subjectTitle = subjectTitle;
  }

  public setOverallMark(overallMark: number): void {
    this.overallMark = overallMark;
  }
}