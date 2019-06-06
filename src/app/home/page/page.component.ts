import { Component, OnInit } from '@angular/core';
import{ProfileService} from '../shared/profile.service'
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  userDetails;
  constructor(private service:ProfileService) { }

  ngOnInit() {
    
  }

}
