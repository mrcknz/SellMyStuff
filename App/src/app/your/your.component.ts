import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-your',
  templateUrl: './your.component.html',
  styleUrls: ['./your.component.css']
})
export class YourComponent implements OnInit {

  public pos;

  constructor(private _dataService: ConfigService) { }

  ngOnInit() {
    this.pos = this._dataService.getLocation()
      // .subscribe(data => this.pos = data)

  }

}
