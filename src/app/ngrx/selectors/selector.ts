import {createSelector, createFeatureSelector} from '@ngrx/store';
import {IdModel} from '../../shared/id.model';

export interface FeatureState {
  etag: string;
  id: IdModel;
  kind: string;
}

export interface AppState {
  videos: FeatureState[];
}

export const selectFeature = createFeatureSelector<AppState, FeatureState>('videos');

export const selectFeatureVideos = createSelector(
  selectFeature,
  (state: FeatureState) => state
);

