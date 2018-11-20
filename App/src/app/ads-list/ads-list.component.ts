import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Subscriber } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Ad } from '../ad';

@Component({
  // moduleId: module.id,
  selector: 'app-ads-list',
  templateUrl: './ads-list.component.html',
  styleUrls: [
    './ads-list.component.css'
  ]
})
export class AdsListComponent implements OnInit {
  adsData: Ad[];

  constructor(private _dataService: ConfigService) {}

  ngOnInit() {
    this.getAds();
  }

  getAds() {
    this._dataService.getAds().subscribe((data) => {
      this.adsData = data;
    });
  }
}

//   search = new FormControl('SEARCH ADS');

//   refresh() {
//     // this.router.navigate(['/'])
//     this._dataService.getAds()
//     .subscribe(adsData => {
//       this.adsData = adsData
//     })
//     this.search.setValue('');
//   }

//   clear() {
//     this.search.setValue('');
//   }

//   onSubmit() {
//     if (this.search.value)

//     {this._dataService.getAds()
//       .subscribe(adsData => {

//     })
//     this._dataService.searchAds(this.search.value)
//       .subscribe(results => {
//         this.adsData = results
//     })} else {this._dataService.getAds()
//       .subscribe(adsData => {
//         this.adsData = adsData

//     })}

//     this.search.setValue('');
//   }

// }
