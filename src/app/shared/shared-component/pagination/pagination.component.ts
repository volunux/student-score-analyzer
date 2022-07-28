import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchQuery } from '../../shared-service/search-query';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnInit {

  constructor() { }

  @Input() public entriesSize: number = 0;
  @Input() public prevPageNumber: number = 0;
  @Input() public nextPageNumber: number = 0;
  @Input('fDate') public firstEntryDate: Date | string = new Date();
  @Input('fId') public firstEntryId: number = 0;
  @Input('lDate') public lastEntryDate: Date | string = new Date();
  @Input('lId') public lastEntryId: number = 0;
  @Input('tCount') public totalCount: number = 0;
  @Output() pageNavigation: EventEmitter<SearchQuery> = new EventEmitter<SearchQuery>();

  ngOnInit(): void {
  }

  public next(data: any): void {
    this.pageNavigation.emit(data);
  }

  public previous(data: any): void {
    this.pageNavigation.emit(data);
  }


}
