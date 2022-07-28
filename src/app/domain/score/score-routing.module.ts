import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScoreAddComponent } from './component/score-add/score-add.component';
import { ScoreDashboardComponent } from './component/score-dashboard/score-dashboard.component';
import { ScoreDeleteAllComponent } from './component/score-delete-all/score-delete-all.component';
import { ScoreEntriesComponent } from './component/score-entries/score-entries.component';
import { ScoreComponent } from './component/score/score.component';
import { StudentScoreDetailComponent } from './component/student-score-detail/student-score-detail.component';
import { StudentScoreAnalysisComponent } from './component/student-score-analysis/student-score-analysis.component';


const routes: Routes = [
  {
    'path': '', 'component': ScoreComponent,
    'children': [
      { 'path': '', 'component': ScoreDashboardComponent },
      { 'path': 'entries', 'component': ScoreEntriesComponent },
      { 'path': 'detail/:studentId' , 'component': StudentScoreDetailComponent},
      { 'path': 'analysis/:studentId', 'component': StudentScoreAnalysisComponent},
      { 'path': 'update/:studentId', 'component': ScoreAddComponent },
      { 'path': 'delete/entries/all', 'component': ScoreDeleteAllComponent }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ScoreRoutingModule { }
