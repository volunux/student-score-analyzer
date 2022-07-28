export class SubjectScoreUpdateDto {

  private scoreId?: number;
  private subjectId: number;
  private overallMark: number;

  constructor(data?: any) {
    if (data) {
      this.scoreId = data.scoreId || null;
      this.subjectId = data.subjectId || null;
      this.overallMark = +data.overallMark || 0;
    }
  }

  public getScoreId(): number | undefined {
    return this.scoreId;
  }

  public getSubjectId(): number {
    return this.subjectId;
  }

  public getOverallMark(): number {
    return this.overallMark;
  }

  public prepareUpdate() {
    if (!this.scoreId) delete this.scoreId;
  }
}
