export class ScoreSubjectDto {
  private score: number;
  private subjectCode: string;
  private subjectTitle: string;
  private subjectYear: string;

  constructor(data?: any) {
    if (data) {
      this.score = data.score || 0;
      this.subjectCode = data.subjectCode || null;
      this.subjectTitle = data.subjectTitle || null;
      this.subjectYear = data.subjectYear || null;
    }
  }

  public getScore(): number {
    return this.score;
  }

  public getSubjectCode(): string {
    return this.subjectCode;
  }

  public getSubjectTitle(): string {
    return this.subjectTitle;
  }

  public getSubjectYear(): string {
    return this.subjectYear;
  }

  public setScore(score: number): void {
    this.score = score;
  }

  public setSubjectCode(subjectCode: string): void {
    this.subjectCode = subjectCode;
  }

  public setSubjectTitle(subjectTitle: string): void {
    this.subjectTitle = subjectTitle;
  }

  public setSubjectYear(subjectYear: string): void {
    this.subjectYear = subjectYear;
  }


    /**
     * Getter $score
     * @return {number}
     */
	public get $score(): number {
		return this.score;
	}

    /**
     * Getter $subjectCode
     * @return {string}
     */
	public get $subjectCode(): string {
		return this.subjectCode;
	}

    /**
     * Getter $subjectTitle
     * @return {string}
     */
	public get $subjectTitle(): string {
		return this.subjectTitle;
	}

    /**
     * Getter $subjectYear
     * @return {string}
     */
	public get $subjectYear(): string {
		return this.subjectYear;
	}



}