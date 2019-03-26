import {async, ComponentFixture, fakeAsync, inject, TestBed, tick} from '@angular/core/testing';

import {SearchBoxComponent} from './search-box.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpService} from '../shared/http.service';
import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';
import {of} from 'rxjs';

describe('SearchBoxComponent', () => {
  let component: SearchBoxComponent;
  let fixture: ComponentFixture<SearchBoxComponent>;
  const httpServiceMock = {
    loadVideosSuggestions() {
      return of({});
    }
  };
  beforeEach(async(() => {
    spyOn(httpServiceMock, 'loadVideosSuggestions').and.returnValue(of({a: 10}));
    TestBed.configureTestingModule({
      declarations: [SearchBoxComponent],
      imports: [FormsModule, ReactiveFormsModule, BrowserDynamicTestingModule],
      providers: [
        {
          provide: HttpService,
          useValue: httpServiceMock
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should load new suggestion', fakeAsync(() => {
    component.field.setValue('123');
    tick(500);
    expect(httpServiceMock.loadVideosSuggestions).toHaveBeenCalled();
  }));

  it('should return results of 123', fakeAsync(() => {
    component.field.setValue(123);
    tick(500);
    expect(component.field.value).toBe(123);
  }));
});
