import {
  FILTER_RESULT,
  LOAD_VIDEOS_SUCCESS,
  VideoActions,
} from '../actions/result.action';

const initialState = {
  videos: [],
  search: ''
};
let lastRequest: any;

export function resultReducer(state = initialState, action: VideoActions) {
  switch (action.type) {
    case LOAD_VIDEOS_SUCCESS:
      lastRequest = action.payload;
      return {...state, videos: action.payload};
    case FILTER_RESULT:
      return {
        ...state, videos: lastRequest.filter(x => action.payload !== 'All'
          ? x.etag === action.payload
          : x)
      };
    default:
      return state;
  }
}
