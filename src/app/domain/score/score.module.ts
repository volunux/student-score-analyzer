import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedComponentModule } from '../../shared/shared-component/shared-component.module';
import { ScoreAddComponent } from './component/score-add/score-add.component';
import { ScoreDashboardComponent } from './component/score-dashboard/score-dashboard.component';
import { ScoreDeleteAllComponent } from './component/score-delete-all/score-delete-all.component';
import { ScoreEntriesComponent } from './component/score-entries/score-entries.component';
import { ScoreComponent } from './component/score/score.component';
import { StudentScoreAnalysisComponent } from './component/student-score-analysis/student-score-analysis.component';
import { StudentScoreDetailComponent } from './component/student-score-detail/student-score-detail.component';
import { ScoreSubjectCodeComponent } from './form-control/score-subject-code/score-subject-code.component';
import { ScoreSubjectMarkComponent } from './form-control/score-subject-mark/score-subject-mark.component';
import { ScoreSubjectTitleComponent } from './form-control/score-subject-title/score-subject-title.component';
import { ScoreRoutingModule } from './score-routing.module';
import { ScoreEntityValidationService } from './service/score-entity-validation-service';
import { ScoreFormBuilderService } from './service/score-form-builder-service';
import { ScoreServiceImpl } from './service/score-service-impl';
import { ScoreSubjectMarkValidatorComponent } from './validator/score-subject-mark-validator/score-subject-mark-validator.component';



@NgModule({
  declarations: [
    StudentScoreAnalysisComponent,
    ScoreAddComponent,
    ScoreDashboardComponent,
    ScoreComponent,
    ScoreSubjectTitleComponent,
    ScoreSubjectMarkComponent,
    ScoreSubjectMarkValidatorComponent,
    ScoreEntriesComponent,
    ScoreDeleteAllComponent,
    ScoreSubjectCodeComponent,
    StudentScoreDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedComponentModule,
    ScoreRoutingModule,
  ],
  providers: [
    ScoreServiceImpl,
    ScoreFormBuilderService,
    ScoreEntityValidationService
  ]
})
export class ScoreModule { }
