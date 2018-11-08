import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Address } from './Address';
import { Observable } from 'rxjs';
import { AppComponent } from './app.component'


@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  
  private pos = {lat: 0, lon: 0};
  // private url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${this.pos.lat}&lon=${this.pos.lon}`

  constructor(private http: HttpClient) { }

  getLocation() {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    };

    navigator.geolocation.getCurrentPosition((data)=> 
      {
        // console.log('get location run');
        this.pos.lat = data.coords.latitude; 
        this.pos.lon = data.coords.longitude
      }, error, options);
    return this.pos;
  ;} 

  getAddress(): Observable<any> {
    return Observable.create(observer => {
      navigator.geolocation.getCurrentPosition (
        (data) => {
          this.http.get<Address>(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${data.coords.latitude}&lon=${data.coords.longitude}`)
            .subscribe(res => {observer.next(res)})
        },
        (error) => {
          observer.error(error)
        }
      )
    })  
  }

  



  
}
