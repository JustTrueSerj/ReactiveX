import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {combineLatest, Observable} from 'rxjs';
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
export class SearchBoxComponent implements OnInit {
  @Output() radioValueToWrapper = new EventEmitter<string>();
  field = new FormControl('');
  searchResults$: Observable<ItemsModel[]>;

  constructor(private http: HttpService, private communicateService: CommunicateService) {
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
        this.radioValueToWrapper.emit(radio);
        return this.http.loadVideosSuggestions(search, radio);
      }),
      map(({items}) => items)
    );
  }
}
