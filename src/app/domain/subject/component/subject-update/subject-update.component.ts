import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectFormBuilderService } from '../../service/subject-form-builder-service';
import { SubjectServiceImpl } from '../../service/subject-service-impl';
import { SubjectController } from '../../util/subject-controller';

@Component({
  selector: 'app-subject-update',
  templateUrl: './subject-update.component.html'
})
export class SubjectUpdateComponent extends SubjectController implements OnInit {

  constructor(protected override service: SubjectServiceImpl, protected override route: ActivatedRoute, protected override efbs: SubjectFormBuilderService, protected override router: Router) {
    super();
  }

  ngOnInit(): void {
    this.setForm(this.efbs.getEntityUpdateForm());
    this.initUpdateComponent();
  }

}
