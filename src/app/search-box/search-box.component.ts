import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Observable, of, timer, Subject, ReplaySubject} from 'rxjs';
import {distinctUntilChanged, take, debounceTime, filter, takeUntil, switchMap, map} from 'rxjs/operators';
import {HttpService} from './Http.service';
import {AnonymousSubject} from 'rxjs/internal-compatibility';
import {ItemsModel} from '../shared/items.model';
import {ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./search-box.component.scss'],
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
      map(({items}) => items));
  }
}
