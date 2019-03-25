import {inject, TestBed} from '@angular/core/testing';

import {HttpService} from './http.service';
import {HttpClientTestingModule, HttpTestingController, HttpTestingController} from '@angular/common/http/testing';
import {Observable} from 'rxjs';
import {ResponseResultModel} from './response-result.model';
import {HttpClient} from '@angular/common/http';

class MockHttpService {
  constructor(private http: HttpClient) {

  }

  loadVideosSuggestions(searchString) {
    return new Observable();
  }
}

describe('HttpService', () => {
  let service: MockHttpService;
  let backend: HttpTestingController;
  let mockResult: Observable<ResponseResultModel>;
  beforeEach(() => {
    service = MockHttpService;
    backend = HttpTestingController;
    mockResult = Observable;

    TestBed.configureTestingModule({
      providers: [MockHttpService],
      imports: [HttpClientTestingModule],
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return Observable of results from API', () => {
    service.loadVideosSuggestions(123).subscribe(videos => {
      expect(videos).toEqual(mockResult);
    });
  });

  it('should be backend', () => {
    backend.expectOne({
      method: 'GET',
      url: `https://www.googleapis.com/youtube/v3/search?part=id&q=123&type=video&key=AIzaSyAKREge49ewyVbq81za_vf0FinDEH1vq1w`
    }).flush(mockResult);
  });

});

