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
export class SearchBoxComponent implements OnInit {
  field = new FormControl('');
  destroy$: Subject<any> = new Subject<any>();
  searchResults$: Observable<any>;

  constructor(private http: HttpService) {
  }

  ngOnInit() {
    this.searchResults$ = this.field.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      filter(value => value > 3),
      switchMap((value) => this.http.loadVideosSuggestions(value)));
    console.log(this.searchResults$);
  }
}
