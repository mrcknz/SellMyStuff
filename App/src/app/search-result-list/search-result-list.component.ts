import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Subscriber } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Ad } from '../ad';

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: [
    './search-result-list.component.css'
  ]
})
export class SearchResultListComponent implements OnInit {
  adsData: Ad[];

  constructor(private _service: ConfigService) {
    this._service.getSearchResults$().subscribe((results) => {
      this.adsData = results;
    });
  }

  ngOnInit() {}
}
