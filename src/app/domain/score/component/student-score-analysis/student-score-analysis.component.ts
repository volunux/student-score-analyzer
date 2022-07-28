import { Component, OnInit } from '@angular/core';
import { ScoreController } from '../../util/score-controller';
import { ActivatedRoute, Router } from '@angular/router';
import { ScoreDto } from '../../model/dto/score-dto';
import { ScoreServiceImpl } from '../../service/score-service-impl';

@Component({
  selector: 'app-student-score-analysis',
  templateUrl: '../student-score-detail/student-score-detail.component.html'
})
export class StudentScoreAnalysisComponent extends ScoreController implements OnInit {

  public override $entry: ScoreDto | null = null;
  public override entityTitle: string = 'Student Result';

  constructor(protected override route: ActivatedRoute, protected override router: Router, protected override service: ScoreServiceImpl) {
    super();
  }

  ngOnInit(): void {
    this.initDetailComponent('analysis');
  }

}
