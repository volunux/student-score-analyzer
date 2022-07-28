import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceImpl } from '../../service/student-service-impl';
import { StudentController } from '../../util/student-controller';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
})
export class StudentDetailComponent extends StudentController implements OnInit {


  constructor(protected override route: ActivatedRoute, protected override router: Router, protected override service: StudentServiceImpl) {
    super();
  }

  ngOnInit(): void {
    this.initDetailComponent();
  }

}
