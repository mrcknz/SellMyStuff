import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-ads-list',
  templateUrl: './ads-list.component.html',
  styleUrls: ['./ads-list.component.css']
})
export class AdsListComponent implements OnInit {

  public adsData = null;

  constructor(private _dataService: ConfigService) { }

  ngOnInit() {
    this._dataService.getAds()
      .subscribe(adsData => {
        this.adsData = adsData
      })
  }

}
