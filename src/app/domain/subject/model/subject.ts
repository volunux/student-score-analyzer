import { BaseEntity } from '../../../shared/shared-model/base-entity';

export class Subject extends BaseEntity {

  private title: string;
  private code: string;
  private year: string;

  constructor(data?: any) {
    super(data);
    if (data) {
      this.title = data.title || undefined;
      this.code = data.code || undefined;
      this.year = data.year || undefined;
    }
  }

  public getTitle(): string {
    return this.title;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public getCode(): string {
    return this.code;
  }

  public setCode(code: string): void {
    this.code = code;
  }

  public getYear(): string {
    return this.year;
  }

  public setYear(year: string): void {
    this.year = year;
  }



  /**
   * Getter $title
   * @return {string}
   */
  public get $title(): string {
    return this.title;
  }

  /**
   * Getter $code
   * @return {string}
   */
  public get $code(): string {
    return this.code;
  }

  /**
   * Getter $year
   * @return {string}
   */
  public get $year(): string {
    return this.year;
  }


}
