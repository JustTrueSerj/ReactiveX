import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {combineLatest, Observable} from 'rxjs';
import {distinctUntilChanged, debounceTime, filter, switchMap, map} from 'rxjs/operators';
import {HttpService} from '../../shared/http.service';
import {ItemsModel} from '../../shared/items.model';
import {ChangeDetectionStrategy} from '@angular/core';
import {CommunicateService} from '../../shared/communicate.service';
import {select, Store} from '@ngrx/store';
import {ResponseResultModel} from '../../shared/response-result.model';
import {ALL, VIDEO} from '../../shared/actions/result.actions';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent implements OnInit {
  field = new FormControl('');
  searchResults$: Observable<ItemsModel[]>;
  result$: Observable<ResponseResultModel>;
  constructor(private http: HttpService, private communicateService: CommunicateService, private store: Store<ResponseResultModel>) {
  }

  ngOnInit() {
    this.result$ = this.store.pipe(select('result'));

    this.searchResults$ = combineLatest(
      this.field.valueChanges.pipe(
        debounceTime(500),
        distinctUntilChanged(),
        filter(value => value.length > 3)
      ),
      this.communicateService.radioValue$,
    ).pipe(
      switchMap(([search, radio]) => {
        this.store.dispatch({type: ALL});
        return this.result$;
      }),
      map(({items}) => items)
    );
  }
}

