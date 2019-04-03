import {TestBed} from '@angular/core/testing';
import {HttpService} from './http.service';
import {of} from 'rxjs';

describe('HttpService', () => {
  const httpServiceMock = {
    loadVideosSuggestions() {
      return of({etag: '123'});
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
    httpServiceInstance.loadVideosSuggestions(123).subscribe(value => {
      expect(value.etag).toBe('123');
      done();
    });
  });
});
