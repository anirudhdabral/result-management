import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-find-result',
  templateUrl: './find-result.component.html',
  styleUrls: ['./find-result.component.css']
})
export class FindResultComponent implements OnInit {
  notFoundError: boolean = false;
  maxDate = new Date;
  minDate:any = new Date(1900, 0, 1);

  findResult = new FormGroup({
    rollno: new FormControl('',[ Validators.required,Validators.min(10000),Validators.max(99999)]),
    dob: new FormControl('', Validators.required)
  })
  constructor(private router: Router, private activeRouter: ActivatedRoute, private service: MyServiceService) { }

  ngOnInit(): void {
  }
  find() {
    this.service.findResult(this.findResult.value);
    this.service.isResultFound.subscribe((isError) => {
      if (isError) {
        this.notFoundError = true;
      }
    });
  }
  
  get rollno() { return this.findResult.get('rollno') }
  get dob() { return this.findResult.get('dob') }


}
