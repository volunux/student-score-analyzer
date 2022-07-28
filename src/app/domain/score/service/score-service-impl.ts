import { HttpClient } from '@angular/common/http';
import { Injectable, SkipSelf } from '@angular/core';
import { catchError, delay, map, Observable, retry, tap } from 'rxjs';
import { Student } from 'src/app/domain/student/model/student';
import { BaseCrudServiceImpl } from '../../../shared/shared-service/impl/base-crud-service-impl';
import { Newable } from '../../../shared/shared-service/newable';
import { SearchQuery } from '../../../shared/shared-service/search-query';
import { ScoreDto } from '../model/dto/score-dto';
import { ScoreUpdateDto } from '../model/dto/score-update-dto';
import { Score } from '../model/score';
import { ScoreService } from './score-service';

@Injectable()
export class ScoreServiceImpl extends BaseCrudServiceImpl<Score> implements ScoreService {

  protected override entityBasePath: string = "score";
  protected ScoreUpdateDtoEntityDomain: Newable<ScoreUpdateDto> = ScoreUpdateDto;

  constructor(@SkipSelf() protected override httpClient: HttpClient) {
    super(httpClient, Score);
  }

  public updateScore(studentId: number): Observable<ScoreUpdateDto> {
    return this.httpClient.get<any>(`${this.apiHost}/${this.entityBasePath}/student/update/${studentId}`)
      .pipe(
        retry(this.getServiceRetryTimes()),
        tap((value: any) => console.log(value)),
        map((res: any) => new (this.ScoreUpdateDtoEntityDomain)(res)),
        catchError((err: any) => this.errorHandler(err.error))
      );
  }

  public override findEntries(searchQuery: SearchQuery): Observable<Student[]> {
    const q: string[] = [];
    this.setSearchQueryParameters(q, searchQuery);
    const qStr: string = q.join("&");

    return this.httpClient.get<Student[]>(`${this.apiHost}/${this.entityBasePath}/student/entries?${qStr}`)
      .pipe(
        retry(this.getServiceRetryTimes()),
        delay(0),
        map((res: any) => res.map((entry: any) => {
          return new Student(entry);
        })),
        tap((value: any) => console.log(value)),
        catchError((err: any) => this.errorHandler(err))
      );
  }

  public override findOne(id: number, detailAlt?: string): Observable<any | null> {
    return this.httpClient.get<ScoreDto>(`${this.apiHost}/${this.entityBasePath}/student/${detailAlt ? detailAlt : 'detail'}/${id}`)
      .pipe(
        retry(this.getServiceRetryTimes()),
        tap((value: any) => console.log(value)),
        map((res: any) => new ScoreDto(res)),
        catchError((err: any) => this.errorHandler(err))
      );
  }


}
