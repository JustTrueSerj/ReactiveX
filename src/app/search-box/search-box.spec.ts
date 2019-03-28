import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {SearchBoxComponent} from './search-box.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpService} from '../shared/http.service';
import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';
import {of} from 'rxjs';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {LabelDirective} from '../shared/label.directive';
import {PluralizePipe} from '../shared/pluralize.pipe';

describe('SearchBoxComponent', () => {
  let component: SearchBoxComponent;
  let fixture: ComponentFixture<SearchBoxComponent>;
  const httpServiceMock = {
    loadVideosSuggestions(testString) {
      return of({field: testString});
    }
  };
  beforeEach(async(() => {
    spyOn(httpServiceMock, 'loadVideosSuggestions').and.returnValue(of({a: 10}));
    TestBed.configureTestingModule({
      declarations: [SearchBoxComponent, LabelDirective, PluralizePipe],
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
    expect(httpServiceMock.loadVideosSuggestions).toHaveBeenCalledWith(123);
  }));
});

