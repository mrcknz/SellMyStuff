import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ConfigService } from '../config.service';
import { Subscriber } from 'rxjs';


@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.css']
})
export class CreateAdComponent implements OnInit {
  
  public addressData = null;
  public statusPostAd;

  profileForm = new FormGroup({
    username: new FormControl(''),
    itemDetails: new FormGroup({
      description: new FormControl(''),
      pictureName: new FormControl(''),
    }),
    package: new FormGroup({
      length: new FormControl(''),
      width: new FormControl(''),
      height: new FormControl(''),
      weight: new FormControl(''),
    }),
    address: new FormGroup({
      road: new FormControl(''),
      house_number: new FormControl(''),
      city: new FormControl(''),
      postcode: new FormControl(''),
      country: new FormControl(''),
    })
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);

    this._dataService.postAds(
      this.profileForm.value.username, this.profileForm.value.itemDetails.description, this.profileForm.value.itemDetails.pictureName, 
      this.addressData.lat, this.addressData.lon, 
      this.profileForm.value.address.country, this.profileForm.value.address.city, 
      this.profileForm.value.address.postcode, this.profileForm.value.address.road, 
      this.profileForm.value.address.house_number, 
      this.profileForm.value.package.length, 1,1,1
      // this.profileForm.value.package.width, 
      // this.profileForm.value.package.height, 
      // this.profileForm.value.package.weight
      // this.profileForm.value.username, this.profileForm.value.itemDetails.description, this.profileForm.value.itemDetails.pictureName, this.addressData.lat, this.addressData.lon, this.profileForm.value.address.country, this.profileForm.value.address.city, this.profileForm.value.address.postcode, this.profileForm.value.address.road, this.profileForm.value.address.house_number, this.profileForm.value.package.length, this.profileForm.value.package.width, this.profileForm.value.package.height, this.profileForm.value.package.weigth
      )
    .subscribe(statusPostAd => {
        this.statusPostAd = statusPostAd;
    })
    
  }

  constructor(private _dataService: ConfigService) { }

  ngOnInit() {
    this._dataService.getAddress()
      .subscribe(addressData => {
        this.addressData = addressData;
        this.profileForm.patchValue({
          address: {
            road: addressData.address.road,
            house_number: addressData.address.house_number,
            city: addressData.address.city,
            postcode: addressData.address.postcode,
            country: addressData.address.country
          }
        });
      })


  }

}
