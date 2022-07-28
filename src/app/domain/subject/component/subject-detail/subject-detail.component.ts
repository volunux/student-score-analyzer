import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntityCrudControllerService } from '../../../../shared/shared-service/impl/entity-crud-controller-service';
import { Newable } from '../../../../shared/shared-service/newable';
import { Subject } from '../../model/subject';
import { SubjectServiceImpl } from '../../service/subject-service-impl';

@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.component.html',
})
export class SubjectDetailComponent extends EntityCrudControllerService<Subject> implements OnInit {

  public override $entry: Subject | null;
  protected override EntityDomain: Newable<Subject> = Subject;
  protected override entityBasePath: string = "/subject";
  public entityTitle: string = "Subject";

  constructor(protected override route: ActivatedRoute, protected override router: Router, protected override service: SubjectServiceImpl) {
    super();
  }

  ngOnInit(): void {
    this.initDetailComponent();
  }

}
