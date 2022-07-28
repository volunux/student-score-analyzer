import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectFormBuilderService } from '../../service/subject-form-builder-service';
import { SubjectServiceImpl } from '../../service/subject-service-impl';
import { SubjectController } from '../../util/subject-controller';

@Component({
  selector: 'app-subject-delete',
  templateUrl: './subject-delete.component.html'
})
export class SubjectDeleteComponent extends SubjectController implements OnInit {

  constructor(protected override service: SubjectServiceImpl, protected override router: Router, protected override route: ActivatedRoute, protected override efbs: SubjectFormBuilderService) {
    super();
  }

  ngOnInit(): void {
    this.setForm(this.efbs.getEntityDeleteForm());
    this.initDeleteComponent();
  }

  override get isCtrlDisabled(): boolean {
    return true;
  }

}
