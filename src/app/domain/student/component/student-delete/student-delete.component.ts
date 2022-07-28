import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentFormBuilderService } from '../../service/student-form-builder-service';
import { StudentServiceImpl } from '../../service/student-service-impl';
import { StudentController } from '../../util/student-controller';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html'
})
export class StudentDeleteComponent extends StudentController implements OnInit {

  constructor(protected override service: StudentServiceImpl, protected override router: Router, protected override route: ActivatedRoute, protected override efbs: StudentFormBuilderService) {
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
