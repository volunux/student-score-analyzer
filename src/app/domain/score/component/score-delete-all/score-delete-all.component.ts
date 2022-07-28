import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScoreServiceImpl } from '../../service/score-service-impl';
import { ScoreController } from '../../util/score-controller';

@Component({
  selector: 'app-score-delete-all',
  templateUrl: './score-delete-all.component.html'
})
export class ScoreDeleteAllComponent extends ScoreController implements OnInit {

  constructor(protected override service: ScoreServiceImpl, protected override router: Router) {
    super();
  }

  ngOnInit(): void {
    this.initDeleteAllComponent();
  }

}
