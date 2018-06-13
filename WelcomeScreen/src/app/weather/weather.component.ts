import { Component, OnInit, HostListener } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WeatherService } from './weather.service';
import { Observable } from 'rxjs';
import { City } from './city';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {
  public navHeight: number = 72;
  public weHeight: number = (window.innerHeight - this.navHeight)*0.45;
  public cities: City[];
  public citySelected: City;
  public cityName: string = "Madrid";
  headers;
  error;

  constructor(private weatherService: WeatherService) { }

  public changeHeight(num){
    this.navHeight = num;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event){
    this.weHeight = (window.innerHeight - this.navHeight)*0.45;
  }
  
  public getCities(){
    this.weatherService.getCities()
      .subscribe(resp => {
        // display its headers
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);

        // access the body directly.
        this.cities = [ ... resp.body ];
      
        this.citySelected = this.cities.find(
          c => c.name === this.cityName
        );
      },
        error => this.error = error);
  }

  ngOnInit() {
    this.getCities();
  }

}
