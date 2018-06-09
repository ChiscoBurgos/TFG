import { Component, OnInit, HostListener } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public innerHeight: any;
  public mapHeight: any;

  @HostListener('window:resize', ['$event']) 
  onResize(event){
    this.innerHeight = window.innerHeight;
    this.mapHeight = this.innerHeight-100;
  }

  constructor() { }
  
  ngOnInit() {
    this.innerHeight = window.innerHeight;
    this.mapHeight = this.innerHeight-100;
  }
/*
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var geocoder = new google.maps.Geocoder();

    //this.geocodeAddress(geocoder, mapProp);

    var trafficLayer = new google.maps.TrafficLayer();
   // trafficLayer.setMap(mapProp);

    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

  /*geocodeAddress(geocoder, resultsMap) {
    var address = "Burgos"; //Nombre de la ciudad
    geocoder.geocode({ 'address': address }, function (results, status) {
      if (status === 'OK') {
        resultsMap.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: resultsMap,
            position: results[0].geometry.location
        });
        var latitud = marker.getPosition().lat;
        var longitud = marker.getPosition().lng;
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  };
*/
}
