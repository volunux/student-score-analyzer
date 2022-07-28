import { HttpClient } from '@angular/common/http';
import { Injectable, SkipSelf } from '@angular/core';
import { catchError, map, Observable, retry, tap } from 'rxjs';
import { BaseCrudServiceImpl } from '../../../shared/shared-service/impl/base-crud-service-impl';
import { Subject } from '../model/subject';
import { SubjectService } from './subject-service';

@Injectable()
export class SubjectServiceImpl extends BaseCrudServiceImpl<Subject> implements SubjectService {

  protected override entityBasePath: string = "subject";

  constructor(@SkipSelf() protected override httpClient: HttpClient) {
    super(httpClient, Subject);
  }

  public checkSubjectCode(subjectCode: string): Observable<boolean> {
    return this.httpClient.get<boolean>(`${this.apiHost}/${this.entityBasePath}/exist/code/${subjectCode}`)
      .pipe(
        retry(this.getServiceRetryTimes()),
        tap((value: any) => console.log(value)),
        map((res: any) => res),
        catchError((err: any) => this.errorHandler(err))
      );
  }
}
