import {createFeatureSelector, createSelector} from '@ngrx/store';

export const selectVideos = createFeatureSelector<AppState>(
  'videos'
);

export interface AppState {
  videos: [];
}

export const selectVideosList = createSelector(
  selectVideos,
  (state: AppState) => state.videos
);
