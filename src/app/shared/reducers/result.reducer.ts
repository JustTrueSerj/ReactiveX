import {ALL, VIDEO_AND_PHOTO, VIDEO} from '../actions/result.actions';
import {Action} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {ResponseResultModel} from '../response-result.model';
import {ItemsModel} from '../items.model';
import {map} from 'rxjs/operators';

export function resultReducer(state: Observable<ResponseResultModel>, action: Action) {
   return state = of({
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
      switch (action.type) {
        case ALL:
          return result;
        case VIDEO:
          return new changeValues(result, 'Video');
        case VIDEO_AND_PHOTO:
          return new changeValues(result, 'Video and Photo');
        default:
          return result;
      }
    }
    ));
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
