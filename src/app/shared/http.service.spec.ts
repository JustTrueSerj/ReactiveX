import {TestBed} from '@angular/core/testing';
import {HttpService} from './http.service';
import {Observable, of} from 'rxjs';
import {ResponseResultModel} from './response-result.model';

describe('HttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpService,
          useValue: of({}) as Observable<ResponseResultModel>
        }
      ]
    });
  });
  it('Http returns Observable', () => {
    HttpService.loadVideosSuggestions(123).subscribe( value => {
      expect(value).toEqual(value as Observable<ResponseResultModel>);
    });
  });
});
