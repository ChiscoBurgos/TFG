import { Component, OnInit, HostListener, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})

export class InicioComponent implements OnInit {

  @ViewChild('navIni') elementView: ElementRef;
  public navIniValue: number;
  public title = "Company name";
  
  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.navIniValue = this.elementView.nativeElement.offsetHeight;
  }

  ngOnInit() {
    this.navIniValue = this.elementView.nativeElement.offsetHeight;
  }

}
