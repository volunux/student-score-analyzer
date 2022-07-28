
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, delay, map, Observable, ObservableInput, retry, tap, throwError } from 'rxjs';
import { ConfigurationProperties } from '../../shared-function/configuration-properties';
import { BaseCrudService } from '../base-crud-service';
import { Newable } from "../newable";
import { SearchQuery } from "../search-query";

export class BaseCrudServiceImpl<T> implements BaseCrudService<T> {

  protected entityBasePath: string = "api";
  protected apiHost: string = ConfigurationProperties.getApiHost();
  protected apiRequestRetryTimes: number = 3;
  protected readonly EntityDomain: Newable<T>;

  constructor(protected httpClient: HttpClient, EntityDomain: Newable<T>) {
    this.EntityDomain = EntityDomain;
  }

  public findEntries(searchQuery: SearchQuery): Observable<T[]> {
    const params: HttpParams = new HttpParams({ 'fromObject': searchQuery as any })
    const options: any = { 'params': params };

    const q: string[] = [];
    this.setSearchQueryParameters(q, searchQuery);
    const qStr: string = q.join("&");

    return this.httpClient.get<T[]>(`${this.apiHost}/${this.entityBasePath}/entries?${qStr}`)
      .pipe(
        retry(this.getServiceRetryTimes()),
        delay(0),
        map((res: any) => res.map((entry: any) => {
          return new (this.EntityDomain)(entry);
        })),
        tap((value: any) => console.log(value)),
        catchError((err: any) => this.errorHandler(err))
      );
  }

  public findOne(id: number, detailAlt?: string): Observable<T | null> {
    return this.httpClient.get<T>(`${this.apiHost}/${this.entityBasePath}/${detailAlt ? detailAlt : 'detail'}/${id}`)
      .pipe(
        retry(this.getServiceRetryTimes()),
        tap((value: any) => console.log(value)),
        map((res: any) => new (this.EntityDomain)(res)),
        catchError((err: any) => this.errorHandler(err))
      );
  }

  public addOne(): Observable<T> {
    return this.httpClient.get<T>(`${this.apiHost}/${this.entityBasePath}/add`)
      .pipe(
        retry(this.getServiceRetryTimes()),
        tap((value: any) => console.log(value)),
        map((res: any) => res.json()),
        catchError((err: any) => this.errorHandler(err))
      );
  }

  public saveOne(entry: T): Observable<T> {
    return this.httpClient.post<T>(`${this.apiHost}/${this.entityBasePath}/save/`, entry)
      .pipe(
        retry(this.getServiceRetryTimes()),
        tap((value: any) => console.log(value)),
        map((res: any) => new (this.EntityDomain)(res)),
        catchError((err: any) => this.errorHandler(err.error))
      ) as Observable<T>;
  }

  public updateOne(id: number, entry: T): Observable<T> {
    return this.httpClient.put<T>(`${this.apiHost}/${this.entityBasePath}/update/${id}`, entry)
      .pipe(
        retry(this.getServiceRetryTimes()),
        tap((value: any) => console.log(value)),
        map((res: any) => new (this.EntityDomain)(res)),
        catchError((err: any) => this.errorHandler(err.error))
      );
  }

  public deleteOne(id: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(`${this.apiHost}/${this.entityBasePath}/delete/${id}`)
      .pipe(
        retry(this.getServiceRetryTimes()),
        tap((value: any) => console.log(value)),
        map((res: any) => res),
        catchError((err: any) => this.errorHandler(err))
      );

  }

  public deleteMany(ids: number[]): Observable<boolean> {
    return this.httpClient.put<boolean>(`${this.apiHost}/${this.entityBasePath}/remove/many`, { 'ids': ids })
      .pipe(
        retry(this.getServiceRetryTimes()),
        tap((value: any) => console.log(value)),
        map((res: any) => res),
        catchError((err: any) => this.errorHandler(err))
      );
  }

  public removeAll(): Observable<boolean> {
    return this.httpClient.get<boolean>(`${this.apiHost}/${this.entityBasePath}/delete/entries/all`)
      .pipe(
        retry(this.getServiceRetryTimes()),
        tap((value: any) => console.log(value)),
        map((res: any) => res),
        catchError((err: any) => this.errorHandler(err))
      );
  }

  public deleteAll(): Observable<boolean> {
    return this.httpClient.delete<boolean>(`${this.apiHost}/${this.entityBasePath}/delete/entries/all`, {})
      .pipe(
        retry(this.getServiceRetryTimes()),
        tap((value: any) => console.log(value)),
        map((res: any) => res),
        catchError((err: any) => this.errorHandler(err))
      );
  }

  protected errorHandler(err: any): ObservableInput<any> {
    return throwError(() => err);
  }

  protected getServiceRetryTimes(): number {
    return this.apiRequestRetryTimes;
  }

  protected setServiceRetryTimes(times: number):void {
    this.apiRequestRetryTimes = times;
  }

  public setEntityBasePath(path: string) {
    this.entityBasePath = path;
  }

  protected setSearchQueryParameters(q: string[] , searchQuery: SearchQuery): string[] {
    if (searchQuery.type) q.push(`type=${searchQuery.type}`);
    if (searchQuery.search) q.push(`search=${searchQuery.search}`);
    if (searchQuery.updated_min) q.push(`updated_min=${searchQuery.updated_min}`);
    if (searchQuery.entry_id) q.push(`entry_id=${searchQuery.entry_id}`);
    if (searchQuery.page) q.push(`page=${searchQuery.page}`);
    return q;
  }
}

