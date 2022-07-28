import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentFormBuilderService } from '../../service/student-form-builder-service';
import { StudentServiceImpl } from '../../service/student-service-impl';
import { StudentController } from '../../util/student-controller';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html'
})
export class StudentAddComponent extends StudentController implements OnInit {
  
  constructor(protected override route: ActivatedRoute, protected override router: Router, protected override efbs: StudentFormBuilderService, protected override service: StudentServiceImpl) {
    super();
   }

  ngOnInit(): void {
    this.setForm(this.efbs.getEntityCreateForm());
    this.initAddComponent(); 
  }

}
