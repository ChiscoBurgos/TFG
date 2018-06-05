import { Component } from '@angular/core';

@Component({
  selector: 'dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
  cards = [
    { title: 'Weather', cols: 1, rows: 1 },
    { title: 'Traffic', cols: 1, rows: 1 },
    { title: 'Twitter', cols: 1, rows: 1 },
    { title: 'Video', cols: 1, rows: 1 }
  ];
}
