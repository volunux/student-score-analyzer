import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { SearchParam } from '../../shared-model/search-param';

@Component({
  selector: 'app-search-option',
  templateUrl: './search-option.component.html'
})
export class SearchOptionComponent implements OnInit {

  constructor() { }

  public searchInput: string | null = null;
  public searchForm: FormGroup = new FormGroup({
    'label': new FormControl(),
    'value': new FormControl('', [Validators.minLength(3)])
  });

  @Input() public searchCriteria: SearchParam[] = [];
  @Input() public isLoading: boolean = false;
  @Output() searchQuery: EventEmitter<SearchParam | null> = new EventEmitter<SearchParam | null>();

  @Output() clearResult: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {

  }

  public onSearch(): void {
    this.searchInput = this.searchForm.get('search')?.value;
    this.searchQuery.emit(this.searchForm.value);
  }

  get search(): AbstractControl | null {
    return this.searchForm.get('search');
  }

  get type(): AbstractControl | null {
    return this.searchForm.get('type');
  }

  public clearSearch(): void {
    this.clearResult.emit({});
  }


}
