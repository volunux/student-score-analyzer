import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentDashboardComponent } from './component/student-dashboard/student-dashboard.component';
import { StudentEntriesComponent } from './component/student-entries/student-entries.component';
import { StudentDetailComponent } from './component/student-detail/student-detail.component';
import { StudentAddComponent } from './component/student-add/student-add.component';
import { StudentUpdateComponent } from './component/student-update/student-update.component';
import { StudentDeleteComponent } from './component/student-delete/student-delete.component';
import { StudentDeleteAllComponent } from './component/student-delete-all/student-delete-all.component';
import { StudentComponent } from './component/student/student.component';


const routes: Routes = [
  {'path' : '' , 'component' : StudentComponent, 
    'children' : [
      {'path' : '' , 'component' : StudentDashboardComponent},
      {'path' : 'entries' , 'component' : StudentEntriesComponent},
      {'path' : 'detail/:id' , 'component': StudentDetailComponent},
      {'path' : 'add' , 'component' : StudentAddComponent},
      {'path' : 'update/:id', 'component' : StudentUpdateComponent},
      {'path' : 'delete/:id', 'component' : StudentDeleteComponent},
      {'path' : 'delete/entries/all', 'component' : StudentDeleteAllComponent}
  ]}
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
export class StudentRoutingModule { }
