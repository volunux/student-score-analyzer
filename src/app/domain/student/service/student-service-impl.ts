import { HttpClient } from '@angular/common/http';
import { Injectable, SkipSelf } from '@angular/core';
import { catchError, map, Observable, retry, tap } from 'rxjs';
import { BaseCrudServiceImpl } from '../../../shared/shared-service/impl/base-crud-service-impl';
import { Student } from '../model/student';
import { StudentService } from './student-service';

@Injectable()
export class StudentServiceImpl extends BaseCrudServiceImpl<Student> implements StudentService {

  protected override entityBasePath: string = "student";

  constructor(@SkipSelf() protected override httpClient: HttpClient) {
    super(httpClient, Student);
  }

  public checkEmailAddress(emailAddress: string): Observable<boolean> {
    return this.httpClient.get<boolean>(`${this.apiHost}/${this.entityBasePath}/exist/email/${emailAddress}`)
      .pipe(
        retry(this.getServiceRetryTimes()),
        tap((value: any) => console.log(value)),
        map((res: any) => res),
        catchError((err: any) => this.errorHandler(err))
      );
  }

}
