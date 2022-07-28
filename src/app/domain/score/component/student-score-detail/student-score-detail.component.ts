import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScoreDto } from '../../model/dto/score-dto';
import { ScoreServiceImpl } from '../../service/score-service-impl';
import { ScoreController } from '../../util/score-controller';

@Component({
  selector: 'app-student-score-detail',
  templateUrl: './student-score-detail.component.html'
})
export class StudentScoreDetailComponent extends ScoreController implements OnInit {

  public override $entry: ScoreDto | null = null;
  public override entityTitle: string = 'Student Result';

  constructor(protected override route: ActivatedRoute, protected override router: Router, protected override service: ScoreServiceImpl) {
    super();
  }

  ngOnInit(): void {
    this.initDetailComponent();
  }

}
