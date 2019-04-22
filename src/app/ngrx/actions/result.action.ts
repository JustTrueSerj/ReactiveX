import {Action} from '@ngrx/store';

export const ALL = 'ALL';
export const VIDEO = 'VIDEO';
export const VIDEO_AND_PHOTO = 'VIDEO_AND_';
export const VideoSearchActionType = '[Video] Video Search';
export const LOAD_VIDEOS_SUCCESS = '[Video] Load Success';
export const FILTER_RESULT = '[Radio] Filter video';
export const WRAPPER_RADIO = '[Radio] To wrapper';

export class VideoSearchAction implements Action {
  readonly type = VideoSearchActionType;
  constructor(readonly payload: string) {}

}

export class WrapperRadioAction implements Action {
  readonly type = WRAPPER_RADIO;
  constructor(readonly payload: string) {}
}

export type VideoActions = VideoSearchAction | VideoLoadSuccessAction | VideoFilterByRadioChangerAction | WrapperRadioAction;


export class VideoLoadSuccessAction implements Action {
  readonly type = LOAD_VIDEOS_SUCCESS;
  constructor(readonly payload: string) {}

}

export class VideoFilterByRadioChangerAction implements Action {
  readonly type = FILTER_RESULT;
  constructor(readonly payload: string) {}
}
