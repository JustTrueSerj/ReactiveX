import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResponseResultModel} from './response-result.model';
import {Observable, of} from 'rxjs';
import {ItemsModel} from './items.model';
import {map} from 'rxjs/operators';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {

  }

  loadVideosSuggestions(value: string, radioSelector: string): Observable<ResponseResultModel> {
    return of({
      etag: 'etag',
      items: [
        {
          etag: 'Video and photo',
          id:
            {
              kind: 'kind',
              videoId: 'FirstVideo'
            },
          kind: 'kind'
        },
        {
          etag: 'Video and photo',
          id:
            {
              kind: 'kind',
              videoId: 'SecVideo'
            },
          kind: 'kind'
        },
        {
          etag: 'Video',
          id:
            {
              kind: 'kind',
              videoId: 'ThirdVideo'
            },
          kind: 'kind'
        },
        {
          etag: 'Video',
          id:
            {
              kind: 'kind',
              videoId: 'FourVideo'
            },
          kind: 'kind'
        },
        {
          etag: 'Video and photo',
          id:
            {
              kind: 'kind',
              videoId: 'FiveVideo'
            },
          kind: 'kind'
        }
      ] as ItemsModel[],
      kind: 'kind',
      nextPageToken: 'nextPage',
      pageInfo: {try: 'try'},
      regionCode: 'region code',
    }).pipe(
      map((result) => {
        console.log(value);
          return radioSelector === 'All'
            ? result
            : new changeValues(result, radioSelector);
        }
      ));
  }

  loadVideosSuggestionsFromApi(searchString) {
    return this.http.get(`https://www.googleapis.com/youtube/v3/search?part=id&q=${searchString}&type=video&key=AIzaSyAKREge49ewyVbq81za_vf0FinDEH1vq1w`) as Observable<ResponseResultModel>;
  }
}

function changeValues(result, radioSelector) {
  for (const field in result) {
    if (result.hasOwnProperty(field)) {
      field !== 'items'
        ? this[field] = field
        : this[field] = result.items.filter(value => value.etag === radioSelector);
    }
  }
  return this;
}

