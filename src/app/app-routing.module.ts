import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/shared-component/page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';

const routes: Routes = [
  {'path': '' , 'component' : AppComponent, 
    'children': [
      {'path': '', 'component': AppDashboardComponent}
    ]
  },
  {'path': 'student' , 'loadChildren' : () => import('./domain/student/student.module').then(m => m.StudentModule) },
  { 'path': 'subject', 'loadChildren': () => import('./domain/subject/subject.module').then(m => m.SubjectModule) },
  { 'path': 'score', 'loadChildren': () => import('./domain/score/score.module').then(m => m.ScoreModule) },
  {'path': '**' , 'component': PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      'preloadingStrategy': PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
