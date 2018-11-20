import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [
    './search.component.css'
  ]
})
export class SearchComponent implements OnInit {
  results: any[] = [];
  queryField: FormControl = new FormControl();

  constructor(private _service: ConfigService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.queryField.valueChanges.subscribe((searchTerm) => {
      if (searchTerm) {
        this.router.navigate(
          [
            'search/' + searchTerm
          ],
          { replaceUrl: true }
        );
      } else if (searchTerm === '') {
        this.router.navigate(
          [
            ''
          ],
          { replaceUrl: true }
        );
      }
    });
  }

  public getSearchResults(searchTerm) {
    this._service.search(searchTerm);
  }
}
