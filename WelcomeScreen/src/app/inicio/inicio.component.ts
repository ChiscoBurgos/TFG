import { Component, OnInit } from '@angular/core';
import {HostListener} from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})

export class InicioComponent implements OnInit {

  innerHeight = window.innerHeight;
  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerHeight = window.innerHeight;
  }
  ngOnInit() {
  }

}
