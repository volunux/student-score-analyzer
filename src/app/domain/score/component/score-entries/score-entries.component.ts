import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/domain/student/model/student';
import { SearchParam } from '../../../../shared/shared-model/search-param';
import { EntityEntriesService } from '../../../../shared/shared-service/entity-entries-service';
import { Score } from '../../model/score';
import { ScoreServiceImpl } from '../../service/score-service-impl';

@Component({
  selector: 'app-score-entries',
  templateUrl: './score-entries.component.html',
  styleUrls: ['../../../../../assets/css/internal-three.css']
})
export class ScoreEntriesComponent extends EntityEntriesService<Score> implements OnInit {

  constructor(protected override service: ScoreServiceImpl, protected override route: ActivatedRoute, private router: Router) {
    super();
  }

  public override $entries: Student[] = [];
  public entityTitle: string = "Score";
  public entityTitles: string = "Scores";
  public searchCriteria: SearchParam[] = [
    { 'label': 'Email Address', 'value': 'email_address' }
  ];

}
