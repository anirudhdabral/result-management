import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FindResultComponent } from './student/find-result/find-result.component';
import { StudentResultComponent } from './student/student-result/student-result.component';
import { AddRecordComponent } from './teacher/add-record/add-record.component';
import { AllResultsComponent } from './teacher/all-results/all-results.component';
import { EditResultComponent } from './teacher/edit-result/edit-result.component';
import { LoginComponent } from './teacher/login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    component: HomeComponent,
    path: ''
  },
  {
    component: HomeComponent,
    path: 'home'
  },
  {
    component: LoginComponent,
    path: 'Teacher-login'
  },
  {
    component: FindResultComponent,
    path: 'Find-result'
  },
  {
    component: StudentResultComponent,
    path: 'student-result/:id'
  },
  {
    component: AllResultsComponent,
    path: 'all-results',
    canActivate: [AuthGuard]
  },
  {
    component: AddRecordComponent,
    path: 'add-result',
    canActivate: [AuthGuard]
  },
  {
    component: EditResultComponent,
    path: 'edit-result/:id',
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
