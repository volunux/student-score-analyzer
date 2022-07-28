import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-no-entries',
  templateUrl: './no-entries.component.html'
})
export class NoEntriesComponent implements OnInit {

  constructor() { }

  @Input() public entriesSize: number = 0;

  ngOnInit(): void {
  }

}
