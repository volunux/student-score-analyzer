import { FormGroup } from '@angular/forms';
import { EntityCrudControllerService } from "./entity-crud-controller-service";
import { EntityFormBuilderService } from "./entity-form-builder-service";

export abstract class EntityControllerService<T> extends EntityCrudControllerService<T> {

  public entityForm: FormGroup = new FormGroup({});
  protected abstract efbs: EntityFormBuilderService;

  constructor() {
    super();
  }

  get isCtrlDisabled(): boolean {
    return false;
  }

  protected getEntityForm(): FormGroup {
    return this.entityForm;
  }

  public setForm(formGroup: FormGroup): void {
    this.entityForm = formGroup;
  }

  protected override initUpdateComponent(): void {
    this.setForm(this.efbs.getEntityUpdateForm());
    super.initUpdateComponent();
  }

  protected override initDeleteComponent(): void {
    this.setForm(this.efbs.getEntityDeleteForm());
    super.initDeleteComponent();
  }

  protected override setEntry(data?: any): void {
    if (this.$entry !== null) {
      this.entityForm.patchValue(this.$entry);
    }
  }
}
