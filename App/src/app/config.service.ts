import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Address } from './Address';
import { Observable, BehaviorSubject } from 'rxjs';
import { Ad } from './ad';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private pos = { lat: 0, lon: 0 };
  private apiUrl = 'http://localhost:3000/ads';
  private searchResults = new BehaviorSubject([]);

  constructor(private http: HttpClient) {}

  getAds(): Observable<any> {
    return this.http.get(this.apiUrl);

    // return Observable.create(observer=> {
    //   this.http.get('http://localhost:3000').subscribe(res => {observer.next(res)})
    // })
  }

  getSearchResults$(): Observable<any[]> {
    return this.searchResults.asObservable();
  }

  search(queryString: string) {
    this.http.get(`${this.apiUrl}/search/?q=${queryString}`).subscribe((response: Ad[]): void => {
      console.log('response', response);
      this.searchResults.next(response);
    });
  }

  getAd(id): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  postAds(ad): Observable<any> {
    const response = this.http.post(this.apiUrl, ad, {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    });
    response.subscribe((res) => console.log(res));
    return response;
  }

  // searchAds(searchTerm): Observable<any> {
  //   return Observable.create(observer => {
  //     this.http
  //       .post(
  //         `http://localhost:3000/search`,
  //         { search: `${searchTerm}` },

  //         {
  //           headers: new HttpHeaders({
  //             'content-type': 'application/json'
  //           })
  //         }
  //       )
  //       .subscribe(res => {
  //         observer.next(res);
  //       });
  //   });
  // }

  getCountryCode(country): Observable<any> {
    return Observable.create(observer => {
      this.http
        .get(`https://restcountries.eu/rest/v2/name/${country}`)
        .subscribe(res => {
          observer.next(res[0].alpha3Code);
        });
    });
  }

  // getSelectedAd(): Observable<any> {
  //   return Observable.create(observer => {
  //     this.http.get(`http://localhost:3000/`).subscribe(res => {
  //       observer.next(res);
  //     });
  //   });
  // }

  // postAds(
  //  price,
  //           title,
  //           date,
  //           username,
  //           description,
  //           pictureName,
  //           lat,
  //           lon,
  //           country,
  //           city,
  //           postcode,
  //           road,
  //           house_number,
  //           length,
  //           width,
  //           height,
  //           weight
  // ): Observable<any> {
  //   return Observable.create(observer => {
  //     this.http
  //       .post(
  //         `http://localhost:3000/createad`,
  //         {
  //           price: `${price}`,
  //           title: `${title}`,
  //           date: `${date}`,
  //           username: `${username}`,
  //           description: `${description}`,
  //           pictureName: `${pictureName}`,
  //           lat: `${lat}`,
  //           lon: `${lon}`,
  //           country: `${country}`,
  //           city: `${city}`,
  //           postcode: `${postcode}`,
  //           road: `${road}`,
  //           house_number: `${house_number}`,
  //           length: `${length}`,
  //           width: `${width}`,
  //           height: `${height}`,
  //           weight: `${weight}`
  //         },

  //         {
  //           headers: new HttpHeaders({
  //             'content-type': 'application/json'
  //           })
  //         }
  //       )
  //       .subscribe(res => {
  //         observer.next(res);
  //       });
  //   });
  // }

  // deleteAd(date): Observable<any> {
  //   return Observable.create(observer => {
  //     this.http
  //       .post(
  //         `http://localhost:3000/deletead`,
  //         { date: `${date}` },

  //         {
  //           headers: new HttpHeaders({
  //             'content-type': 'application/json'
  //           })
  //         }
  //       )
  //       .subscribe(res => {
  //         observer.next(res);
  //       });
  //   });
  // }

  // getLocation() {
  //   var options = {
  //     enableHighAccuracy: true,
  //     timeout: 5000,
  //     maximumAge: 0
  //   };

  //   function error(err) {
  //     console.warn(`ERROR(${err.code}): ${err.message}`);
  //   }

  deleteAd(id) {
    return this.http.delete(`${this.apiUrl}/${id}`).subscribe();
  }

  getLocation() {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(
      data => {
        console.log('lat', this.pos.lat);
        this.pos.lat = data.coords.latitude;
        this.pos.lon = data.coords.longitude;
      },
      error,
      options
    );
    return this.pos;
  }

  getAddress(): Observable<any> {
    return Observable.create(observer => {
      navigator.geolocation.getCurrentPosition(
        data => {
          this.http
            .get<Address>(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${
                data.coords.latitude
              }&lon=${data.coords.longitude}`
            )
            .subscribe(res => {
              observer.next(res);
            });
        },
        error => {
          observer.error(error);
        }
      );
    });
  }

  // getQuote(): Observable<any> {
  //   return Observable.create(observer => {
  //     this.getAddress().subscribe(addressData => {
  //       this.http
  //         .get(
  //           `https://restcountries.eu/rest/v2/name/${
  //             addressData.address.country
  //           }`
  //         )
  //         .subscribe(countryData => {
  //           observer.next(
  //             this.http
  //               .post(
  //                 `https://sandbox-api.postmen.com/v3/rates`,

  //                 {
  //                   async: false,
  //                   shipper_accounts: [
  //                     {
  //                       id: 'a2b8a970-6fe5-4491-b9e2-8e3a6d17cd08'
  //                     }
  //                   ],
  //                   shipment: {
  //                     parcels: [
  //                       {
  //                         description: 'Food XS',
  //                         box_type: 'custom',
  //                         weight: {
  //                           value: 1,
  //                           unit: 'kg'
  //                         },
  //                         dimension: {
  //                           width: 20,
  //                           height: 40,
  //                           depth: 40,
  //                           unit: 'cm'
  //                         },
  //                         items: [
  //                           {
  //                             description: 'Foooood Bar',
  //                             origin_country: 'ESP',
  //                             quantity: 1,
  //                             price: {
  //                               amount: 3,
  //                               currency: 'JPY'
  //                             },
  //                             weight: {
  //                               value: 1,
  //                               unit: 'kg'
  //                             }
  //                           }
  //                         ]
  //                       }
  //                     ],
  //                     ship_from: {
  //                       contact_name: 'Someone in BCN',
  //                       street1: `${addressData.address.road}`,
  //                       city: `${addressData.address.city}`,
  //                       state: `${addressData.address.country}`,
  //                       country: `${countryData[0].cioc}`,
  //                       postal_code: `${addressData.address.postcode}`
  //                     },
  //                     ship_to: {
  //                       contact_name: 'Someone in Essen',
  //                       street1: 'Dorstener str. 6',
  //                       city: 'Essen',
  //                       state: 'NRW',
  //                       country: 'DEU',
  //                       postal_code: '45143'
  //                     }
  //                   }
  //                 },

  //                 {
  //                   headers: new HttpHeaders({
  //                     'content-type': 'application/json',
  //                     'postmen-api-key': '79346888-11a0-493c-9ff7-2633ca0bc0c9'
  //                   })
  //                 }
  //               )
  //               .subscribe(data => observer.next(data))
  //           );
  //         });
  //     });
  //   });
  // }

  getShipments(addData, buyerLocation): Observable<any> {
    console.log('weight', typeof addData.weight);

    return Observable.create(observer => {
      this.getAddress().subscribe(addressData => {
        // this.http
        //   .get(`https://restcountries.eu/rest/v2/name/${buyerLocation.country}`)
        //   .subscribe(countryData => {
        //     observer.next(
        this.http
          .post(
            `https://sandbox-api.postmen.com/v3/rates`,
            {
              async: false,
              shipper_accounts: [
                {
                  id: 'a2b8a970-6fe5-4491-b9e2-8e3a6d17cd08'
                }
              ],
              shipment: {
                parcels: [
                  {
                    description: 'Food XS',
                    box_type: 'custom',
                    weight: {
                      value: addData.weight,
                      unit: 'kg'
                    },
                    dimension: {
                      width: addData.width,
                      height: addData.height,
                      depth: addData.length,
                      unit: 'cm'
                    },
                    items: [
                      {
                        description: 'Foooood Bar',
                        origin_country: 'ESP',
                        quantity: 1,
                        price: {
                          amount: 3,
                          currency: 'EUR'
                        },
                        weight: {
                          value: 1,
                          unit: 'kg'
                        }
                      }
                    ]
                  }
                ],
                ship_from: {
                  contact_name: `Seller in ${addData.city}, ${addData.country}`,
                  street1: `${addData.road}`,
                  city: `${addData.city}`,
                  state: `${addData.county}`,
                  country: `${addData.country}`,
                  postal_code: `${addData.postcode}`
                },

                ship_to: {
                  contact_name: 'Someone',
                  street1: `${buyerLocation.road}`,
                  city: `${buyerLocation.city}`,
                  // "state": "NRW",
                  country: 'ESP',
                  // country: `${countryData[0].alpha3Code}`,
                  postal_code: `${buyerLocation.postcode}`
                }
              }
            },
            {
              headers: new HttpHeaders({
                'content-type': 'application/json',
                'postmen-api-key': '79346888-11a0-493c-9ff7-2633ca0bc0c9'
              })
            }
          )
          .subscribe(data => observer.next(data));
        // );
      });
    });
    // });
  }
}
