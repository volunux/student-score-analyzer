import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectController } from '../../util/subject-controller';
import { SubjectServiceImpl } from '../../service/subject-service-impl';

@Component({
  selector: 'app-subject-delete-all',
  templateUrl: './subject-delete-all.component.html'
})
export class SubjectDeleteAllComponent extends SubjectController implements OnInit {

  constructor(protected override service: SubjectServiceImpl, protected override router: Router) {
    super();
  }

  ngOnInit(): void {
    this.initDeleteAllComponent();
  }

}
