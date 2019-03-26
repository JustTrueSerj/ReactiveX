import {TestBed} from '@angular/core/testing';
import {ItemsModel} from './items.model';
import {Observable, of} from 'rxjs';

class MockHttpService {
  static loadVideosSuggestions(searchString: string): Observable<ItemsModel[]> {
    console.log(searchString);
    return of(expectedData);
  }
}

const expectedData: ItemsModel[] = [
  {etag: '123', kind: '1234', id: null},
  {etag: '1234', kind: '12345', id: null},
  {etag: '12345', kind: '123456', id: null}
];

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
