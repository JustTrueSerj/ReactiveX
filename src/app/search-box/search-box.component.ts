import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Observable, of, timer} from 'rxjs';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  field = new FormControl('');

  ngOnInit() {
    of(this.field.valueChanges)
      .subscribe({
        next: subscriber => {
          const arrOfLoggedWords = [];
          subscriber.subscribe(value => {
            if ((value.length > 3) && (arrOfLoggedWords.every(arg => arg !== value))) {
              timer(500)
                .pipe(take(1))
                .subscribe(() => console.log(value));
            }
            arrOfLoggedWords.push(value);
          });
        }
      });
  }
}
