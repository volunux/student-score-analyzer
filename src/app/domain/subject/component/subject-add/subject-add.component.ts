import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectFormBuilderService } from '../../service/subject-form-builder-service';
import { SubjectServiceImpl } from '../../service/subject-service-impl';
import { SubjectController } from '../../util/subject-controller';

@Component({
  selector: 'app-subject-add',
  templateUrl: './subject-add.component.html'
})
export class SubjectAddComponent extends SubjectController implements OnInit {

  constructor(protected override route: ActivatedRoute, protected override router: Router, protected override efbs: SubjectFormBuilderService, protected override service: SubjectServiceImpl) {
    super();
  }

  ngOnInit(): void {
    this.setForm(this.efbs.getEntityCreateForm());
    this.initAddComponent();
  }

}
