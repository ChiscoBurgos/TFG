import { Component, OnInit, HostListener } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public navHeight: number = 72;
  public weHeight: number = (window.innerHeight - this.navHeight)*0.45;

  constructor() { }

  public changeHeight(num){
    this.navHeight = num;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event){
    this.weHeight = (window.innerHeight - this.navHeight)*0.45;
  }

  ngOnInit() {
  }

}
