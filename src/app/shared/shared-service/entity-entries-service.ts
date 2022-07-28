import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { delay, tap } from 'rxjs';
import { BaseEntity } from "../shared-model/base-entity";
import { SearchParam } from "../shared-model/search-param";
import { BaseCrudService } from "./base-crud-service";
import { DeleteMessage } from "./delete-message";
import { SearchQuery } from "./search-query";

@Component({
  'template': ''
})
export class EntityEntriesService<T> {

  public $entries: BaseEntity[] = [];
  public lastEntryDate: string = new Date().toString();
  public firstEntryDate: string = new Date().toString();
  public lastEntryId: number = 10;
  public firstEntryId: number = 1;
  public totalCount: number = 0;
  protected service: BaseCrudService<T>;
  private itemDeleteList: number[] = [];
  public currentDeleteStatus: DeleteMessage | null = null;
  public nextPageNumber: number = 0;
  public prevPageNumber: number = 0;
  public isLoading: boolean = false;
  public type: string = "";
  public search: string = "";
  protected route: ActivatedRoute;

  public deleteListMessages: DeleteMessage[] = [
    { 'color': 'red', 'message': 'No entries to delete.' },
    { 'color': 'blue', 'message': 'Please wait or be patient....' },
    { 'color': 'green', 'message': 'Action Successful!!!' },
    { 'color': 'red', 'message': 'Action Unsuccessful!!!' },
    { 'color': 'red', 'message': 'Error has occured!!!' }
  ];

  public trackByItems(index: number, entry: BaseEntity): number {
    return entry.getId();
  }

  public getItemDeleteList(): number[] {
    return this.itemDeleteList;
  }

  public clearItemDeleteList(): void {
    this.itemDeleteList = [];
  }

  public getDeleteListMessages(): DeleteMessage[] {
    return this.deleteListMessages;
  }

  public initEntries(searchQuery: SearchQuery): void {
    this.service.findEntries(searchQuery)
      .subscribe({
        'next': (entries: T[]) => {
          this.$entries = entries as unknown as BaseEntity[];
          this.configurePagination(this.$entries);
          let page: number = searchQuery.page !== null ? +(<any>searchQuery.page) : 0;
          this.setNextPrevPageNumber(page);
          this.isLoading = false;
        },
        'error': (err: any) => {
          this.isLoading = false;
        },
        'complete': (() => 'Complete')
      });
  }

  public processDelete(): void {
    if (this.getItemDeleteList().length < 1) {
      this.currentDeleteStatus = this.getDeleteListMessages()[0];
    }
    else {
      this.service.deleteMany(this.getItemDeleteList())
        .pipe(
          tap(() => this.currentDeleteStatus = this.getDeleteListMessages()[1]),
          delay(5000)
        )
        .subscribe({
          'next': (succeeded: boolean) => {
            if (succeeded === false) {
              this.currentDeleteStatus = this.getDeleteListMessages()[3];
            }
            else {
              this.currentDeleteStatus = this.getDeleteListMessages()[2];
              this.$entries = this.$entries.filter((entry: BaseEntity) => this.getItemDeleteList().indexOf(entry.getId()) === -1);
              this.clearItemDeleteList();
            }
          },
          'error': (failed: boolean) => { this.currentDeleteStatus = this.getDeleteListMessages()[3]; }
        });
    }
  }

  public configurePagination(entries: BaseEntity[]): void {
    if (entries.length > 0) {
      if (entries[entries.length - 1].getUpdatedOn()) { this.lastEntryDate = entries[entries.length - 1].getUpdatedOn().toString(); }
      if (entries[entries.length - 1].getId()) { this.lastEntryId = entries[entries.length - 1].getId(); }
      if (entries[0].getUpdatedOn()) { this.firstEntryDate = entries[entries.length - 1].getUpdatedOn().toString(); }
      if (entries[0].getId()) { this.firstEntryId = entries[entries.length - 1].getId(); }
    }
    this.totalCount = entries.length;
  }

  protected getSearchQuery(updatedMin: string, entryId: string, page: number, type: string, search: string): SearchQuery {
    return { 'updated_min': updatedMin, entry_id: entryId, page, type, search };
  }

  protected getSearchQueryFromMap(paramMap: ParamMap | Map<string, any>): SearchQuery {
    let updatedMin: string | null = paramMap.get('updated_min') || null;
    let entryId: string | null = paramMap.get('entry_id') || null;
    let page: number | null = +(paramMap.get('page')) | 0;
    let type: string | null = paramMap.get('type') as string || paramMap.get('label') as string || null;
    let search: string | null = paramMap.get('search') as string || paramMap.get('value') as string || null;
    return { 'updated_min': updatedMin, entry_id: entryId, page, type, search };
  }

  protected getSearchQueryFromObject(searchParam: SearchParam): SearchQuery {
    return { 'type': searchParam.label, 'search': searchParam.value, 'page': 0 } as SearchQuery;
  }

  protected setNextPrevPageNumber(page: number): void {
    this.nextPageNumber = page ? page + 1 : 2;
    this.prevPageNumber = page ? page - 1 : 0;
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((queryParams: ParamMap) => {
      this.isLoading = true;
      this.initEntries({ 'page': 0 } as SearchQuery);
    });
  }

  public onSearch(data: SearchParam | null): void {
    this.isLoading = true;
    this.$entries = [];
    this.initEntries(this.getSearchQueryFromObject(data as SearchParam));
  }

  public clearRes(res: any): void {
    this.isLoading = false;
    window.location.reload();
  }

  public pageNavigation(data: any) {
    const type: string = this.type;
    const search: string = this.search;
    this.initEntries({ ...data, type, search } as SearchQuery)
  }

}

