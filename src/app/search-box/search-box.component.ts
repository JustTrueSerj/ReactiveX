import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Observable, of, timer, Subject, ReplaySubject} from 'rxjs';
import {distinctUntilChanged, take, debounceTime, filter, takeUntil, switchMap, map} from 'rxjs/operators';
import {HttpService} from './Http.service';
import {AnonymousSubject} from 'rxjs/internal-compatibility';
import {ResponseResultModel} from '../shared/response-result.model';
import {ItemsModel} from '../shared/items.model';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  field = new FormControl('');
  searchResults$: Observable<ItemsModel[]>;

  constructor(private http: HttpService) {
  }

  ngOnInit() {
    this.searchResults$ = this.field.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      filter(value => value > 3),
      switchMap(value => this.http.loadVideosSuggestions(value)),
      map(value => {
        return value.items;
      }));
    this.searchResults$.subscribe(x => console.log(x));
  }
}
