import {ALL, VIDEO, VIDEO_AND_PHOTO} from '../actions/result.action';
import {Observable, of} from 'rxjs';
import {ResponseResultModel} from '../../shared/response-result.model';
import {Action} from '@ngrx/store';
import {ItemsModel} from '../../shared/items.model';
import {map} from 'rxjs/operators';

export class InitialInterface implements ResponseResultModel {
  etag = '123';
  items = [];
  kind: 'kind';
  nextPageToken: 'nextPage';
  pageInfo: {try: 'try'};
  regionCode: 'region code';
}

export function resultReducer(state: Observable<ResponseResultModel> = of(InitialInterface), action: Action) {
  switch (action.type) {
    case ALL:
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
      });
    default:
      return state;
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
