import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResponseResultModel} from '../shared/response-result.model';
import {Observable} from 'rxjs';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {

  }

  loadVideosSuggestions(searchString): Observable<ResponseResultModel> {
    return this.http.get(`https://www.googleapis.com/youtube/v3/search?part=id&q=${searchString}&type=video&key=AIzaSyAKREge49ewyVbq81za_vf0FinDEH1vq1w`);
  }
}
