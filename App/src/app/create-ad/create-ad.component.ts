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
  }

  constructor(private _dataService: ConfigService) { }

  ngOnInit() {
    this._dataService.getAddress()
      .subscribe(addressData => {
        this.addressData = addressData;
      })
  }

}
