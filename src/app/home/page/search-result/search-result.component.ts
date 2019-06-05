import { Component, OnInit } from '@angular/core';
import {SearchService} from 'src/app/home/shared/search.service'

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  constructor(private service: SearchService) { }
  users: any[];
  ngOnInit() {
    // this.service.getProfile().subscribe(
    //   res=>{
    //     this.userDetails = res;     
    //   },
    //   err=>{
    //     console.log(err);
    //   },
    // );
  }
  
  onSubmit(query: string)
  {
    this.service.search(query).subscribe(
      res=>{
        this.users = res; 
        console.log(this.users);
      },
      err=>{
        console.log(err);
      }
       );
      }
}
