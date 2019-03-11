import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  URI:string;
  apiKey = '1f1545fb9ff16b8dc2a8bb232dfe8204'
  constructor(private http : HttpClient) { 
    this.URI =  `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`
  }
  getWeather(cityName: string , countryCode:string){
    return this.http.get(`${this.URI}${cityName},${countryCode}`);
  }
}
