import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyServiceService } from 'src/app/my-service.service';
import {FormControl,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.css']
})
export class StudentResultComponent implements OnInit {

  collection:any=[]
  constructor(private route: Router,private service: MyServiceService,private activaredRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getCurrentResult(this.activaredRouter.snapshot.params['id']).
      subscribe((result: any)=>{
      console.warn(result);
      this.collection=result;
    })
  }
  navigateToFindResult() {
    this.route.navigate(['Find-result']);
  }

}
