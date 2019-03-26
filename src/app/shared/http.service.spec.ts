import {TestBed} from '@angular/core/testing';
import {HttpService} from './http.service';
import {Observable, of} from 'rxjs';
import {ResponseResultModel} from './response-result.model';

describe('HttpService', () => {
  const httpServiceMock = {
    loadVideosSuggestions() {
      return of({});
    }
  };
  let httpServiceInstance: HttpService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpService,
          useValue: httpServiceMock
        }
      ]
    });
    httpServiceInstance = TestBed.get(HttpService);
  });
  it('Http returns Observable', done => {
    httpServiceInstance.loadVideosSuggestions(123).subscribe( value => {
      expect(value).toEqual(value as Observable<ResponseResultModel>);
      done();
    });
  });
});
