import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Observable, of, timer, ReplaySubject} from 'rxjs';
import {distinctUntilChanged, take, debounceTime, filter, takeUntil} from 'rxjs/operators';
import {HttpService} from './Http.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  field = new FormControl('');
  destroy: ReplaySubject<any> = new ReplaySubject<any>(1);
  searchResults = [];

  constructor(private http: HttpService) {
  }


  ngOnInit() {
    this.field.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      filter((fieldValue) => fieldValue.length > 3),
      takeUntil(this.destroy))
      .subscribe((fieldValue) => this.http.getData(fieldValue).subscribe(httpResult => {
        this.searchResults.length = 0;
        this.searchResults = httpResult.items.map(res => res);
        console.log(this.searchResults);
      }));
  }

  ngOnDestroy() {
    this.destroy.next(null);
    this.destroy.complete();
  }
}
