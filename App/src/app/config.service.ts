import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Address } from './Address';
import { Observable } from 'rxjs';
import { AppComponent } from './app.component'
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  
  private pos = {lat: 0, lon: 0};

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
  // Observable.create(observer => {
  //   this.http.get('https://restcountries.eu/rest/v2/name/spain')
  // })

   getQuote(): Observable<any> {

    return Observable.create(observer => {
      this.getAddress().subscribe(addressData => {
        this.http.get(`https://restcountries.eu/rest/v2/name/${addressData.address.country}`).subscribe(countryData=> { 
          observer.next(
            // addressData
              // this.http.get<Address>(
              //   `https://nominatim.openstreetmap.org/reverse?format=json&lat=41.394946&lon=2.1976678`

                this.http.post(
                  `https://sandbox-api.postmen.com/v3/rates`,

                  {
                    "async": false,
                    "shipper_accounts": [
                      
                      {
                        "id": "a2b8a970-6fe5-4491-b9e2-8e3a6d17cd08"
                      }
                    ],
                    "shipment": {
                      "parcels": [
                        {
                          "description": "Food XS",
                          "box_type": "custom",
                          "weight": {
                            "value": 1,
                            "unit": "kg"
                          },
                          "dimension": {
                            "width": 20,
                            "height": 40,
                            "depth": 40,
                            "unit": "cm"
                          },
                          "items": [
                            {
                              "description": "Foooood Bar",
                              "origin_country": "ESP",
                              "quantity": 1,
                              "price": {
                                "amount": 3,
                                "currency": "JPY"
                              },
                              "weight": {
                                "value": 1,
                                "unit": "kg"
                              }
                              
                            }
                          ]
                        }
                      ],
                      "ship_from": {
                        "contact_name": "Someone in BCN",
                        "street1": `${addressData.address.road}`,
                        "city": `${addressData.address.city}`,
                        "state": "Catalonia",
                        "country": `${countryData[0].cioc}`,
                        // https://restcountries.eu/rest/v2/name/germany
                        "postal_code": `${addressData.address.postcode}`
                      },
                      "ship_to": {
                        "contact_name": "Someone in Essen",
                        "street1": "Dorstener str. 6",
                        "city": "Essen",
                        "state": "NRW",
                        "country": "DEU",
                        "postal_code": "45143"
                      }
                    }
                  },

                  {
                    headers: new HttpHeaders({
                      'content-type':  'application/json',
                      'postmen-api-key':'79346888-11a0-493c-9ff7-2633ca0bc0c9'
                    })
                  }



                ).subscribe(data=>observer.next(data))
          )
        })
      })
    
    })




  }

  



  
}
