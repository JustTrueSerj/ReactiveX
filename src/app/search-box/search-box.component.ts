import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {distinctUntilChanged, debounceTime, filter, switchMap, map} from 'rxjs/operators';
import {HttpService} from '../shared/http.service';
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
