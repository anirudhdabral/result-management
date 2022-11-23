import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentResultComponent } from './student-result/student-result.component';
import { FindResultComponent } from './find-result/find-result.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    StudentResultComponent,
    FindResultComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class StudentModule { }
