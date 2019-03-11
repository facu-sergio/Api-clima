import { Component, OnInit } from '@angular/core';
import {WeatherService } from './services/weather.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  clima;

  constructor( private weatherservices:WeatherService){

  }

  ngOnInit(){
    
  }
  
  getWeather(nombreCiudad:string, paisCode:string){
    this.weatherservices.getWeather(nombreCiudad,paisCode)
      .subscribe(
        res=>{ 
        this.clima = res,
        console.log(res)
      },
        err => console.log(err)
      )
  }

  submitLocation(nombreCiudad:HTMLInputElement,paisCode:HTMLInputElement ){
    this.getWeather(nombreCiudad.value,paisCode.value);
    nombreCiudad.value='';
    paisCode.value='';
    nombreCiudad.focus();
    return false;
  }
}
