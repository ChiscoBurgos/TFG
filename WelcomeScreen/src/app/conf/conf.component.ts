import { Component, OnInit, HostListener} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-conf',
  templateUrl: './conf.component.html',
  styleUrls: ['./conf.component.css']
})
export class ConfComponent implements OnInit {

  public innerHeight: any;
  public title = "Company name";
  
  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerHeight = window.innerHeight;
  }

  ngOnInit() {
    this.innerHeight = window.innerHeight;
  }
}
