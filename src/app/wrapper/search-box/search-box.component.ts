import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {combineLatest, Observable} from 'rxjs';
import {distinctUntilChanged, debounceTime, filter, switchMap, map} from 'rxjs/operators';
import {HttpService} from '../../shared/http.service';
import {ItemsModel} from '../../shared/items.model';
import {ChangeDetectionStrategy} from '@angular/core';
import {CommunicateService} from '../../shared/communicate.service';
import {select, Store} from '@ngrx/store';
import {ALL} from '../../ngrx/actions/result.action';


@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent implements OnInit {
  field: FormControl = new FormControl('');
  searchResults$: Observable<ItemsModel[]>;
  result$;
  firstWorkingResult;

  constructor(private http: HttpService, private communicateService: CommunicateService, private store: Store) {
    this.result$ = store.pipe(select('result'));
  }

  ngOnInit() {
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
        this.result$.subscribe(store$ => store$.pipe(map(({items}) => items)).subscribe(res => this.firstWorkingResult = res));
        console.log(this.firstWorkingResult);
        return this.http.loadVideosSuggestions(search, radio);
      }),
      map(({items}) => items)
    );
  }
}
