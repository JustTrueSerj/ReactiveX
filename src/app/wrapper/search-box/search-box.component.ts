import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {combineLatest, Observable} from 'rxjs';
import {distinctUntilChanged, debounceTime, filter, switchMap, map} from 'rxjs/operators';
import {HttpService} from '../../shared/http.service';
import {ItemsModel} from '../../shared/items.model';
import {ChangeDetectionStrategy} from '@angular/core';
import {CommunicateService} from '../../shared/communicate.service';
import {select, Store} from '@ngrx/store';
import {ALL, VideoSearchAction} from '../../ngrx/actions/result.action';
import {All} from 'tslint/lib/rules/completedDocsRule';


@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent implements OnInit {
  field: FormControl = new FormControl('');
  videos$ = this.store.pipe(select('videos'));

  constructor(private http: HttpService, private communicateService: CommunicateService, private store: Store) {
  }

  ngOnInit() {
    this.store.dispatch({type: ALL});
    this.field.valueChanges.pipe(
        debounceTime(500),
        distinctUntilChanged(),
        filter(value => value.length > 3)
      ).subscribe(value => {
        console.log(value);
        this.store.dispatch(new VideoSearchAction(value));
        // this.videos$.subscribe(x => console.log(x));
    });
    // console.log(this.videos$);


    // this.searchResults$ = combineLatest(
    //   this.field.valueChanges.pipe(
    //     debounceTime(500),
    //     distinctUntilChanged(),
    //     filter(value => value.length > 3)
    //   ),
    //   this.communicateService.radioValue$,
    // ).pipe(
    //   switchMap(([search, radio]) => {
    //     this.store.dispatch({type: ALL});
    //     this.result$.subscribe(store$ => store$.pipe(map(({items}) => items)).subscribe(res => this.firstWorkingResult = res));
    //     console.log(this.firstWorkingResult);
    //     return this.http.loadVideosSuggestions(search, radio);
    //   }),
    //   map(({items}) => items)
    // );
  }
}
