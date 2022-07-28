import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-no-entry-detail',
  templateUrl: './no-entry-detail.component.html'
})
export class NoEntryDetailComponent implements OnInit {

  constructor() { }

  @Input('entityTitle') public title: string;
  @Input() public entry: any;

  ngOnInit(): void {
  }

}
