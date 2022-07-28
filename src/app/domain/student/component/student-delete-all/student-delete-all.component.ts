import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentController } from '../../util/student-controller';
import { StudentServiceImpl } from '../../service/student-service-impl';

@Component({
  selector: 'app-student-delete-all',
  templateUrl: './student-delete-all.component.html'
})
export class StudentDeleteAllComponent extends StudentController implements OnInit {

  constructor(protected override service: StudentServiceImpl, protected override router: Router) {
    super();
  }

  ngOnInit(): void {
    this.initDeleteAllComponent();
  }

}
