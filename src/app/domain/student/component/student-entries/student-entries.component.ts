import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchParam } from '../../../../shared/shared-model/search-param';
import { EntityEntriesService } from '../../../../shared/shared-service/entity-entries-service';
import { Student } from '../../model/student';
import { StudentServiceImpl } from '../../service/student-service-impl';

@Component({
  selector: 'app-student-entries',
  templateUrl: './student-entries.component.html',
  styleUrls: ['../../../../../assets/css/internal-one.css']
})
export class StudentEntriesComponent extends EntityEntriesService<Student> implements OnInit {

  constructor(protected override service: StudentServiceImpl, protected override route: ActivatedRoute, private router: Router) {
    super();
  }

  public override $entries: Student[] = [];
  public entityTitle: string = "Student";
  public entityTitles: string = "Students";
  public searchCriteria: SearchParam[] = [
    { 'label': 'Email Address', 'value': 'email_address' }
  ];

}
