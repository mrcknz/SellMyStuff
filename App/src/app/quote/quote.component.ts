import { Component, OnInit, Input } from '@angular/core';
import { ConfigService } from '../config.service';
import { Subscriber } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  public quoteData = null;

  @Input() selectedAddData: any;
  @Input() buyerLocation: any;

  profileForm = new FormGroup({
    address: new FormGroup({
      house_number: new FormControl(''),
      road: new FormControl(''),
      city: new FormControl(''),
      postcode: new FormControl(''),
      country: new FormControl(''),
    })
  });

  constructor(private _dataService: ConfigService) { }

  ngOnInit() {

    this._dataService.getAddress()
      .subscribe(addressData => {
        this.profileForm.patchValue({
          address: {
            road: addressData.address.road,
            city: addressData.address.city,
            postcode: addressData.address.postcode,
            country: addressData.address.country,
            house_number: addressData.address.house_number
          }
        });
    });

    console.log(' sdffd s',this.selectedAddData);
    

    
    
    // this._dataService.getShipments(this.selectedAddData)
    //   .subscribe(quoteData => {
    //     this.quoteData = quoteData
    // });

    
  }

}
