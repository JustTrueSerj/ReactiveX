import {ALL, LOAD_VIDEOS_SUCCESS, VIDEO, VIDEO_AND_PHOTO, VideoActions, VideoLoadSuccessAction} from '../actions/result.action';
import {Observable, of} from 'rxjs';
import {ResponseResultModel} from '../../shared/response-result.model';
import {Action} from '@ngrx/store';
import {ItemsModel} from '../../shared/items.model';
import {map} from 'rxjs/operators';
import {Actions} from '@ngrx/effects';

const initialState = {
  videos: [],
  search: ''
};

export function resultReducer(state = initialState, action: VideoActions) {
  switch (action.type) {
    case LOAD_VIDEOS_SUCCESS:
      // console.log({...state, videos: action.payload});
      return {...state, videos: action.payload};
    default:
      return state;
  }
}
