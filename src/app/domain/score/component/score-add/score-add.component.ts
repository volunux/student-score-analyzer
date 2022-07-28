import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScoreFormBuilderService } from '../../service/score-form-builder-service';
import { ScoreServiceImpl } from '../../service/score-service-impl';
import { ScoreController } from '../../util/score-controller';

@Component({
  selector: 'app-score-add',
  templateUrl: './score-add.component.html'
})
export class ScoreAddComponent extends ScoreController implements OnInit {

  constructor(protected override route: ActivatedRoute, protected override router: Router, protected override efbs: ScoreFormBuilderService, protected override service: ScoreServiceImpl) {
    super();
  }

  ngOnInit(): void {
    this.setForm(this.efbs.getEntityCreateForm());
    this.initAddComponent();
  }

}
