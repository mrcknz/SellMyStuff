/// <reference types="@types/googlemaps" />
import { Component } from '@angular/core';
import { findReadVarNames } from '@angular/compiler/src/output/output_ast';
import { ViewChild } from '@angular/core';
// import { } from '@types/googlemaps';
// import {} from "googlemaps";
// import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';

let position;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  pos = {lat: 0, lon: 0};

  getLocation = navigator.geolocation.getCurrentPosition((data)=> 
    {
      this.pos.lat = data.coords.latitude; 
      this.pos.lon = data.coords.longitude
    });

}
