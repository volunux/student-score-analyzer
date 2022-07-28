import { Observable } from "rxjs";
import { SearchQuery } from "./search-query";

export interface BaseCrudService<T> {

  findEntries(searchQuery: SearchQuery): Observable<T[]>;

  findOne(id: number, detailAlt?: string): Observable<T | any | null>;

  addOne(): Observable<T>;

  saveOne(entry: T): Observable<T>;

  updateOne(id: number, entry: T): Observable<T>;

  deleteOne(id: number): Observable<boolean>;

  deleteMany(ids: number[]): Observable<boolean>;

  removeAll(): Observable<boolean>;

  deleteAll(): Observable<boolean>;

}
