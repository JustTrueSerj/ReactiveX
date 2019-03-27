import {inject, TestBed} from '@angular/core/testing';

import {HttpService} from './Http.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Observable} from 'rxjs';
import {ResponseResultModel} from './response-result.model';

describe('HttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [HttpService],
    imports: [HttpClientTestingModule],
  }));

  it('should be created', inject([HttpService], (service: HttpService) => {
    expect(service).toBeTruthy();
  }));
  it('should return Observable of results from API', inject([HttpService, HttpTestingController],
    (service: HttpService, backend: HttpTestingController) => {
      const mockResult: Observable<ResponseResultModel>;
      service.loadVideosSuggestions(123).subscribe(videos => {
        expect(videos).toEqual(mockResult);
      });

      backend.expectOne({
        method: 'GET',
        url: `https://www.googleapis.com/youtube/v3/search?part=id&q=123&type=video&key=AIzaSyAKREge49ewyVbq81za_vf0FinDEH1vq1w`,
      }).flush(mockResult);
    }));
});
