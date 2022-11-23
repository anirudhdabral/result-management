import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllResultsComponent } from './all-results/all-results.component';
import { AddRecordComponent } from './add-record/add-record.component';
import { EditResultComponent } from './edit-result/edit-result.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component'
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AllResultsComponent,
    AddRecordComponent,
    EditResultComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class TeacherModule { }
