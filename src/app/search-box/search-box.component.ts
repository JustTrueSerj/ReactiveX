import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  field = new FormControl('', [
    Validators.minLength(3)
  ]);

  ngOnInit() {
  }
}
