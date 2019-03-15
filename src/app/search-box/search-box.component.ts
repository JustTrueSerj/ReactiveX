import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Observable, of, timer} from 'rxjs';
import {distinctUntilChanged, take, debounceTime, filter} from 'rxjs/operators';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  field = new FormControl('');

  ngOnInit() {
    this.field.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(500),
      filter((arg) => arg.length > 3))

      .subscribe(value => console.log(value));
  }
}
