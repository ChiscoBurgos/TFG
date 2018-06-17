import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InicioComponent } from '../inicio/inicio.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @ViewChild('InicioComponent') iniComp: InicioComponent;
  public navHeight: number = 72;
  public mapHeight: number = (window.innerHeight - this.navHeight)*0.45;
  positions:any;
  ciudad: string = "Burgos";

  constructor() { }

  public changeHeight(num){
    this.navHeight = num;
  }

  public changeCity(city){
    this.ciudad = city;
  }

  public getMapHeight(): number{
    return this.mapHeight;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event){
    this.mapHeight = (window.innerHeight - this.navHeight)*0.45;
  }

  ngOnInit() {
    
  };

  //Ng2-ui maps methods
  onMapReady(map) {
    console.log('map', map);
    console.log('markers', map.markers);  // to get all markers as an array 
  }
  onIdle(event) {
    console.log('map', event.target);
  }
  onMarkerInit(marker) {
    console.log('marker', marker);
  }
  onMapClick(event) {
    this.positions.push(event.latLng);
    event.target.panTo(event.latLng);
  }

}
