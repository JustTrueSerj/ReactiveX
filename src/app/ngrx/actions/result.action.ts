import {Action} from '@ngrx/store';

export const ALL = 'ALL';
export const VIDEO = 'VIDEO';
export const VIDEO_AND_PHOTO = 'VIDEO_AND_';
export const VideoSearchActionType = '[Video] Video Search';
export const LOAD_VIDEOS_SUCCESS = '[Video] Load Success';

export class VideoSearchAction implements Action{
  readonly type = VideoSearchActionType;
  constructor(readonly payload: string) {}

}

export type VideoActions = VideoSearchAction | VideoLoadSuccessAction;


export class VideoLoadSuccessAction implements Action {
  readonly type = LOAD_VIDEOS_SUCCESS;
  constructor(readonly payload: any) {}

}
