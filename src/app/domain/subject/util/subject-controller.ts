import { AbstractControl } from '@angular/forms';
import { BaseCrudServiceImpl } from '../../../shared/shared-service/impl/base-crud-service-impl';
import { EntityControllerService } from '../../../shared/shared-service/impl/entity-controller-service';
import { EntityFormBuilderService } from '../../../shared/shared-service/impl/entity-form-builder-service';
import { Newable } from '../../../shared/shared-service/newable';
import { Subject } from '../model/subject';

export abstract class SubjectController extends EntityControllerService<Subject> {

  protected efbs: EntityFormBuilderService;
  protected entityBasePath: string = "/subject";
  protected EntityDomain: Newable<Subject> = Subject;
  protected service: BaseCrudServiceImpl<Subject>;
  public override $entry: Subject | null = null;
  public entityTitle: string = "Subject";

  constructor() {
    super();
  }

  get id(): AbstractControl | null {
    return this.getEntityForm().get('id');
  }

  get title(): AbstractControl | null {
    return this.getEntityForm().get('title');
  }

  get code(): AbstractControl | null {
    return this.getEntityForm().get('code');
  }

  get year(): AbstractControl | null {
    return this.getEntityForm().get('year');
  }
}
