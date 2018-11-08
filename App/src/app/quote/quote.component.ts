import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  public quoteData = null;

  constructor(private _dataService: ConfigService) { }

  ngOnInit() {
    this._dataService.getQuote()
      .subscribe(quoteData => {
        this.quoteData = quoteData
      })
  }

}
