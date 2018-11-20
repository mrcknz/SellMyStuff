import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: [
    './create-ad.component.css'
  ]
})
export class CreateAdComponent implements OnInit {
  constructor(private service: ConfigService) {}

  form: FormGroup;
  pictureURL: string;

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(),
      price: new FormControl(),
      pictureURL: new FormControl(),
      description: new FormControl(),
      length: new FormControl(),
      width: new FormControl(),
      height: new FormControl(),
      weight: new FormControl(),
      street: new FormControl(),
      postcode: new FormControl(),
      city: new FormControl(),
      country: new FormControl()
    });
  }

  onImageUpload(pictureURL) {
    this.pictureURL = pictureURL;
  }

  onSubmit() {
    if (this.form.status === 'VALID') {
      this.service.postAds({ ...this.form.value, pictureURL: this.pictureURL }).subscribe();
    }
  }

  // onSubmit() {
  //   console.warn(this.form.value);

  //   this._dataService
  //     .postAds(
  //       this.form.value.itemDetails.price,
  //       this.form.value.itemDetails.title,
  //       this.date,
  //       this.form.value.username,
  //       this.form.value.itemDetails.description,
  //       this.form.value.itemDetails.pictureName,

  //       this.form.value.address.country,
  //       this.form.value.address.city,
  //       this.form.value.address.postcode,
  //       this.form.value.address.road,
  //       this.form.value.address.house_number,
  //       this.form.value.package.length,
  //       this.form.value.package.width,
  //       this.form.value.package.height,
  //       this.form.value.package.weight
  //     )
  //     .subscribe(statusPostAd => {
  //       this.statusPostAd = statusPostAd;
  //       if (this.statusPostAd.command === 'INSERT') {
  //         this.router.navigate(['/details', this.date]);
  //       }
  //     });
  // }

  // let date = Date.now();
  // this.date = date;

  // this._dataService.getAddress().subscribe(addressData => {
  //   this.addressData = addressData;
  //   this.form.patchValue({
  //     address: {
  //       road: addressData.address.road,
  //       house_number: addressData.address.house_number,
  //       city: addressData.address.city,
  //       postcode: addressData.address.postcode,
  //       country: addressData.address.country
  //     }
  //   });
  // });
}
