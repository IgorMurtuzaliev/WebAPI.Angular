import { Component, OnInit,Input  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../../shared/contact.service'
@Component({
  selector: 'app-shoosen-contact',
  templateUrl: './shoosen-contact.component.html',
  styleUrls: ['./shoosen-contact.component.css']
})
export class ShoosenContactComponent implements OnInit {
  @Input() contact:any;
  id:number;
  constructor(activeRoute: ActivatedRoute, private service: ContactService) { 
  }
  
  ngOnInit() {
  }

}
