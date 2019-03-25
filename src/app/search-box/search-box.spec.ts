import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import {SearchBoxComponent} from './search-box.component';
import {FormControl, FormsModule} from '@angular/forms';
import {HttpService} from '../shared/http.service';
import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';

describe('SearchBoxComponent', () => {
  let component: SearchBoxComponent;
  let fixture: ComponentFixture<SearchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBoxComponent ],
      imports: [FormsModule, FormControl, BrowserDynamicTestingModule],
      providers: [HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // it('SearchBox result', inject([HttpService], (service: HttpService) => {
  //   expect(service).toBeTruthy();
  // }));
});
