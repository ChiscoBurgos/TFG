import { Component, OnInit, HostListener} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-conf',
  templateUrl: './conf.component.html',
  styleUrls: ['./conf.component.css']
})
export class ConfComponent implements OnInit {

  constructor() { }

  public innerHeight: any;
  public title = "Company name";
  public city = "Burgos";
  weCheck = true;
  trCheck = true;
  twCheck = true;
  viCheck = true;
  disableWeSelect = new FormControl(false);
  disableTwSelect = new FormControl(false);
  disableTrSelect = new FormControl(false);
  disableViSelect = new FormControl(false);
  weSelectCol = new FormControl();
  trSelectCol = new FormControl();
  twSelectCol = new FormControl();
  viSelectCol = new FormControl();
  weSelectFi = new FormControl();
  trSelectFi = new FormControl();
  twSelectFi = new FormControl();
  viSelectFi = new FormControl();
  options = [1,2];

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerHeight = window.innerHeight;
  }

  ngOnInit() {
    this.innerHeight = window.innerHeight;
  }
}
