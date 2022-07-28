import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedComponentModule } from '../../shared/shared-component/shared-component.module';
import { SubjectAddComponent } from './component/subject-add/subject-add.component';
import { SubjectDashboardComponent } from './component/subject-dashboard/subject-dashboard.component';
import { SubjectDeleteAllComponent } from './component/subject-delete-all/subject-delete-all.component';
import { SubjectDeleteComponent } from './component/subject-delete/subject-delete.component';
import { SubjectDetailComponent } from './component/subject-detail/subject-detail.component';
import { SubjectEntriesComponent } from './component/subject-entries/subject-entries.component';
import { SubjectUpdateComponent } from './component/subject-update/subject-update.component';
import { SubjectComponent } from './component/subject/subject.component';
import { SubjectCodeComponent } from './form-control/subject-code/subject-code.component';
import { SubjectTitleComponent } from './form-control/subject-title/subject-title.component';
import { SubjectYearComponent } from './form-control/subject-year/subject-year.component';
import { SubjectRoutingModule } from './subject-routing.module';
import { SubjectCodeValidatorComponent } from './validator/subject-code-validator/subject-code-validator.component';
import { SubjectTitleValidatorComponent } from './validator/subject-title-validator/subject-title-validator.component';
import { SubjectYearValidatorComponent } from './validator/subject-year-validator/subject-year-validator.component';
import { SubjectServiceImpl } from './service/subject-service-impl';
import { SubjectFormBuilderService } from './service/subject-form-builder-service';
import { SubjectEntityValidationService } from './service/subject-entity-validation-service';



@NgModule({
  declarations: [
    SubjectAddComponent,
    SubjectUpdateComponent,
    SubjectDeleteComponent,
    SubjectDetailComponent,
    SubjectEntriesComponent,
    SubjectDeleteAllComponent,
    SubjectDashboardComponent,
    SubjectComponent,
    SubjectTitleValidatorComponent,
    SubjectCodeValidatorComponent,
    SubjectYearValidatorComponent,
    SubjectTitleComponent,
    SubjectCodeComponent,
    SubjectYearComponent
  ],
  imports: [
    CommonModule,
    SubjectRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedComponentModule
  ],
  providers: [
    SubjectServiceImpl,
    SubjectFormBuilderService,
    SubjectEntityValidationService
  ]
})
export class SubjectModule { }
