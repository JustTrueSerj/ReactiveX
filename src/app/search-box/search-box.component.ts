import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Observable, of, timer, Subject, ReplaySubject} from 'rxjs';
import {distinctUntilChanged, take, debounceTime, filter, takeUntil, switchMap} from 'rxjs/operators';
import {HttpService} from './Http.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  field = new FormControl('');
  destroy$: Subject<any> = new Subject<any>();
  searchResults = [];

  constructor(private http: HttpService) {
  }

  ngOnInit() {
    this.field.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      filter(value => value > 3),
      switchMap((value) => this.http.loadVideosSuggestions(value)),
      takeUntil(this.destroy$))
      .subscribe(httpResult => {
          this.searchResults = httpResult.items;
          console.log(this.searchResults);
        }
      );
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
