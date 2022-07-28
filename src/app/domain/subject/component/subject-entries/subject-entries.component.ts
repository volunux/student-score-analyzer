import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchParam } from '../../../../shared/shared-model/search-param';
import { EntityEntriesService } from '../../../../shared/shared-service/entity-entries-service';
import { Subject } from '../../model/subject';
import { SubjectServiceImpl } from '../../service/subject-service-impl';

@Component({
  selector: 'app-subject-entries',
  templateUrl: './subject-entries.component.html',
  styleUrls: ['../../../../../assets/css/internal-two.css']
})
export class SubjectEntriesComponent extends EntityEntriesService<Subject> implements OnInit {

  constructor(protected override service: SubjectServiceImpl, protected override route: ActivatedRoute, private router: Router) {
    super();
  }

  public override $entries: Subject[] = [];
  public entityTitle: string = "Subject";
  public entityTitles: string = "Subjects";
  public searchCriteria: SearchParam[] = [
    { 'label': 'Code', 'value': 'code' }
  ];


}
