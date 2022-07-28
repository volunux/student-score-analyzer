import { AbstractControl } from '@angular/forms';
import { BaseCrudServiceImpl } from '../../../shared/shared-service/impl/base-crud-service-impl';
import { EntityControllerService } from '../../../shared/shared-service/impl/entity-controller-service';
import { EntityFormBuilderService } from '../../../shared/shared-service/impl/entity-form-builder-service';
import { Newable } from '../../../shared/shared-service/newable';
import { Student } from '../model/student';

export abstract class StudentController extends EntityControllerService<Student> {

  protected efbs: EntityFormBuilderService;
  protected entityBasePath: string = "/student";
  protected EntityDomain: Newable<Student> = Student;
  protected service: BaseCrudServiceImpl<Student>;
  public override $entry: Student | null = null;
  public entityTitle: string = "Student";

  constructor() {
    super();
  }

  get id(): AbstractControl | null {
    return this.getEntityForm().get('id');
  }

  get admissionNumber(): AbstractControl | null {
    return this.getEntityForm().get('admissionNumber');
  }

  get firstName(): AbstractControl | null {
    return this.getEntityForm().get('firstName');
  }

  get lastName(): AbstractControl | null {
    return this.getEntityForm().get('lastName');
  }

  get emailAddress(): AbstractControl | null {
    return this.getEntityForm().get('emailAddress');
  }

  get homeAddress(): AbstractControl | null {
    return this.getEntityForm().get('homeAddress');
  }
}
