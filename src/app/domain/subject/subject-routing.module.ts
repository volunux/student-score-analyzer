import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectAddComponent } from './component/subject-add/subject-add.component';
import { SubjectDashboardComponent } from './component/subject-dashboard/subject-dashboard.component';
import { SubjectDeleteAllComponent } from './component/subject-delete-all/subject-delete-all.component';
import { SubjectDeleteComponent } from './component/subject-delete/subject-delete.component';
import { SubjectDetailComponent } from './component/subject-detail/subject-detail.component';
import { SubjectEntriesComponent } from './component/subject-entries/subject-entries.component';
import { SubjectUpdateComponent } from './component/subject-update/subject-update.component';
import { SubjectComponent } from './component/subject/subject.component';


const routes: Routes = [
  {
    'path': '', 'component': SubjectComponent,
    'children': [
      { 'path': '', 'component': SubjectDashboardComponent },
      { 'path': 'entries', 'component': SubjectEntriesComponent },
      { 'path': 'detail/:id', 'component': SubjectDetailComponent },
      { 'path': 'add', 'component': SubjectAddComponent },
      { 'path': 'update/:id', 'component': SubjectUpdateComponent },
      { 'path': 'delete/:id', 'component': SubjectDeleteComponent },
      { 'path': 'delete/entries/all', 'component': SubjectDeleteAllComponent }
    ]
  }
]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SubjectRoutingModule { }
