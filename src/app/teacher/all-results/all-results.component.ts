import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from 'src/app/my-service.service';
import { ActivatedRoute } from '@angular/router';
import { R3SelectorScopeMode } from '@angular/compiler';

@Component({
  selector: 'app-all-results',
  templateUrl: './all-results.component.html',
  styleUrls: ['./all-results.component.css']
})
export class AllResultsComponent implements OnInit {
  collection:any=[]
  noOfItems=0
  constructor(private router: Router,private service:MyServiceService) { }

  ngOnInit(): void {
    this.service.reloadAllResults();
    this.getAllResults();
  }

  getAllResults(){
    this.service.getList().subscribe((result)=>{
      this.collection=result;
      this.noOfItems = this.collection.length;
    });
  }
  navigateToAddResult(){
    this.router.navigate(['add-result']);
  }
  deleteResult(item:any){
    this.service.deleteResult(item).subscribe((result)=>{
      this.getAllResults()
    })
  }

}
