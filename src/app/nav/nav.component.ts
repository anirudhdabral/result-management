import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  check: boolean = true;
  logoutMessage: boolean = false;

  constructor(private service: MyServiceService, private router: Router) {
    this.service.isTeacherLoggedIn.subscribe((result) => {
      this.check = result;
      this.logoutMessage = false;
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem('teacher')) {
    }
    else {
      this.check = false;
    }
  }

  logout() {
    localStorage.removeItem('teacher');
    this.router.navigate(['home']);
    this.logoutMessage = true;
    this.ngOnInit();
  }

}
