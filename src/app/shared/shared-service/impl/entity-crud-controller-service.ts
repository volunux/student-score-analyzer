import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { EntityValidationErrorComponent } from '../../shared-component/entity-validation-error/entity-validation-error.component';
import { BaseCrudService } from '../base-crud-service';
import { Newable } from "../newable";
import { ValidationError } from "../validation-error";

@Component({
  'template': ''
})
export abstract class EntityCrudControllerService<T> {

  public $entry: T | null = null;
  public errObj: ValidationError | null = null;
  public errStr: string = "";
  public entityId: number = 0;
  protected abstract entityBasePath: string;
  protected abstract EntityDomain: Newable<T>;
  protected route: ActivatedRoute;
  protected abstract service: BaseCrudService<T>;
  protected router: Router;
  public entriesAvailable: boolean = false;

  @ViewChild(EntityValidationErrorComponent, {'read' : ElementRef}) errorComponent: ElementRef;

  protected setEntry(): void {

  };

  public onCreateEntity(data: any): void {
    this.$entry = new (this.EntityDomain)(data);
    this.service.saveOne(this.$entry as T)
      .subscribe({
        'next': (entry: T | null) => {
          this.$entry = entry;
          this.goBackToEntries();
        },
        'error': (error: any) => {
          if (('errorType' in error) && error['errorType'] === 'dataValidation') {
            this.errObj = error.message;
            this.scrollToErrors();
          }
          else {
            this.errStr = error.message;
          }
        },
        'complete': (() => "")
      });
  }

  protected $onUpdateEntity(data: any): void {
    this.service.updateOne(this.entityId, data)
      .subscribe({
        'next': (entry: T | null): void => {
          this.$entry = entry;
          this.goBackToEntries();
        },
        'error': (error: any) => {
          if (('errorType' in error) && error['errorType'] === 'dataValidation') {
            this.errObj = error.message;
            this.scrollToErrors();
          }
          else {
            this.errStr = error.message;
          }
        },
        'complete': (() => "")
      });
  }

  public onDeleteEntity(data: any): void {
    this.service.deleteOne(this.entityId)
      .subscribe({
        'next': (entry: boolean): void => {
          this.goBackToEntries();
        },
        'error': (error: any) => {
          if (('errorType' in error) && error['errorType'] === 'dataValidation') {
            this.errObj = error.message;
            this.scrollToErrors();
          }
          else {
            this.errStr = error.message;
          }
        },
        'complete': (() => "")
      });
  }

  public deleteAllEntries(): void {
    this.service.deleteAll()
      .subscribe((deleted: boolean) => {
        window.location.href = `${this.entityBasePath.substring(this.entityBasePath.indexOf('/') + 1)}/`;
      });
  }

  public initDetailComponent(): void {
    this.route.paramMap.subscribe((param) => {
      const id = Number(param.get('id'));
      this.service.findOne(id)
        .subscribe({
          'next': (entry: T | null) => {
            this.$entry = entry;
          },
          'error': (error: any) => {
            this.errStr = error.message;
          },
          'complete': () => console.log('Complete')
        });
    });

  }

  protected initAddComponent(): void {

  }
  
  protected initUpdateComponent(): void {
    this.route.paramMap.subscribe((param: ParamMap): any => {
      this.entityId = Number(param.get('id'));

      this.service.findOne(this.entityId)
        .subscribe({
          'next': (entry: T | null): void => {
            this.$entry = entry;
            this.setEntry();
          },
          'error': (error: any) => {
            this.errStr = error.message;
          },
          'complete': (() => "")
        });
    });
  }

  protected initDeleteComponent(): void {
    this.route.paramMap.subscribe((param: ParamMap): any => {
      this.entityId = Number(param.get('id'));

      this.service.findOne(this.entityId)
        .subscribe({
          'next': (entry: T | null): void => {
            this.$entry = entry;
            this.setEntry();
          },
          'error': (error: any) => {
            this.errStr = error.message;
          },
          'complete': (() => "")
        });
    });
  }

  public onUpdateEntity(data: any): void {
    this.$entry = new (this.EntityDomain)(data);
    this.$onUpdateEntity(this.$entry);
  }

  public initDeleteAllComponent(): void {
    this.service.removeAll()
      .subscribe((toDelete: boolean) => {
        this.entriesAvailable = toDelete;
      });
  }

  protected goBackToEntries(): void {
    if (this.entityBasePath === "/") {
      this.router.navigate([this.entityBasePath]);
    }
    else {
      this.router.navigate([`${this.entityBasePath}/entries`])
    }
  }

  private scrollToErrors(): void {
    this.errorComponent.nativeElement.scrollIntoView({ 'behavior': 'smooth', 'block': 'nearest' });
  }
  
}
