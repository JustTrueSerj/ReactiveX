import {ItemsModel} from './items.model';

export interface ResponseResultModel {
  etag: string;
  items: ItemsModel[];
  kind: string;
  nextPageToken: string;
  pageInfo: object;
  regionCode: string;
}
