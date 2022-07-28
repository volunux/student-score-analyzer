import { BaseEntity } from '../../../shared/shared-model/base-entity';

export class Student extends BaseEntity {

  private admissionNumber: string;
  private firstName: string;
  private lastName: string;
  private emailAddress: string;
  private homeAddress: string;

  constructor(data?: any) {
    super(data);
    if (data) {
      this.admissionNumber = data.admissionNumber || 0;
      this.firstName = data.firstName || undefined;
      this.lastName = data.lastName || undefined;
      this.emailAddress = data.emailAddress || undefined;
      this.homeAddress = data.homeAddress || undefined;
    }
  }

  public getAdmissionNumber(): string {
    return this.admissionNumber;
  }

  public setAdmissionNumber(admissionNumber: string): void {
    this.admissionNumber = admissionNumber;
  }

  public getFirstName(): string {
    return this.firstName;
  }

  public setFirstName(firstName: string): void {
    this.firstName = firstName;
  }

  public getLastName(): string {
    return this.lastName;
  }

  public setLastName(lastName: string): void {
    this.lastName = lastName;
  }

  public getEmailAddress(): string {
    return this.emailAddress;
  }

  public setEmailAddress(emailAddress: string): void {
    this.emailAddress = emailAddress;
  }

  public getHomeAddress(): string {
    return this.homeAddress;
  }

  public setHomeAddress(homeAddress: string): void {
    this.homeAddress = homeAddress;
  }



  /**
   * Getter $admissionNumber
   * @return {string}
   */
  public get $admissionNumber(): string {
    return this.admissionNumber;
  }

  /**
   * Getter $firstName
   * @return {string}
   */
  public get $firstName(): string {
    return this.firstName;
  }

  /**
   * Getter $lastName
   * @return {string}
   */
  public get $lastName(): string {
    return this.lastName;
  }

  /**
   * Getter $emailAddress
   * @return {string}
   */
  public get $emailAddress(): string {
    return this.emailAddress;
  }

  /**
   * Getter $homeAddress
   * @return {string}
   */
  public get $homeAddress(): string {
    return this.homeAddress;
  }

}
