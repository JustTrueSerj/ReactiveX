import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {distinctUntilChanged, debounceTime, filter, switchMap, map} from 'rxjs/operators';
import {HttpService} from '../../shared/http.service';
import {ChangeDetectionStrategy} from '@angular/core';
import {CommunicateService} from '../../shared/communicate.service';
import {select, Store} from '@ngrx/store';
import {ALL, VideoSearchAction} from '../../ngrx/actions/result.action';


@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent implements OnInit {
  field: FormControl = new FormControl('');
  videos$ = this.store.pipe(select(fromRoot.selectFeatureCount,));

  constructor(private http: HttpService, private communicateService: CommunicateService, private store: Store) {
  }

  ngOnInit() {
    this.store.dispatch({type: ALL});
    this.field.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      filter(value => value.length > 3)
    ).subscribe(value => {
      this.store.dispatch(new VideoSearchAction(value));
    });
  }
}
