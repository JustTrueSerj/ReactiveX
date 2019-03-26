import {TestBed} from '@angular/core/testing';
import {ItemsModel} from './items.model';
import {Observable, of} from 'rxjs';
import {ResponseResultModel} from './response-result.model';

class MockHttpService {
  static loadVideosSuggestions(searchString: string): Observable<ResponseResultModel> {
    console.log(searchString);
    return of(expectedData);
  }
}

const expectedData: ResponseResultModel = {
  etag: '123',
  items: null,
  kind: '123',
  nextPageToken: '123',
  pageInfo: null,
  regionCode: null
};

describe('Http Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });
  it('should returns Observable of ItemsModel', () => {
    MockHttpService.loadVideosSuggestions('123').subscribe((value) => {
      expect(value).toEqual(expectedData);
    });
  });
});
