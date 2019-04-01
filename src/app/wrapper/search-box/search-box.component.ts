import {Component, DoCheck, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {distinctUntilChanged, debounceTime, filter, switchMap, map} from 'rxjs/operators';
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
  communicate: any;
  radioValue: string;

  constructor(private http: HttpService, private communicateService: CommunicateService) {
  }

  ngOnInit() {
    this.communicate = this.communicateService.radioValue$.subscribe(value => this.radioValue = value);
    this.searchResults$ = this.field.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      filter(value => value.length > 3),
      switchMap(value => this.http.loadVideosSuggestions(value)),
      map(({items}) => items.filter(item => this.radioValue !== 'All'
          ? item.etag === this.radioValue
          : item
      )));
  }

  ngDoCheck() {
    this.radioValueToWrapper.emit(this.radioValue);

  }

  ngOnDestroy() {
    this.communicate.unsubscribe();
  }
}
