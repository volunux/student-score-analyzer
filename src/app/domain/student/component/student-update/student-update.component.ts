import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentFormBuilderService } from '../../service/student-form-builder-service';
import { StudentServiceImpl } from '../../service/student-service-impl';
import { StudentController } from '../../util/student-controller';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html'
})
export class StudentUpdateComponent extends StudentController implements OnInit {

  constructor(protected override service: StudentServiceImpl, protected override route: ActivatedRoute, protected override efbs: StudentFormBuilderService, protected override router: Router) {
    super();
  }

  ngOnInit(): void {
    this.setForm(this.efbs.getEntityUpdateForm());
    this.initUpdateComponent();
  }

}
