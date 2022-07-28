import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-dashboard',
  templateUrl: './score-dashboard.component.html'
})
export class ScoreDashboardComponent implements OnInit {

  constructor() { }

  public title: string = "Score";

  ngOnInit(): void {
  }

}
