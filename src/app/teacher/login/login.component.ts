import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { MyServiceService } from 'src/app/my-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authError:boolean = false;

  loginForm = new FormGroup({
    teacherId: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })
  collection = {}

  constructor(private service: MyServiceService, public route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }
  onSubmit() {
    this.service.findTeacher(this.loginForm.value);
    this.service.isLoginError.subscribe((isError) => {
      if (isError) {
        this.authError = true;
      }
    })
  }
  get teacherId() { return this.loginForm.get('teacherId') }
  get password() { return this.loginForm.get('password') }

}
