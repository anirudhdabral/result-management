import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup } from '@angular/forms'
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {
  maxDate = new Date;
  minDate = new Date(1900,0,1);
  isPresent:boolean = false;

  addResult = new FormGroup({
    id: new FormControl('',[Validators.required,Validators.min(10000),Validators.max(99999)]),
    name: new FormControl('',Validators.required),
    dob: new FormControl('',Validators.required),
    score: new FormControl('',[Validators.required,Validators.max(100),Validators.min(0)])
  })

  constructor(private route: Router,private service:MyServiceService) { }

  ngOnInit(): void {
    this.service.reloadAddResult();
  }
  navigateToAllResults() {
    this.route.navigate(['all-results']);
  }

  collectResult() {
    this.isPresent=true;
    this.service.saveResult(this.addResult.value).subscribe((result:any)=>{
      this.navigateToAllResults();
      this.isPresent = false;
    });
  }
  get id(){return this.addResult.get('id')}
  get name(){return this.addResult.get('name')}
  get dob(){return this.addResult.get('dob')}
  get score(){return this.addResult.get('score')}
}
