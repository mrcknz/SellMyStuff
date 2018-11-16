import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ads-list-item',
  templateUrl: './ads-list-item.component.html',
  styleUrls: ['./ads-list-item.component.css']
})
export class AdsListItemComponent implements OnInit {
  @Input()
  public ad;
  constructor() {}

  ngOnInit() {}
}
