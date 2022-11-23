import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  resultUrl = "http://localhost:3000/results"
  teacherUrl = "http://localhost:3000/teacher"

  isTeacherLoggedIn = new BehaviorSubject<boolean>(false)
  isLoginError = new EventEmitter<boolean>(false)
  isResultFound = new EventEmitter<boolean>(false)

  constructor(private http: HttpClient, private router: Router) { }
  getList() {
    return this.http.get(this.resultUrl);
  }
  saveResult(data: any) {
    return this.http.post(this.resultUrl, data);
  }
  deleteResult(id: any) {
    return this.http.delete(`${this.resultUrl}/${id}`);
  }
  getCurrentResult(id: any) {
    return this.http.get(`${this.resultUrl}/${id}`);
  }
  updateResult(id: any, data: any) {
    return this.http.put(`${this.resultUrl}/${id}`, data);
  }
  findResult(data: any) {
    return this.http.get(`${this.resultUrl}?id=${data.rollno}&dob=${data.dob}`, { observe: 'response' }).subscribe((result: any) => {
      if (result && result.body && result.body.length === 1) {
        this.router.navigate(['student-result/', data.rollno])
      } else {
        this.isResultFound.emit(true);
      }
    })
  }

  findTeacher(data: any) {
    return this.http.get(`${this.teacherUrl}?id=${data.teacherId}&password=${data.password}`, { observe: 'response' }).subscribe((result: any) => {
      if (result && result.body && result.body.length === 1) {
        this.isTeacherLoggedIn.next(true);
        localStorage.setItem('teacher', JSON.stringify(result.body))
        this.router.navigate(['all-results']);

      } else {
        this.isLoginError.emit(true);
      }
    });
  }
  reloadAllResults() {
    if (localStorage.getItem('teacher')) {
      this.isTeacherLoggedIn.next(true);
      this.router.navigate(['all-results']);
    }
  }
  reloadAddResult() {
    if (localStorage.getItem('teacher')) {
      this.isTeacherLoggedIn.next(true);
      this.router.navigate(['add-result']);
    }
  }

}

