import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-no-entry-update-delete',
  templateUrl: './no-entry-update-delete.component.html'
})
export class NoEntryUpdateDeleteComponent implements OnInit {

  constructor() { }

  @Input('entityTitle') public title: string;
  @Input() public entry: any;

  ngOnInit(): void {
  }

}
