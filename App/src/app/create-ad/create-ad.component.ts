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

  profileForm: FormGroup;

  ngOnInit() {
    this.profileForm = new FormGroup({
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
    this.profileForm.value.pictureURL = pictureURL;
  }

  onSubmit() {
    this.service.postAds(this.profileForm.value).subscribe((err) => {
      if (err) {
        throw new Error('Error storing ad in DB');
      }
    });
  }

  // upload() {
  //   this.loading = true;
  //   this.uploader.uploadAll();
  //   this.uploader.onSuccessItem = (
  //     item: any,
  //     response: string,
  //     status: number,
  //     headers: any
  //   ): any => {
  //     let res: any = JSON.parse(response);
  //     console.log(res);
  //     this.profileForm.patchValue({
  //       itemDetails: {
  //         pictureName: res.secure_url
  //       }
  //     });
  //   };
  //   this.uploader.onErrorItem = function(fileItem, response, status, headers) {
  //     console.info('onErrorItem', fileItem, response, status, headers);
  //   };
  // }

  // onSubmit() {
  //   console.warn(this.profileForm.value);

  //   this._dataService
  //     .postAds(
  //       this.profileForm.value.itemDetails.price,
  //       this.profileForm.value.itemDetails.title,
  //       this.date,
  //       this.profileForm.value.username,
  //       this.profileForm.value.itemDetails.description,
  //       this.profileForm.value.itemDetails.pictureName,

  //       this.profileForm.value.address.country,
  //       this.profileForm.value.address.city,
  //       this.profileForm.value.address.postcode,
  //       this.profileForm.value.address.road,
  //       this.profileForm.value.address.house_number,
  //       this.profileForm.value.package.length,
  //       this.profileForm.value.package.width,
  //       this.profileForm.value.package.height,
  //       this.profileForm.value.package.weight
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
  //   this.profileForm.patchValue({
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
