import {HttpService} from './http.service';
import {TestBed} from '@angular/core/testing';
import {Observable, of} from 'rxjs';
import {ResponseResultModel} from './response-result.model';
import {ItemsModel} from './items.model';

class MockHttpService {
  static loadVideosSuggestions(searchString: string): Observable<{ etag: string; items: { etag: string; id: { kind: string; videoId: string }[]; kind: string }[]; kind: string; nextPageToken: string; pageInfo: {}; regionCode: string }> {
    return of(mockResponseResult);
  }
}

let testService: MockHttpService;
let mockResponseResult: { etag: string; items: { etag: string; id: { kind: string; videoId: string }[]; kind: string }[]; kind: string; nextPageToken: string; pageInfo: {}; regionCode: string };

describe('Http Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
       providers: [MockHttpService]
    });
    testService = TestBed.get(MockHttpService);
    mockResponseResult = {
      etag: '123',
      items: [
        {
          etag: '123',
          id: [{
            kind: '123',
            videoId: '11111'
          }],
          kind: '123'
        }],
      kind: '1234',
      nextPageToken: '12345',
      pageInfo: {},
      regionCode: '12345677'
    };
  });

  it('Should return Observable', () => {
    expect(MockHttpService.loadVideosSuggestions('123')).toEqual(of(mockResponseResult));
  });
});
