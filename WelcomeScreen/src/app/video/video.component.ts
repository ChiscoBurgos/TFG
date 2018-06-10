import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { InicioComponent } from '../inicio/inicio.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  
  @ViewChild('InicioComponent') iniComp: InicioComponent;
  public navHeight: number = 72;
  public vidHeight: number = (window.innerHeight - this.navHeight)*0.45;

  constructor() { }

  public changeHeight(num){
    this.navHeight = num;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event){
    this.vidHeight = (window.innerHeight - this.navHeight)*0.45;
  }

  ngOnInit() {

  }

}
