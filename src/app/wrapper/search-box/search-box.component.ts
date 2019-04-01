import {Component, DoCheck, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {combineLatest, Observable, Subscription, } from 'rxjs';
import {distinctUntilChanged, debounceTime, filter, switchMap, map, withLatestFrom} from 'rxjs/operators';
import {HttpService} from '../../shared/http.service';
import {ItemsModel} from '../../shared/items.model';
import {ChangeDetectionStrategy} from '@angular/core';
import {CommunicateService} from '../../shared/communicate.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent implements OnInit, OnDestroy, DoCheck {
  @Output() radioValueToWrapper = new EventEmitter<string>();
  field = new FormControl('');
  searchResults$: Observable<ItemsModel[]>;
  communicate: Subscription;
  radioValue: string;

  constructor(private http: HttpService, private communicateService: CommunicateService) {
  }

  ngOnInit() {
    this.communicate = this.communicateService.radioValue$.subscribe(value => {
      this.radioValue = value;
      // console.log(this.radioValue);

      this.radioValueToWrapper.emit(value);
    });
    this.searchResults$ = this.field.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      filter(value => value.length > 3),
      switchMap(value => this.http.loadVideosSuggestions(value, this.radioValue)),
      map(({items}) => items));

    combineLatest(
      this.communicateService.radioValue$,
      this.searchResults$,
    );
  }

  ngDoCheck() {
    // combineLatest(
    //   this.communicateService.radioValue$,
    //   this.searchResults$,
    // ).subscribe(x => console.log(x));
  }

  ngOnDestroy() {
    this.communicate.unsubscribe();
  }
}
