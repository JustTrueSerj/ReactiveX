import {Action} from '@ngrx/store';

export const ALL = 'ALL';
export const VIDEO = 'VIDEO';
export const VIDEO_AND_PHOTO = 'VIDEO_AND_';
export const VideoSearchActionType = '[Video] Video Search';
export const LOAD_VIDEOS_SUCCESS = '[Video] Load Success';
export const FILTER_RESULT = '[Radio] Filter video';

export class VideoSearchAction implements Action {
  readonly type = VideoSearchActionType;
  constructor(readonly payload: string) {}

}

export type VideoActions = VideoSearchAction | VideoLoadSuccessAction | VideoFilterByRadioChangerAction;


export class VideoLoadSuccessAction implements Action {
  readonly type = LOAD_VIDEOS_SUCCESS;
  constructor(readonly payload: any) {}

}

export class VideoFilterByRadioChangerAction implements Action {
  readonly type = FILTER_RESULT;
  constructor(readonly payload: any) {}
}
