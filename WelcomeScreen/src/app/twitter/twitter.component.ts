import { Component, OnInit, HostListener } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit {
  public navHeight: number = 72;
  public twHeight: number = (window.innerHeight - this.navHeight)*0.45;

  constructor() { }

  public changeHeight(num){
    this.navHeight = num;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event){
    this.twHeight = (window.innerHeight - this.navHeight)*0.45;
  }
  
  ngOnInit() {
  }

}
