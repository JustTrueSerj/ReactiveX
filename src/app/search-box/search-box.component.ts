import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Observable, of, timer, ReplaySubject} from 'rxjs';
import {distinctUntilChanged, take, debounceTime, filter, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  field = new FormControl('');
  destroy: ReplaySubject<any> = new ReplaySubject<any>(1);


  ngOnInit() {
    this.field.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      filter((fieldValue) => fieldValue.length > 3),
      takeUntil(this.destroy))
      .subscribe(value => console.log(value));
  }

  ngOnDestroy() {
    this.destroy.next(null);
    this.destroy.complete();
  }
}
