import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-your-address',
  templateUrl: './your-address.component.html',
  styleUrls: ['./your-address.component.css']
})
export class YourAddressComponent implements OnInit {
  
  public addressData = null;

  constructor(private _dataService: ConfigService) { }

  ngOnInit() {
    this._dataService.getAddress()
      .subscribe(addressData => {
        this.addressData = addressData
      })
  }

}
