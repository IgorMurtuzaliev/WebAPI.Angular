import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedService } from '../../account/shared/logged.service';
import { ProfileService } from 'src/app/home/shared/profile.service'
import { SearchResultComponent } from '../page/search-result/search-result.component';
import { HeaderService } from '../shared/header.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private token:boolean;
  constructor(private router:Router, private service: ProfileService, private headerService: HeaderService) { }
  userDetails;
  searchQuery:any;
  private search:SearchResultComponent
  ngOnInit() {
    this.service.getProfile().subscribe(
      res => {  
        this.userDetails = res;
      },
      err => {
        console.log(err);
      },
    );
    this.headerService.currentName.subscribe(res=> {
      this.userDetails = res
    })
    this.headerService.currentImg.subscribe(res=> {
      this.userDetails = res
    })
  }
  onLogout(){
    this.headerService.disconnect().subscribe(
      res => {
        console.log("wewewegwe");
      },
      err => {
        console.log(err);
      },
    );
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  onSearch(searchQuery){
    console.log(searchQuery)
    this.searchQuery = searchQuery;
    this.router.navigate(['/home/page/search', this.searchQuery]);
    this.searchQuery = '';
  }
}
