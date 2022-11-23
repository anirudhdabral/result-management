import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-edit-result',
  templateUrl: './edit-result.component.html',
  styleUrls: ['./edit-result.component.css']
})
export class EditResultComponent implements OnInit {
  maxDate = new Date;
  minDate = new Date(1900,0,1);
  
  editResult = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    score: new FormControl('', Validators.required)
  })
  constructor(private route: Router, private activaredRouter: ActivatedRoute, private service: MyServiceService) { }
  ngOnInit(): void {
    this.service.getCurrentResult(this.activaredRouter.snapshot.params['id']).
      subscribe((result: any) => {
        this.editResult = new FormGroup({
          id: new FormControl(result['id']),
          name: new FormControl(result['name'],Validators.required),
          dob: new FormControl(result['dob'],Validators.required),
          score: new FormControl(result['score'],[Validators.required,Validators.max(100),Validators.min(0)])
        })
      });
  }
  navigateToAllResults() {
    this.route.navigate(['all-results']);
  }
  update(){
    this.service.updateResult(this.activaredRouter.snapshot.params['id'],this.editResult.value).subscribe((result:any)=>{
      this.navigateToAllResults();
    })
  }
  get name(){return this.editResult.get('name')}
  get dob(){return this.editResult.get('dob')}
  get score(){return this.editResult.get('score')}

}
