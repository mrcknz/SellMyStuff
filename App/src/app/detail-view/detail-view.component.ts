import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ConfigService } from '../config.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Ad } from '../ad';
import { ViewChild } from '@angular/core';
import {} from '@types/googlemaps';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {
  loading = true;
  public displaySpinner: boolean;
  private spinnerService: Ng4LoadingSpinnerService;
  step = 0;
  public id;
  ad = Ad;
  private sub: any;
  // private ad;
  private buyerLocation;
  public quoteData = null;
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  profileForm = new FormGroup({
    address: new FormGroup({
      // house_number: new FormControl(''),
      // road: new FormControl(''),
      city: new FormControl(''),
      postcode: new FormControl(''),
      country: new FormControl('')
    })
  });

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    console.log('sfasfsfasdfssdf');
    this.displaySpinner = true;
  }

  onSubmit() {
    this.buyerLocation = this.profileForm.value.address;
    this._dataService.getCountryCode(this.ad.country).subscribe(countryCode => {
      this._dataService
        .getShipments(
          {
            length: Number(this.ad.length),
            width: Number(this.ad.width),
            height: Number(this.ad.height),
            weight: Number(this.ad.weight),
            country: countryCode,
            city: this.ad.city,
            postcode: this.ad.postcode
            // road: this.ad.road,
            // house_number: this.ad.house_number
          },
          {
            country: this.profileForm.value.address.country,
            city: this.profileForm.value.address.city,
            postcode: this.profileForm.value.address.postcode
            // road: this.profileForm.value.address.road,
            // house_number: this.profileForm.value.address.house_number
          }
        )
        .subscribe(quoteData => {
          this.quoteData = quoteData;
          this.displaySpinner = false;
        });
    });
  }

  constructor(
    private route: ActivatedRoute,
    private _dataService: ConfigService,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getAd();

    const mapProp = {
      center: new google.maps.LatLng(41.3851, 2.1734),
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      zoomControl: true
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    const marker = new google.maps.Marker({ position: mapProp.center });
    marker.setMap(this.map);
  }

  getAd() {
    this._dataService.getAd(this.id).subscribe(data => {
      this.ad = data;
      this._dataService.getAddress().subscribe(addressData => {
        this.buyerLocation = addressData.address;
        console.log('address', this.buyerLocation);
        console.log('coords', addressData);
        this.profileForm.patchValue({
          address: {
            // road: addressData.address.road,
            city: addressData.address.city,
            postcode: addressData.address.postcode,
            country: addressData.address.country
            // house_number: addressData.address.house_number
          }
        });
        // this._dataService
        //   .getShipments(this.ad, addressData.address)
        //   .subscribe(quoteData => {
        //     this.quoteData = quoteData;
        //   });
      });
    });
  }

  deleteAd() {
    this._dataService.deleteAd(this.id);
    this.router.navigate(['/']);
  }

  //   this._dataService.getAddress().subscribe((addressData) => {
  //     this.buyerLocation = addressData.address;
  //     this.profileForm.patchValue({
  //       address: {
  //         // road: addressData.address.road,
  //         city: addressData.address.city,
  //         postcode: addressData.address.postcode,
  //         country: addressData.address.country,
  //         // house_number: addressData.address.house_number
  //       }
  //     });
  //     this._dataService.getShipments(this.ad, addressData.address).subscribe((quoteData) => {
  //       this.quoteData = quoteData;
  //     });

  //   });
  // }

  // this.sub = this.route.params.subscribe((params) => {
  //   this.id = +params['date'];
  // });
  // this._dataService.getAds().subscribe((ad) => {
  //   this.ad = ad.find((x) => x.date === this.id);

  // ngOnDestroy() {
  //   this.sub.unsubscribe();
  // }
}
