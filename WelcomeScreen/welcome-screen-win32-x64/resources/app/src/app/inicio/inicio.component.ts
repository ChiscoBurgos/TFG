import { Component, OnInit, HostListener, ElementRef, ViewChild} from '@angular/core';
import { MapComponent } from '../map/map.component';
import { VideoComponent } from '../video/video.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})

export class InicioComponent implements OnInit {

  @ViewChild('navIni') navIni: ElementRef;
  @ViewChild('MapComponent') mapComp: MapComponent;
  @ViewChild('VideoComponent') vidComp: VideoComponent;
  public navIniValue: number;
  public title = "Company name";
  
  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.navIniValue = this.navIni.nativeElement.offsetHeight;
    this.mapComp.changeHeight(this.navIniValue);
    this.vidComp.changeHeight(this.navIniValue);
  }

  ngOnInit() {
    this.navIniValue = this.navIni.nativeElement.offsetHeight;
  }
}
