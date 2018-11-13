import { Component, OnInit} from '@angular/core';
import { ConfigService } from '../config.service';
import { Subscriber } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  // moduleId: module.id,
  selector: 'app-ads-list',
  templateUrl: './ads-list.component.html',
  styleUrls: ['./ads-list.component.css']
})
export class AdsListComponent implements OnInit {
  public adsData = null;

  search = new FormControl('');

  refresh() {
    // this.router.navigate(['/'])
    this._dataService.getAds()
    .subscribe(adsData => {
      this.adsData = adsData
    })
    this.search.setValue('');
  }

  onSubmit() {
    if (this.search.value)

    {this._dataService.getAds()
      .subscribe(adsData => {
        
        
    })
    this._dataService.searchAds(this.search.value)
      .subscribe(results => {
        this.adsData = results
    })} else {this._dataService.getAds()
      .subscribe(adsData => {
        this.adsData = adsData
        
    })}

    this.search.setValue('');
  }

  constructor(private _dataService: ConfigService, private router: Router) { }

  ngOnInit() {
    this._dataService.getAds()
      .subscribe(adsData => {
        this.adsData = adsData
    })
  }

}
