import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ALL, VideoLoadSuccessAction} from '../actions/result.action';
import {map, switchMap} from 'rxjs/operators';
import {HttpService} from '../../shared/http.service';

@Injectable()
export class VideoEffects {
  @Effect()
  loadVideos$ = this.actions.pipe(
    ofType(ALL),
    switchMap(() => this.http.loadVideosSuggestions('', 'All')),
    map(({items}) => new VideoLoadSuccessAction(items)));

  constructor(private readonly actions: Actions, private http: HttpService) {

  }
}
