import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedComponentModule } from '../../shared/shared-component/shared-component.module';
import { StudentAddComponent } from './component/student-add/student-add.component';
import { StudentDashboardComponent } from './component/student-dashboard/student-dashboard.component';
import { StudentDeleteAllComponent } from './component/student-delete-all/student-delete-all.component';
import { StudentDeleteComponent } from './component/student-delete/student-delete.component';
import { StudentDetailComponent } from './component/student-detail/student-detail.component';
import { StudentEntriesComponent } from './component/student-entries/student-entries.component';
import { StudentUpdateComponent } from './component/student-update/student-update.component';
import { StudentComponent } from './component/student/student.component';
import { StudentAdmissionNumberComponent } from './form-control/student-admission-number/student-admission-number.component';
import { StudentEmailAddressComponent } from './form-control/student-email-address/student-email-address.component';
import { StudentFirstNameComponent } from './form-control/student-first-name/student-first-name.component';
import { StudentHomeAddressComponent } from './form-control/student-home-address/student-home-address.component';
import { StudentLastNameComponent } from './form-control/student-last-name/student-last-name.component';
import { StudentEntityValidationService } from './service/student-entity-validation-service';
import { StudentFormBuilderService } from './service/student-form-builder-service';
import { StudentServiceImpl } from './service/student-service-impl';
import { StudentRoutingModule } from './student-routing.module';
import { StudentAdmissionNumberValidatorComponent } from './validator/student-admission-number-validator/student-admission-number-validator.component';
import { StudentEmailAddressValidatorComponent } from './validator/student-email-address-validator/student-email-address-validator.component';
import { StudentFirstNameValidatorComponent } from './validator/student-first-name-validator/student-first-name-validator.component';
import { StudentHomeAddressValidatorComponent } from './validator/student-home-address-validator/student-home-address-validator.component';
import { StudentLastNameValidatorComponent } from './validator/student-last-name-validator/student-last-name-validator.component';



@NgModule({
  declarations: [
    StudentAddComponent,
    StudentUpdateComponent,
    StudentDeleteComponent,
    StudentDetailComponent,
    StudentEntriesComponent,
    StudentDeleteAllComponent,
    StudentDashboardComponent,
    StudentFirstNameComponent,
    StudentLastNameComponent,
    StudentEmailAddressComponent,
    StudentAdmissionNumberComponent,
    StudentHomeAddressComponent,
    StudentHomeAddressValidatorComponent,
    StudentEmailAddressValidatorComponent,
    StudentLastNameValidatorComponent,
    StudentFirstNameValidatorComponent,
    StudentAdmissionNumberValidatorComponent,
    StudentComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedComponentModule,
    StudentRoutingModule
  ],
  providers: [
    StudentServiceImpl,
    StudentFormBuilderService,
    StudentEntityValidationService
  ]
})
export class StudentModule { }
